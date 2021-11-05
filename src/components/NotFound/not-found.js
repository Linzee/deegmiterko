import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { GatsbyImage } from "gatsby-plugin-image"

import "./not-found.scss";

const NotFound = ({ siteMetadata, notFoundImg }) => {
  return (
    <main className="not-found">
      <div className="profile">
        <GatsbyImage image={notFoundImg} alt={"Not found by "+siteMetadata.author} />
      </div>
      <div className="basic-info">

        <h1>404</h1>

        <span className="tagline">Not found. You know what this means...</span>

        <div className="nav">
          <div className="primary">
            <AnchorLink to={`/`}>
              <div className="link-content">Back to home</div>
            </AnchorLink>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
