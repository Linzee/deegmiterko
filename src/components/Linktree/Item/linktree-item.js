import React from "react";
import PropTypes from "prop-types";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Bordered from "../../Bordered";

function LinktreeItem({ link, title, icon }) {

  const content = (
    <Bordered>
      <div className="item">
        <span>{title}</span>
        <FontAwesomeIcon icon={icon} />
      </div>
    </Bordered>
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
