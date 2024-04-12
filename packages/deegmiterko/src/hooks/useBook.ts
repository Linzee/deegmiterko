import { useContext } from "react";
import BookContext from "../contexts/bookContext";

const useBook = () => {
  const book = useContext(BookContext);
  if (!book) {
    throw new Error("useBook must be used within a BookProvider");
  }
  return book;
}

export default useBook;