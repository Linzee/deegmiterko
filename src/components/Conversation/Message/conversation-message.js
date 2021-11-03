import React from "react";

import "./conversation-message.scss";

const Message = ({ data }) => {

  let media = null;
  if ('media' in data && data.media) {
    if (data.media.type == 'image') {
      media = (
        <img src={data.media.url} />
      );
    } else if (data.media.type == 'audio') {
      media = (
        <audio controls={true} autoplay={true}>
          <source src={data.media.url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      );
    } if (data.media.type == 'video') {
      media = (
        <video controls={true}>
          <source src={data.media.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  }

  return (
    <div className="message-container">
      {
        data.title &&
        <div className="title">
          {data.title}
        </div>
      }
      {
        media &&
        <div className="media">
          {media}
        </div>
      }
      {
        data.message &&
        <div className="message">
          {data.message}
        </div>
      }
    </div>
  );
}

export default Message;
