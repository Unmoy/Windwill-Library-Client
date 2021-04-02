import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddBooks from "./Components/AddBooks/AddBooks";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Orders from "./Components/Orders/Orders";
import ManageBooks from "./Components/ManageBooks/ManageBooks";
import { createContext } from "react";
import { useState } from "react";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import CheckOut from "./Components/CheckOut/CheckOut";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/managebooks">
            <ManageBooks></ManageBooks>
          </Route>
          <PrivateRoute path="/admin">
            <AddBooks></AddBooks>
          </PrivateRoute>
          <Route path="/orders">
            <Orders></Orders>
          </Route>
          <Route path="/order/:key">
            <CheckOut></CheckOut>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
