import React, { useEffect, useState } from "react";
import BooksManager from "../BooksManager/BooksManager";

const ManageBooks = () => {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    fetch("https://damp-lake-39521.herokuapp.com/allBooks")
      .then((res) => res.json())
      .then((data) => setBookList(data));
  }, []);
  return (
    <div>
      {bookList.map((books) => (
        <BooksManager key={books.key} books={books}></BooksManager>
      ))}
    </div>
  );
};

export default ManageBooks;
