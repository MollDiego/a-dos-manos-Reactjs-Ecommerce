import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const Item = ({ item }) => {
  return (
    <div className="card-body" key={item.id}>
      <img src={item.urlImage} alt="img item" width="250px" className="img" />
      <div className="text">
        <h4 className="title">{item.title}</h4>
        <p className="descripcion">{item.descripcion}</p>
        <Link to={`/item/${item.id}`} style={{ textDecoration: "none" }}>
          {" "}
          Link al item
        </Link>
        <div className="price">El item cuesta : ${item.price}</div>
      </div>
    </div>
  );
};

export default Item;
