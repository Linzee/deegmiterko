import React from "react";

import "./footer.scss";

const Footer = ({ siteMetadata }) => {
  return (
    <footer className="footer" id="footer">
      © {new Date().getFullYear()} {siteMetadata.author}
    </footer>
  );
}

export default Footer;
