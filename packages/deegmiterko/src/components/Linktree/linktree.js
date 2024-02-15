import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import Item from "./Item";

import "./linktree.scss"

const Linktree = ({ categoriesLinks, siteMetadata, profileImg }) => {
  return (
    <div className="linktree">
      <div className="profile">
        <GatsbyImage image={profileImg} alt={siteMetadata.author} />
        <span>{siteMetadata.title}</span>
      </div>
      <div className="container">
        {categoriesLinks.map((category, i_1) => (
          <div key={i_1}>
            <h3>{category.name}</h3>
            {category.links.map((item, index) => (
              <Item key={index} link={item.link} title={item.title} icon={item.icon} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Linktree;
