import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const SEO = ({ title, siteMetadata, canGoDark }) => {

  const siteName = siteMetadata.title;
  const siteDescription = siteMetadata.description;
  const siteImage = siteMetadata.image;
  const keywords = siteMetadata.keywords;

  return (
    <Helmet
      title={title ? `${title} | ${siteName}` : siteName}
      meta={[
        {
          nsame: `description`,
          content: siteDescription
        },
        {
          property: `og:title`,
          content: siteName
        },
        {
          property: `og:description`,
          content: siteDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: siteImage
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:title`,
          content: (title ? `${title} | ${siteName}` : siteName)
        },
        {
          name: `twitter:description`,
          content: siteDescription
        },
        {
          property: `twitter:image`,
          content: siteImage
        },
        {
          name: `keywords`,
          content: keywords.join(`, `)
        }
      ]}
    >
      <body className={canGoDark ? "can-go-dark" : undefined} />
    </Helmet>
  );
}

SEO.defaultProps = {
  title: null,
};

SEO.propTypes = {
  title: PropTypes.string,
  siteMetadata: PropTypes.object,
};

export default SEO;
