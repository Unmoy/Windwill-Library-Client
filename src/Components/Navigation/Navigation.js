import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Navigation.css";

const Navigation = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            Windwill Library
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse justify-content-end navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
              <Link className="nav-link active" to="/orders">
                Orders
              </Link>
              <Link className="nav-link active" to="/admin">
                Admin
              </Link>
              <Link to="/login">
                <button className="signIn-Btn">Login </button>
              </Link>

              {loggedInUser.email && (
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  {loggedInUser.displayName}
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
