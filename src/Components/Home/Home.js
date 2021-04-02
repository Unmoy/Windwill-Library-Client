import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import BookShop from "../BookShop/BookShop";
import "./Home.css";
const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://damp-lake-39521.herokuapp.com/allBooks")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="books-Container">
      {books.length === 0 && (
        <Spinner
          style={{ marginLeft: "161%" }}
          animation="border"
          role="status"
        >
          <span className="sr-only"></span>
        </Spinner>
      )}
      {books.map((book) => (
        <BookShop key={book.key} book={book}></BookShop>
      ))}
    </div>
  );
};

export default Home;
