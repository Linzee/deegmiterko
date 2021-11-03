import React from "react";

import Bordered from "../Bordered";

const Footer = ({ messages }) => {
  return (
    <div>
      {messages.map(message => (
        <Bordered>
          <span>{message.message}</span>
        </Bordered>
      ))}
    </div>
  );
}

export default Footer;
