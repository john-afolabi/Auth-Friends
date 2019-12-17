import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Nav from "./components/Nav";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div>
      <Nav />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/friends" component={FriendsList} />
    </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default App;
