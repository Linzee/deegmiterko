import React, { FunctionComponent } from "react";
import { SiteMetadata } from "../types";

type FooterType = {
  siteMetadata: SiteMetadata;
}

const Footer: FunctionComponent<FooterType> = ({ siteMetadata }) => {
  return (
    <footer className="footer" id="footer">
      © {new Date().getFullYear()} {siteMetadata.author}
    </footer>
  );
}

export default Footer;
