
import React, { createContext, useContext, FunctionComponent, ReactNode, useRef } from "react";
import useApp from "../hooks/useApp";

export type BookStore = {
  pages: Array<{
    pageId: string,
    element: HTMLDivElement,
  }>,
  openToPage: (pageIndex: number) => void,
}

export type BookType = {
  id: string,
  book: BookStore,
  registerPage: (pageId: string, element: HTMLDivElement) => void,
}

const BookContext = createContext<BookType|undefined>(undefined);

const parentByClass = (element: HTMLElement, className: string): HTMLElement => {
  let parent = element.parentElement;
  while(parent && !parent.classList.contains(className)) {
    parent = parent.parentElement;
  }
  return parent;
}

export const BookProvider: FunctionComponent<{
  id: string, setCurrent: (i: number) => void, children: ReactNode
}> = ({ id, setCurrent, children }) => {
  const { registerBook } = useApp();
  const bookStore = useRef<BookStore>({ pages: [], openToPage: () => {}});

  bookStore.current.openToPage = (i: number) => {
    setCurrent(i);
    const book = parentByClass(bookStore.current.pages[i].element, "book");
    window.scrollTo({
      left: 0,
      top: book.offsetTop,
    });
  };

  registerBook(id, bookStore.current);

  const registerPage = (pageId: string, element: HTMLDivElement) => {
    bookStore.current.pages.push({
      pageId,
      element,
    });
  }

  return (
    <BookContext.Provider
      value={{
        id,
        book: bookStore.current,
        registerPage,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
