import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/SEO";
import Banner from "../components/Banner";
import Conversation from "../components/Conversation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const IndexPage = ({ data, pageContext }) => {

  const contentImages = {};
  data.contentImages.edges.forEach(({node: {childImageSharp: {gatsbyImageData: imageData}, relativePath}}) => {
    contentImages[relativePath] = imageData;
  });

  return (
    <div className="page-about">
      <SEO
        siteMetadata={data.site.siteMetadata}
      />

      <Banner siteMetadata={data.site.siteMetadata} bannerImg={data.bannerImg.childImageSharp.gatsbyImageData} />

      <main id="about">
        {data.content.edges.map((section, i_1) => (
          section.node.childChatParsed.conversations.map((conversation, i_2) => (
            <Conversation key={i_1+":"+i_2} messages={conversation.messages} contentImages={contentImages} />
          ))
        ))}
      </main>

      <Contact siteMetadata={data.site.siteMetadata} />

      <Footer siteMetadata={data.site.siteMetadata} />
    </div>
  )
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
        keywords
        tagline
      }
    }
    content: allFile(
      filter: {sourceInstanceName: {eq: "content"}}
      sort: {fields: name}
    ) {
      edges {
        node {
          name
          childChatParsed {
            conversations {
              name
              color
              messages {
                author
                message
                anchor
                title
                media {
                  type
                  url
                  alt
                }
                website {
                  url
                  title
                  imageUrl
                }
              }
            }
          }
        }
      }
    }
    contentImages: allFile(
      filter: {sourceInstanceName: {eq: "images"}, relativePath: {glob: "content/*"}}
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData
          }
          relativePath
        }
      }
    }
    bannerImg: file(sourceInstanceName: {eq: "images"}, relativePath: {eq: "banner.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
