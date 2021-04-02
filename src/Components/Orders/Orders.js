import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { UserContext } from "../../App";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Orders = () => {
  const [orderedBookCart, setOrderedBookCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const classes = useStyles();
  useEffect(() => {
    fetch(
      `https://damp-lake-39521.herokuapp.com/bookcart?email=${loggedInUser.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrderedBookCart(data));
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Your Ordered Books</h2>
      <TableContainer
        style={{ width: "50%", marginLeft: "30%", marginTop: "80px" }}
        component={Paper}
      >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Book Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">OrderTime</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderedBookCart.map((book) => (
              <TableRow key={book.name}>
                <TableCell component="th" scope="row">
                  {book.name}
                </TableCell>
                <TableCell align="right">{book.price}</TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">
                  {new Date(book.orderTime).toDateString("dd / MM / yyyy")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orders;
