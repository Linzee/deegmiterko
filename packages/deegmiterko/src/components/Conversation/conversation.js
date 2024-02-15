import React from "react";

import Bordered from "../Bordered";
import Message from "./Message";

import "./conversation.scss";

const Conversation = ({ messages, contentImages }) => {

  if(!messages) {
    return;
  }

  let i = 0;
  let si = 0;
  let messageCount = messages.length;
  let sequences = [];
  let currentSequence = [];

  const endSequence = (titleSequence, mine) => {
    if(!currentSequence.length) {
      return;
    }
    if (titleSequence) {
      sequences.push(
        <div key={si} className="title-sequence">
          <div className="sequence-messages">
            {currentSequence}
          </div>
        </div>
      );
    } else {
      sequences.push(
        <div key={si} className={mine ? "sequence mine" : "sequence"}>
          <Bordered>
            <div className="sequence-messages">
              {currentSequence}
            </div>
          </Bordered>
        </div>
      );
    }
    si += 1;
    currentSequence = [];
  };

  while (i < messageCount) {
    let previous = messages[i - 1];
    let current = messages[i];

    if (previous) {
      if (previous.author !== current.author || current.website || current.media) {
        endSequence(false, previous.author === "Me");
      }
    }

    if (current.title) {
      endSequence(false, previous && previous.author === "Me");
    }

    currentSequence.push(
      <Message key={i} data={current} contentImages={contentImages} />
    );

    if (current.title) {
      endSequence(true, undefined);
    }
    if (current.website || current.media) {
      endSequence(false, previous && previous.author === "Me");
    }

    i += 1;
  }

  endSequence(false, messages[messageCount-1].author === "Me");

  return (
    <div className="conversation">
      {sequences}
    </div>
  );
}

export default Conversation;
