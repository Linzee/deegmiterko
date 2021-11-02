import React from "react";
import Img from "gatsby-image";

import Item from "./Item";
import { Container } from "../Bordered";

import "./linktree.scss"

const Linktree = ({ links, siteMetadata, profileImg }) => {
  return (
    <div className="linktree">
      <div className="profile">
        <Img fluid={profileImg} alt={siteMetadata.author} />
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
