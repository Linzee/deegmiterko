import React, { FunctionComponent, ReactNode, useState } from "react";

import { BookProvider } from "../contexts/bookContext";
import BookContent from "./BookContent";

const Book: FunctionComponent<{
  children: Array<ReactNode>,
  id: string,
  title: string,
}> = ({ children, id, title }) => {
  const [current, setCurrent] = useState(0);

  return (
    <BookProvider id={id} setCurrent={setCurrent}>
      <BookContent title={title} current={current} setCurrent={setCurrent} children={children} />
    </BookProvider>
  )
}

export default Book;
