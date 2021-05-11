import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/logo.svg";
import CartWidget from "../cartWidget";
import "./navbar.css";

export const NavBar = () => {
  return (
    <div className="flex-row header-conrainer">
      <div className="flex-row logo">
        <img src={logo} alt="logo" height="56px" width="56px" />
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h2 className="title">A dos Manos</h2>
        </Link>
      </div>
      <nav>
        <div className="flex-row">
          <div>
            <NavLink
              to={"/"}
              activeClassName="active"
              className="font-normal navLink"
              style={{ textDecoration: "none" }}
            >
              Inicio
            </NavLink>
          </div>
          <div>
            <NavLink
              style={{ textDecoration: "none" }}
              to={"/cart"}
              activeClassName="active"
              className="navLink flex-row"
            >
              Carrito
              <CartWidget />
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
