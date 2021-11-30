const Ohm = require('ohm-js');
const moment = require('moment');

const parse = (users, script) => {

  const scriptGrammar = Ohm.grammar(`
    Script {
      doc = (row | nl)*
      row = (command | message | myMedia | pause | myMessage) (nl | end)
      message = name sep text
      myMessage = text
      myMedia = url
      pause = "---" | "..."
      command = commandChar (
        "title" sep commandTitle |
        "chat" sep commandChat |
        "date" sep commandDate |
        "reply" sep commandReply |
        "image" sep commandImage |
        "imageAlt" sep commandImageAlt |
        "audio" sep commandAudio |
        "video" sep commandVideo |
        "panorama" sep commandPanorama |
        "website" sep commandWebsite
      )
      commandTitle = text
      commandChat = name
      commandDate = text
      commandReply = param sep &name param sep param
      commandImage = &name param sep &url param
      commandImageAlt = &name param sep &url param sep param
      commandAudio = &name param sep &url param
      commandVideo = &name param sep &url param
      commandPanorama = &name param sep &url param
      commandWebsite = &name param sep &url param sep param sep &url param
      name = "Me" | "You" | "Lenka" | "Jakub"
      text = char+
      param = charParam+
      url = ("http://" | "https://") char+
      char = ~nl any
      charParam = ~sep ~nl any
      sep = ": "
      commandChar = "$"
      nl = "\\r"? "\\n"
    }
  `);

  const scriptSemantics = scriptGrammar.createSemantics().addOperation('value', {
    doc(ps) {
      return ps.children.map(c => c.value()).filter(Boolean);
    },
    row(content, _) {
      return content.value();
    },
    nl(_r, _n) {
      return null;
    },
    command(_$, _cmd, _sep, command) {
      return command.value();
    },
    message(author, _, text) {
      return {
        author: author.value(),
        message: text.value(),
      };
    },
    myMessage(text) {
      return {
        author: 'Me',
        message: text.value(),
      };
    },
    myMedia(url) {
      return {
        author: 'Me',
        media: {
          type: 'image',
          url: url.value(),
        }
      };
    },
    pause(_) {
      return {
        title: '· · ·'
      }
    },
    commandTitle(text) {
      return {
        title: text.value()
      };
    },
    commandChat(name) {
      return {
        conversation: name.value()
      }
    },
    commandDate(text) {
      return {
        title: moment(text.value()).format('LLLL')
      };
    },
    commandReply(original, _s1, _author, author, _s2, text) {
      return {
        author: author.value(),
        message: text.value(),
        reply: original.value(),
      };
    },
    commandImage(_author, author, _s1, _url, url) {
      return {
        author: author.value(),
        media: {
          type: 'image',
          url: url.value(),
        }
      };
    },
    commandImageAlt(_author, author, _s1, _url, url, _s2, alt) {
      return {
        author: author.value(),
        media: {
          type: 'image',
          url: url.value(),
          alt: alt.value(),
        }
      };
    },
    commandAudio(_author, author, _s1, _url, url) {
      return {
        author: author.value(),
        media: {
          type: 'audio',
          url: url.value(),
        }
      };
    },
    commandVideo(_author, author, _s1, _url, url) {
      return {
        author: author.value(),
        media: {
          type: 'video',
          url: url.value(),
        }
      };
    },
    commandPanorama(_author, author, _s1, _url, url) {
      return {
        author: author.value(),
        media: {
          type: 'panorama',
          url: url.value(),
        }
      };
    },
    commandWebsite(_author, author, _s1, _url, url, _s2, title, _s3, _imageUrl, imageUrl) {
      return {
        author: author.value(),
        website: {
          url: url.value(),
          title: title.value(),
          imageUrl: imageUrl.value(),
        }
      }
    },
    name(_) {
      return this.sourceString;
    },
    text(content) {
      return content.sourceString.trim();
    },
    param(content) {
      return content.sourceString;
    },
    url(_p, _) {
      return this.sourceString;
    }
  });

  let parsed = undefined;
  const match = scriptGrammar.match(script);
  if(match.succeeded()) {
    parsed = scriptSemantics(match).value();
  } else {
    throw new Error(match.message);
  }

  const conversations = users.map(user => {
    return Object.assign({}, user, {
      messages: []
    });
  }).filter(conversation => conversation.name != "Me");
  const messagesMap = {};
  const pfpMap = {};
  conversations.forEach(conversation => {
    messagesMap[conversation.name] = conversation.messages;
    pfpMap[conversation.name] = conversation.pfp;
  });

  let currentConversation = 'You';
  let i = 0;
  parsed.forEach(message => {
    if(message.conversation) {
      currentConversation = message.conversation;
    } else {
      message.order = i;
      message.pfp = pfpMap[message.author];
      i += 1;
      if (currentConversation in messagesMap) {
        messagesMap[currentConversation].push(message);
      } else {
        throw new Error("User "+currentConversation+" does not exist!")
      }
    }
  });

  return conversations;
}

exports.parse = parse;
