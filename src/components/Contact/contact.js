import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import "./contact.scss"

const Contact = ({ siteMetadata }) => {
  return (
    <div className="contact-container">
      <div className="contact">
        <h2 id="contact">Contact</h2>
        <div className="contact-row">
          <p>
            Feel free to reach out to me at your preferred platform <i>🙂</i>. <small>You can start your very own conversation with me.</small>
          </p>
          <dl>

            <dt>Email</dt>
            <dd><OutboundLink href="mailto:me@deegmiterko.com">me@deegmiterko.com</OutboundLink></dd>

            <dt>Messenger</dt>
            <dd><OutboundLink href="https://m.me/dee.gmiterko">m.me/dee.gmiterko</OutboundLink></dd>

            <dt>Instagram</dt>
            <dd><OutboundLink href="https://instagram.com/dee.gmiterko">@dee.gmiterko</OutboundLink></dd>

            <dt>Discord</dt>
            <dd><OutboundLink href="#">Ienze#1672 at this discord server</OutboundLink></dd>

            <dt>Twitter</dt>
            <dd><OutboundLink href="https://twitter.com/dee.gmiterko">@dee.gmiterko</OutboundLink></dd>

            <dd>© {new Date().getFullYear()} {siteMetadata.author}</dd>

          </dl>
        </div>
      </div>
    </div>
  );
}

export default Contact;
