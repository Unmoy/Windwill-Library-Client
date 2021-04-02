import React from "react";

const BooksManager = (props) => {
  const { name, price, _id } = props.books;

  const removeBook = (id) => {
    fetch("https://damp-lake-39521.herokuapp.com/delete/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
      },
    })
      .then((res) => res.json())
      .then((result) => alert("deleted succesfully"));
  };
  return (
    <div>
      <h5>{name}</h5>
      <h5>{price}</h5>
      <button onClick={() => removeBook(_id)}>Remove</button>
    </div>
  );
};

export default BooksManager;
