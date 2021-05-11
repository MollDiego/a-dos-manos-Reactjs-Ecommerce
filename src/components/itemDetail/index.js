import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../itemCount";
import "./itemDetail.css";
import "../item/styles.css";

export const ItemDatail = ({ item }) => {
  const [count, setCount] = useState(0);

  function addHandler(contador) {
    setCount(contador);
  }
  return (
    <div className="flex flex-col items-center">
      <div className="card-body">
        <img src={item.urlImage} alt="img item" width="250px" className="img" />
        <div className="text">
          <h3 className="title">{item.title}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <div className="price">El item cuesta : ${item.price}</div>
        </div>
      </div>
      {count === 0 ? (
        <div className="count">
          <ItemCount stock={5} initial={0} onAdd={addHandler}></ItemCount>
        </div>
      ) : (
        <Link to="/cart">
          <button className="p-4 bg-green-500 text-white rounded">
            Terminar mi compra
          </button>
        </Link>
      )}
    </div>
  );
};

export default ItemDatail;
