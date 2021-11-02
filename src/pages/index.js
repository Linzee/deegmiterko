import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const IndexPage = ({ data, pageContext }) => {
  return (
    <Layout siteMetadata={data.site.siteMetadata}>
    <SEO
      siteMetadata={data.site.siteMetadata}
    />

      <h1>Dominik Gmiterko</h1>

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
  }
`;
