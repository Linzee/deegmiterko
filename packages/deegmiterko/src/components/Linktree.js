import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Item from "./LinktreeItem";


const Linktree = ({ categoriesLinks, siteMetadata }) => {
  return (
    <div className="linktree">
      <div className="profile">
        <StaticImage src="../images/profile.jpg" layout="constrained" alt={siteMetadata.author} />
        <h2>{siteMetadata.title}</h2>
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
