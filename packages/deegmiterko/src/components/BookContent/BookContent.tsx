import React, { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { ChevronsRight, ChevronsLeft } from "react-feather";
import VisibilitySensor from "react-visibility-sensor";
import { useSwipeable } from "react-swipeable";

import useApp from "../../hooks/useApp";
import useBook from "../../hooks/useBook";

const BookContent: FunctionComponent<{
  title: string,
  current: number,
  setCurrent: (i: number) => void,
  children: Array<ReactNode>,
}> = ({ title, current, setCurrent, children }) => {
  const {bookPageSize} = useApp();
  const {book} = useBook();
  
  const [swipingDir, setSwipingDir] = useState<number>(0);
  const [bookVisible, setBookVisible] = useState<boolean>(false);
  const [firstNudge, setFirstNudge] = useState<boolean>(true);
  const swipeableHandlers = useSwipeable({
    trackTouch: true,
    trackMouse: true,
    onSwiping: ({ dir }) => {
      if(dir == "Left") {
        setSwipingDir(1);
      } else if (dir == "Right") {
        setSwipingDir(-1);
      } else {
        setSwipingDir(0);
      }
    },
    onSwiped: () => setSwipingDir(0),
    onSwipedLeft: () => current < children.length ? setCurrent(current+1) : null,
    onSwipedRight: () => current > 0 ? setCurrent(current-1) : null,
  });

  useEffect(() => {
    console.log(book.pages[current], book.pages)
    if(book.pages[current]) {
      const hash = `#${book.pages[current].pageId}`;
      history.pushState({}, `Dee Gmiterko - ${title}`, hash);
    }
  }, [current]);

  useEffect(() => {
    let timeout: NodeJS.Timeout|undefined;
    console.log(bookVisible, current, swipingDir)
    if(bookVisible && current == 0) {
      if(swipingDir == 0) {
        timeout = setTimeout(() => {
          setSwipingDir(1);
          setFirstNudge(false);
        }, firstNudge ? 1000 : 5000);
      } else {
        timeout = setTimeout(() => {
          setSwipingDir(0);
        }, 600);
      }
    }
    return () => {
      if(timeout) clearTimeout(timeout);
    }
  }, [bookVisible, current, swipingDir, firstNudge])

  return (
    <VisibilitySensor
      partialVisibility={true}
      offset={{
        top: bookPageSize*0.45,
        right: bookPageSize*0.45,
        bottom: bookPageSize*0.45,
        left: bookPageSize*0.45,
      }}
      intervalCheck={true}
      intervalDelay={1000}
      scrollCheck={true}
      scrollDelay={500}
      onChange={setBookVisible}
    >
      <div className="book">
        <div
          className="pages-wrapper"
          style={{ transform: `translateX(-${current * (bookPageSize+32) + swipingDir*bookPageSize*0.1}px)` }}
          {...swipeableHandlers}
        >
          {children.map((child, i) => (
            <div key={i} className="page-wrapper">
              {child}
              {current != i && (
                <button className="page-navigate" onClick={() => { setCurrent(i); setSwipingDir(0); }}>
                  {i > current ? (
                    <ChevronsRight />
                  ) : (
                    <ChevronsLeft />
                  )}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </VisibilitySensor>
  )
}

export default BookContent;
