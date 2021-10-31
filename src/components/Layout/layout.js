import React from "react";
import PropTypes from "prop-types";

import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ siteMetadata, children }) => {

  return (
    <>
      <Header siteMetadata={siteMetadata} />
      <main>{children}</main>
      <Footer siteMetadata={siteMetadata} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
