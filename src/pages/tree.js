import React from "react";
import { graphql } from "gatsby";
import { faUser, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import SEO from "../components/SEO";
import Linktree from "../components/Linktree"

import "./main.scss"

const TreePage = ({ data, pageContext }) => {
  const links = [
    {
      title: 'About',
      icon: faUser,
      link: '/',
    },
    {
      title: 'Contact',
      icon: faAddressCard,
      link: '/#contact',
    },
    {
      title: 'Instagram',
      icon: faInstagram,
      link: 'https://instagram.com/dee.gmiterko',
    },
    {
      title: 'Twitter',
      icon: faTwitter,
      link: 'https://twitter.com/dee.gmiterko',
    }
  ]

  return (
    <div className="page-tree">
      <SEO
        title={"Link tree"}
        siteMetadata={data.site.siteMetadata}
        canGoDark={true}
      />

      <main>
        <Linktree links={links} siteMetadata={data.site.siteMetadata} profileImg={data.profileImg.childImageSharp.gatsbyImageData} />
      </main>

    </div>
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
    profileImg: file(sourceInstanceName: {eq: "images"}, relativePath: {eq: "profile.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
