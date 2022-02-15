import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
const NavBar = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Movies
        </Link>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/customers">
          Customers
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/rentals">
          Rentals
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
