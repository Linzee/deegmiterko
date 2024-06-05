/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import React from "react";
import { AppProvider } from "./src/contexts/appContext";

export const wrapRootElement = ({ element }) => {
  return (
    <AppProvider>
      {element}
    </AppProvider>
  )
}