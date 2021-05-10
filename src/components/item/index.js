import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const Item = ({ item }) => {
  return (
    <div className="w-1/2 card-body" key={item.id}>
      <img src={item.urlImage} alt="img item" width="300px" />
      <div className="relative ml-10">
        <h3 className="title">{item.name}</h3>
        <p className="descripcion">Acá va su descripción</p>
        <Link to={`/item/${item.id}`}> Link al item</Link>
        <div className="price">
          El item cuesta :<p className="text-green-400">${item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
