import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Categorias</h1>
      <div className="flex-row categorias">
        <div className="categoria-card">
          <NavLink
            to={"/category/Milanesas"}
            activeClassName="active"
            style={{ textDecoration: "none" }}
          >
            Milanesas
          </NavLink>
        </div>
        <div className="categoria-card">
          <NavLink
            to={"/category/buñuelos"}
            activeClassName="active"
            style={{ textDecoration: "none" }}
          >
            Buñuelos
          </NavLink>
        </div>
      </div>
      <div className="flex-row categorias">
        <div className="categoria-card">
          <NavLink
            to={"/category/tarta"}
            activeClassName="active"
            style={{ textDecoration: "none" }}
          >
            Tartas
          </NavLink>
        </div>
        <div className="categoria-card">
          <NavLink
            to={"/category/plato"}
            activeClassName="active"
            style={{ textDecoration: "none" }}
          >
            Platos
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
