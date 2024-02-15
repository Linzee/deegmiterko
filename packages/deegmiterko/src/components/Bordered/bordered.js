import React from "react";
import PropTypes from "prop-types";

import { BorderedContext } from "./Container";

import "./bordered.scss";

const Bordered = ({ children }) => {
  return (
    <BorderedContext.Consumer>
      {backgroundSizingCss => (
        <div className="bordered">
          <div className="bordered-row">
            <div className="border-horizontal" style={backgroundSizingCss} />
          </div>
          <div className="bordered-row">
            <div className="border-vertical" style={backgroundSizingCss} />
            <>
              {children}
            </>
            <div className="border-vertical" style={backgroundSizingCss} />
          </div>
          <div className="bordered-row">
            <div className="border-horizontal" style={backgroundSizingCss} />
          </div>
        </div>
      )}
    </BorderedContext.Consumer>
  );
}

Bordered.propTypes = {
  children: PropTypes.node.isRequired
};

export default Bordered;
