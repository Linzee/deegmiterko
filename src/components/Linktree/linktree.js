import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"

import Item from "./Item";
import { Container } from "../Bordered";

import "./linktree.scss"

const Linktree = ({ links, siteMetadata, profileImg }) => {
  return (
    <div className="linktree">
      <div className="profile">
        <GatsbyImage image={profileImg} alt={siteMetadata.author} />
        <span>{siteMetadata.title}</span>
      </div>
      <Container>
        <div className="container">
          {links.map((item, index) => (
            <Item key={index} link={item.link} title={item.title} icon={item.icon} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Linktree;
