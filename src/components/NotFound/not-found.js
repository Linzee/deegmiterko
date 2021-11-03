import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Img from "gatsby-image";

const NotFound = ({ siteMetadata, notFoundImg }) => {
  return (
    <main className="not-found">
      <div className="profile">
        <Img fluid={notFoundImg} alt={"Not found by "+siteMetadata.author} />
      </div>
      <div className="basic-info">

        <h1>404</h1>

        <span className="tagline">Not found</span>

        <div className="nav">
          <AnchorLink to={`/`}>
            Back to home
          </AnchorLink>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
