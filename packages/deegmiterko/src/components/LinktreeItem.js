import React from "react";
import PropTypes from "prop-types";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LinktreeItem({ link, title, icon }) {

  const content = (
    <div className="item">
      <span>{title}</span>
      <FontAwesomeIcon icon={icon} />
    </div>
  );

  if (link.startsWith("http")) {
    return (
      <OutboundLink href={link}>
        {content}
      </OutboundLink>
    );
  } else {
    return (
      <AnchorLink to={link}>
        {content}
      </AnchorLink>
    );
  }
}

LinktreeItem.defaultProps = {
  link: "/",
};

LinktreeItem.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.any,
};

export default LinktreeItem;
