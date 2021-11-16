import React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";

import Bordered from "../Bordered";

import "./contact.scss"

const Contact = ({ siteMetadata }) => {
  return (
    <div className="contact-container">
      <div className="contact">
        <h2 id="contact">Contact</h2>
        <div className="contact-row">
          <div className="last-words">
            <Bordered>
              <div className="message-container">
                <div className="message"><i>You can start your very own conversation with me...</i></div>
                <div className="message">Feel free to reach out to me at your preferred platform 🙂</div>
              </div>
            </Bordered>
          </div>
          <dl>

            <dd>Dominik Gmiterko</dd>

            <dt>Email</dt>
            <dd><OutboundLink href="mailto:me@deegmiterko.com">me@deegmiterko.com</OutboundLink></dd>

            <dt>Messenger</dt>
            <dd><OutboundLink href="https://m.me/dee.gmiterko">m.me/dee.gmiterko</OutboundLink></dd>

            <dt>Instagram</dt>
            <dd><OutboundLink href="https://instagram.com/dee.gmiterko">@dee.gmiterko</OutboundLink></dd>

            <dt>Discord</dt>
            <dd><OutboundLink href="https://discord.gg/discord-townhall">Lenze#1672 at this discord server</OutboundLink></dd>

            <dt>Twitter</dt>
            <dd><OutboundLink href="https://twitter.com/dee_gmiterko">@dee_gmiterko</OutboundLink></dd>

          </dl>
        </div>
      </div>
    </div>
  );
}

export default Contact;
