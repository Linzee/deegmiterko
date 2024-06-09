import React, { Fragment, FunctionComponent, ReactNode, useMemo, useRef } from "react";
import slugify from "slugify";

import useBook from "../hooks/useBook";
import clsx from "clsx";
import { useContentImage } from "../hooks/useContentImage";
import { useContentImages } from "../hooks/useContentImages";
import LightboxButton from "./LightboxButton";
import useApp from "../hooks/useApp";

export type MasonryElementType = {
  type: "image",
  path: string,
  alt: string,
} | {
  type: "node",
  aspectRatio: number,
  node: ReactNode,
};

export type MasonryPageType = {
  rows: number,
  title: string,
  titleNode?: ReactNode,
  subtitle?: string,
  children: MasonryElementType[],
}

const MasonryPage: FunctionComponent<MasonryPageType> = ({ rows, title, subtitle, children }) => {
  const { registerPage } = useBook();
  const imageMap = useContentImages();
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

  const childrenRows = useMemo(() => {
    type ChildrenNodeType = {
      aspectRatio: number,
      node: ReactNode,
    }
    const childrenNodes: ChildrenNodeType[] = children.map(child => (
      child.type == "image" ? (
        {
          aspectRatio: (
            imageMap[child.path][0].width / imageMap[child.path][0].height
          ),
          node: <LightboxButton path={child.path} alt={child.alt} />
        }
      ) : child.type == "node" ? (
        child
      ) : null
    ));
    console.log(childrenNodes)
    const totalLength = rows * 1200;
    const totalRatio = childrenNodes.reduce((acc, c) => acc + c.aspectRatio, 0);
    let row = 0;
    let rowLength = 0;
    const childrenRows: ChildrenNodeType[][] = [];
    for (const child of childrenNodes) {
      rowLength += child.aspectRatio / totalRatio * totalLength;
      if (!childrenRows[row]) {
        childrenRows[row] = [];
      }
      childrenRows[row].push(child);
      if (rowLength >= 1200) {
        rowLength = 0;
        row++;
      }
    }
    return childrenRows;
  }, [children, imageMap, rows]);

  return (
    <div ref={ref} className="page masonry">
      {childrenRows.map((row, i) => (
        <div key={i}>
          {row.map((child, j) => (
            <div key={j} style={{
              width: child.aspectRatio / row.reduce((acc, c) => acc + c.aspectRatio, 0) * 100 + "%",
              height: 1200 / rows,
            }}>
              {child.node}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MasonryPage;
