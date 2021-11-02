import React, { Component } from "react";
import Img from "gatsby-image";

import Item from "./Item";

import "./linktree.scss"

export default class Linktree extends Component {
  render() {
    const { links, siteMetadata, profileImg } = this.props;

    return (
      <div className="linktree">
        <div className="profile">
          <Img fluid={profileImg} alt={siteMetadata.author} />
          <span>{siteMetadata.title}</span>
        </div>
        <div className="container">
          {links.map((item, index) => (
            <Item key={index} link={item.link} title={item.title} icon={item.icon} />
          ))}
        </div>
      </div>
    );
  }
}
