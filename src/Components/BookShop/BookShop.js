// import { makeStyles } from "@material-ui/core/styles";
import "./BookShop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookShop = (props) => {
  const { name, imageUrl, price, key } = props.book;

  return (
    <div>
      <Card className="productContainer mt-3">
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div className="d-flex justify-content-between mt-5">
            <div>
              <Card.Text>
                <span className="price">${price}</span>
              </Card.Text>
            </div>
            <div>
              <Link to={`/order/${key}`}>
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookShop;
