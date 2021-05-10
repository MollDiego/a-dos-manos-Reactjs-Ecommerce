import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/logo.svg";
import CartWidget from "../cartWidget";

export const NavBar = () => {
  return (
    <div className="flex flex-row justify-between header">
      <div className="flex flex-row items-center ml-4 mt-4 mb-4">
        <img src={logo} alt="logo" className="" />
        <Link to={"/"}>
          <h2 className="ml-10 text-2xl font-bold">A dos Manos</h2>
        </Link>
      </div>
      <nav>
        <ul className="flex flex-row items-center h-full">
          <li className="ml-4 mr-4">
            <NavLink to={"/"} activeClassName="active" className="font-normal">
              Inicio
            </NavLink>
          </li>
          <li className="ml-4 mr-4">
            <NavLink
              to={"/category/ofertas"}
              activeClassName="active"
              className="font-normal"
            >
              Ofertas
            </NavLink>
          </li>
          <li className="ml-4 mr-4">
            <NavLink
              to={"/category/contacto"}
              activeClassName="active"
              className="font-normal"
            >
              Contacto
            </NavLink>
          </li>
          <CartWidget />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
