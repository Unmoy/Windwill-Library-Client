import React from "react";
import firebaseConfig from "./firebase.config";
import "firebase/auth";
import firebase from "firebase/app";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./Login.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { username: displayName, email: email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <Button
        className="signIn-btn"
        onClick={handleGoogleSignIn}
        variant="outlined"
        color="secondary"
      >
        Google
      </Button>
    </div>
  );
};

export default Login;
