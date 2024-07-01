/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import "./src/style/index.scss";

import React from "react";
import { AppProvider } from "./src/contexts/appContext";

if (window.history.scrollRestoration) {
  window.history.scrollRestoration = "manual";
}

export const wrapRootElement = ({ element }) => {
  return (
    <AppProvider>
      {element}
    </AppProvider>
  )
}