import React, { createContext, useContext, FunctionComponent, ReactNode, useState, useLayoutEffect, useRef, useEffect } from "react";
import { useLocation } from "@reach/router";
import { BookStore } from "./bookContext";

export type AppType = {
  bookPageSize: number,
  bookPageScale: number,
  registerBook: (id: string, book: BookStore) => void,
}

const AppContext = createContext<AppType|undefined>(undefined);

export const AppProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [size, setSize] = useState<[number, number]>([0, 0]);
  const location = useLocation();
  const books = useRef<Record<string, BookStore>>({});
  
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if(location.hash) {
      const pageId = location.hash.substring(1);
      for (const book of Object.values(books.current)) {
        const pageIndex = book.pages.findIndex(({ pageId: p }) => p == pageId);
        if(pageIndex >= 0) {
          book.openToPage(pageIndex);
          break;
        }
      }
    }
  }, [location.hash]);

  const registerBook = (id: string, book: BookStore) => {
    books.current[id] = book;
  }

  const [width, height] = size;
  const bookPageSize = Math.min(width, height) - 32;
  const bookPageScale = bookPageSize / 1200;

  return (
    <AppContext.Provider
      value={{
        bookPageSize,
        bookPageScale,
        registerBook,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
