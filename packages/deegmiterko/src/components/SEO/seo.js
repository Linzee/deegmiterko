import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import useApp from '../../hooks/useApp';

import siteImage from '../../images/og-banner.jpg';

const SEO = ({ title, siteMetadata, canGoDark }) => {
  const siteName = siteMetadata.title;
  const siteDescription = siteMetadata.description;
  const keywords = siteMetadata.keywords;
  
  const {bookPageSize, bookPageScale} = useApp();
  
  return (
    <Helmet
      title={title ? `${title} | ${siteName}` : siteName}
      meta={[
        {
          name: `description`,
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
          name: `keywords`,
          content: keywords.join(`, `)
        }
      ]}
    >
      <html style={`--book-page-size: ${bookPageSize}px; --book-page-scale: ${bookPageScale}`} />
      <body lang="en" className={canGoDark ? "can-go-dark" : undefined} />
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
