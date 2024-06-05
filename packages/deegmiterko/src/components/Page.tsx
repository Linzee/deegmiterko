import React, { FunctionComponent, ReactNode, useRef } from "react";
import slugify from "slugify";

import useBook from "../hooks/useBook";
import clsx from "clsx";

export type PageType = {
  title: string,
  titleNode?: ReactNode,
  subtitle?: string,
  level?: 1 | 2 | 3 | 4,
  className?: string,
  titleClassName?: string,
  children: ReactNode|ReactNode[],
}

const Page: FunctionComponent<PageType> = ({ title, titleNode, subtitle, level=3, className, titleClassName, children }) => {
  const { registerPage } = useBook();
  const ref = useRef<HTMLDivElement>();
  const pageId = slugify(
    subtitle ? `${title} ${subtitle}` : `${title}`,
    {
      locale: "en",
      strict: true,
      replacement: "-",
      lower: true
    }
  );
  if (ref.current) {
    registerPage(pageId, ref.current);
  }
  const titleContent = (
    subtitle ? <>{title} <p className="subtitle">{subtitle}</p></> : title
  );

  return (
    <div ref={ref} className={clsx("page", className)}>
      {
        titleNode ?? (
          level == 1 ? (
            <h2 className={clsx(titleClassName)} id={pageId}>
              {titleContent}
            </h2>
          ) : level == 2 ? (
            <h3 className={clsx("bigger", titleClassName)} id={pageId}>
              {titleContent}
            </h3>
          ) : level == 3 ? (
            <h3 className={clsx(titleClassName)} id={pageId}>
              {titleContent}
            </h3>
          ) : level == 4 ? (
            <h4 className={clsx(titleClassName)} id={pageId}>
              {titleContent}
            </h4>
          ) :
          null
        )
      }
      { children }
    </div>
  );
}

export default Page;
