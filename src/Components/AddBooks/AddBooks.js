import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddBooks = () => {
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const uploadImage = new FormData();
    uploadImage.set("key", "00e062d52c84895195fcf7a9e35c76bf");
    uploadImage.set("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", uploadImage)
      .then((res) => setImage(res.data.data.display_url));
  };

  const onSubmit = (data) => {
    const bookLog = new FormData();
    bookLog.set({
      key: data.key,
      name: data.name,
      price: data.price,
      imageUrl: image,
    });
    fetch("https://damp-lake-39521.herokuapp.com/addbooks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookLog),
    });
  };

  return (
    <div>
      <form
        style={{ textAlign: "center", padding: "20px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input name="key" placeholder="Book Id" ref={register} />
        <br />
        <input name="name" placeholder="Book name" ref={register} />
        <br />
        <input name="price" placeholder=" Book Price" ref={register} />
        <br />
        <input
          type="file"
          name="price"
          onChange={handleImageUpload}
          placeholder=" Book Price"
        />
        <br />
        <input type="submit" />
      </form>
      <Link to="/managebooks">
        <Button> Manage</Button>
      </Link>
    </div>
  );
};

export default AddBooks;
