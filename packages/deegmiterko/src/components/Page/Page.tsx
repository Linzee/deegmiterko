import React, { FunctionComponent, ReactNode, useRef } from "react";
import slugify from "slugify";

import useBook from "../../hooks/useBook";

export type PageType = {
  title: string,
  subtitle?: string,
  level?: 1 | 2 | 3 | 4,
  children: ReactNode|ReactNode[],
}

const Page: FunctionComponent<PageType> = ({ title, subtitle, level=3, children }) => {
  const { registerPage } = useBook();
  const ref = useRef<HTMLDivElement>();
  const pageId = slugify(subtitle ? `${title} ${subtitle}` : `${title}`, { replacement: "-", lower: true });
  if (ref.current) {
    registerPage(pageId, ref.current);
  }
  const titleContent = subtitle ? <>{title} <p>{subtitle}</p></> : title;

  return (
    <div ref={ref} className="page">
      {
        level == 2 ? <h2 id={pageId}>{titleContent}</h2> :
        level == 3 ? <h3 id={pageId}>{titleContent}</h3> :
        level == 4 ? <h4 id={pageId}>{titleContent}</h4> :
        null
      }
      { children }
    </div>
  );
}

export default Page;
