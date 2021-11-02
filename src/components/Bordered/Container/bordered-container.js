import React, { useState } from "react";
import PropTypes from "prop-types";

const BorderedContext = React.createContext();

function BorderedContainer({ children }) {
  const [contentRef, setContentRef] = useState(null);

  let backgroundSizingCss = {
    backgroundPosition: "0 0",
    backgroundSize: "100% 100%",
  };

  if (contentRef) {
    const bb = contentRef.getBoundingClientRect();
    backgroundSizingCss = {
      backgroundPosition: bb.left+'px '+bb.top+'px',
      backgroundSize: bb.width+'px '+bb.height+'px',
    }
  }

  return (
    <div className="bordered-container" ref={setContentRef}>
      <BorderedContext.Provider value={backgroundSizingCss}>
        {children}
      </BorderedContext.Provider>
    </div>
  );
}

BorderedContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default BorderedContainer;
export {
  BorderedContext
};
