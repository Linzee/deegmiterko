import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Conversation from "../components/Conversation";

const IndexPage = ({ data, pageContext }) => {
  return (
    <Layout siteMetadata={data.site.siteMetadata}>
    <SEO
      siteMetadata={data.site.siteMetadata}
    />

      <h1>Dominik Gmiterko</h1>

      {data.content.edges.map(section => (
        section.node.childChatParsed.conversations.map(conversation => (
          <Conversation messages={conversation.messages} />
        ))
      ))}

    </Layout>
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
      }
    }
    content: allFile(filter: {sourceInstanceName: {eq: "content"}}) {
      edges {
        node {
          name
          childChatParsed {
            conversations {
              name
              color
              messages {
                order
                message
                author
              }
            }
          }
        }
      }
    }
  }
`;
