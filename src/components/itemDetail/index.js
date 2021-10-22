import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../itemCount";
import "./itemDetail.css";
import "../item/styles.css";
import { CartContext } from "../../context/CartContext";

export const ItemDatail = ({ item }) => {
  const [show, setShow] = useState(true);
  const { addItem } = useContext(CartContext);

  const addHandler = (contador) => {
    addItem(item, contador);
    setShow(false);
  };

  return (
    <div className="flex-col">
      <div className="card-body">
        <img src={item.urlImage} alt="img item" width="250px" className="img" />
        <div className="text">
          <h3 className="title">{item.title}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <div className="price">El item cuesta : ${item.price}</div>
        </div>
      </div>
      {show ? (
        <div className="count">
          <ItemCount stock={5} initial={0} onAdd={addHandler}></ItemCount>
        </div>
      ) : (
        <div>
          <div className="button-container">
            <Link to="/cart">
              <button className="button finish">Terminar mi compra</button>
            </Link>
          </div>
          <div className="button-container">
            <Link to="/">
              <button className="button seguir">Seguir Comprando</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDatail;
