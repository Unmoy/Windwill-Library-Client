import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "react-bootstrap";
import { UserContext } from "../../App";
import "./CheckOut.css";

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const CheckOut = () => {
  const classes = useStyles();
  const { key } = useParams();
  const [orderedBooks, setOrderedBooks] = useState({});
  const [loggedInUser] = useContext(UserContext);

  const handleCheckOut = () => {
    const orderedBooksCart = {
      ...loggedInUser,
      ...orderedBooks,
      orderTime: new Date(),
    };
    fetch("https://damp-lake-39521.herokuapp.com/orderedbooks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderedBooksCart),
    }).then((res) => alert("Your order is placed successfully"));
  };
  useEffect(() => {
    fetch(`https://damp-lake-39521.herokuapp.com/getbook/${key}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderedBooks(data[0]);
      });
  }, [key]);

  return (
    <div>
      <TableContainer
        style={{ width: "50%", marginLeft: "30%", marginTop: "80px" }}
        component={Paper}
      >
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Book Name</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow key={orderedBooks.name}>
              <StyledTableCell component="th" scope="row">
                {orderedBooks.name}
              </StyledTableCell>
              <StyledTableCell align="right">Romance</StyledTableCell>
              <StyledTableCell align="right">1</StyledTableCell>
              <StyledTableCell align="right">
                {orderedBooks.price}
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
          <TableBody>
            <StyledTableRow key={orderedBooks.name}>
              <StyledTableCell component="th" scope="row">
                Total
              </StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right">
                {orderedBooks.price}
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={handleCheckOut} className="btn">
        CheckOut
      </Button>
    </div>
  );
};

export default CheckOut;
