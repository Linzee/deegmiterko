const _ = require("lodash");
const parse = require("chat-parse").parse;

async function onCreateNode({
  node,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest,
}, pluginOptions) {
  function transformObject(obj, id, type) {
    const txtNode = {
      ...obj,
      id,
      children: [],
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(obj),
        type,
      },
    }
    createNode(txtNode);
    createParentChildLink({ parent: node, child: txtNode });
  }

  const { createNode, createParentChildLink } = actions;
  const { users } = pluginOptions;

  if (node.internal.mediaType !== `text/plain`) {
    return
  }

  const content = await loadNodeContent(node);
  const parsedContent = parse(users, content);

  transformObject(
    {
      conversations: parsedContent
    },
    createNodeId(`${node.id} >>> chatParsed`),
    _.upperFirst(_.camelCase(`Chat Parsed`))
  );
}

exports.onCreateNode = onCreateNode;
