import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundPage = ({ data, pageContext }) => (
  <Layout siteMetadata={data.site.siteMetadata}>
    <SEO
      title={"Not Found"}
      siteMetadata={data.site.siteMetadata}
    />

    <Container className="p-3">
      <Row>
        <Col md={12} className="p-3">
          <h1>
            <FormattedMessage id="title.not_found" defaultMessage="Not found" />
          </h1>
          <p>
            <FormattedMessage id="not_found.message" defaultMessage="You just hit a route that doesn't exist." />
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
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
  }
`;
