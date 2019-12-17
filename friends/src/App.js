import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Nav from "./components/Nav";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div>
      <Nav />
      <Route exact path="/login" component={Login} />
      <Route exact path="/friends" component={FriendsList} />
    </div>
  );
}

export default App;
