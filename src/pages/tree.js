import React, { useState } from "react";
import { graphql } from "gatsby";

import SEO from "../components/SEO";
import Linktree from "../components/Linktree"

const TreePage = ({ data, pageContext }) => {
  const links = [
    {
      title: 'Website',
      style: 'website',
      link: '/',
    },
    {
      title: 'Instagram',
      style: 'instagram',
      link: 'https://instagram.com/dee.gmiterko',
    },
    {
      title: 'Twitter',
      style: 'twitter',
      link: 'https://twitter.com/dee.gmiterko',
    }
  ]

  return (
    <main>
      <SEO
        title={"Link tree"}
        siteMetadata={data.site.siteMetadata}
      />

      <Linktree links={links} />

    </main>
  )
};

export default TreePage;

export const pageQuery = graphql`
  query TreeQuery {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
        keywords
      }
    }
  }
`;
