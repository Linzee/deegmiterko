import React from "react";

import Bordered from "../Bordered";
import Message from "./Message";

import "./conversation.scss";

const Conversation = ({ messages }) => {

  if(!messages) {
    return;
  }

  let i = 0;
  let si = 0;
  let messageCount = messages.length;
  let sequences = [];
  let currentSequence = [];

  const endSequence = (mine) => {
    sequences.push(
      <div key={si} className={mine ? "sequence mine" : "sequence"}>
        <Bordered>
          <div className="sequence-messages">
            {currentSequence}
          </div>
        </Bordered>
      </div>
    );
    si += 1;
    currentSequence = [];
  };

  while (i < messageCount) {
    let previous = messages[i - 1];
    let current = messages[i];

    if (previous) {
      if (previous.author !== current.author) {
        endSequence(previous.author === "Me");
      }
    }

    currentSequence.push(
      <Message key={i} data={current} />
    );

    i += 1;
  }

  endSequence(messages[messageCount-1].author === "Me");

  return (
    <div className="conversation">
      {sequences}
    </div>
  );
}

export default Conversation;
