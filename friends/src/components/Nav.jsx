import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        AuthFriends
      </a>
      {/* <a href="/login">Login</a>
      <a href="/friends">Friends</a> */}

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/friends">
            Friends
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
