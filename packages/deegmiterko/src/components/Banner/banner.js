import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { OutboundLink } from "gatsby-plugin-google-gtag";

import "./banner.scss";

const Banner = ({ siteMetadata }) => {
  return (
    <header className="banner">
      <div className="profile">
        {/*
        <StaticImage src="../../images/banner.jpg" alt={siteMetadata.author} layout="constrained" />
        */}
      </div>
      <div className="basic-info">

        <h1 alt={siteMetadata.title}>
          <span className="name-variations">
            <span className="main">D<span className="deff">ee</span></span>
            <span className="alternate">Dominik</span>
          </span>
          <span> Gmiterko</span>
        </h1>

        <span className="tagline">{siteMetadata.tagline}</span>

        <div className="nav">
          <div className="primary">
            <AnchorLink to={`/#about`}>
              <div className="link-content">Learn more about me</div>
            </AnchorLink>
            <AnchorLink to={`/#contact`}>
              <div className="link-content">Contact me</div>
            </AnchorLink>
          </div>

          <div className="quick-socials">
            <OutboundLink href="https://instagram.com/dee.gmiterko">
              <FontAwesomeIcon icon={faInstagram}>
                Instagram
              </FontAwesomeIcon>
            </OutboundLink>
            <OutboundLink href="https://twitter.com/dee_gmiterko">
              <FontAwesomeIcon icon={faTwitter}>
                Twitter
              </FontAwesomeIcon>
            </OutboundLink>
            <AnchorLink to={`/tree`}>
              More
            </AnchorLink>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Banner;
