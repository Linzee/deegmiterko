import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/SEO";
import NotFound from "../components/NotFound";

const NotFoundPage = ({ data, pageContext }) => (
  <>
    <SEO
      title={"Not Found"}
      siteMetadata={data.site.siteMetadata}
    />

    <NotFound siteMetadata={data.site.siteMetadata} notFoundImg={data.notFoundImg.childImageSharp.gatsbyImageData} />
  </>
);

export default NotFoundPage;

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
        keywords
      }
    }
    notFoundImg: file(sourceInstanceName: {eq: "images"}, relativePath: {eq: "not-found.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
