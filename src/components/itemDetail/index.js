import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../itemCount";

export const ItemDatail = ({ item }) => {
  const [count, setCount] = useState(0);

  function addHandler(contador) {
    setCount(contador);
  }
  return (
    <div className="flex flex-col items-center">
      <div className="w-1/2 card-body">
        <img src={item.urlImage} alt="img item" width="300px" />
        <div className="relative ml-10">
          <h3 className="title">{item.title}</h3>
          <p className="descripcion">Acá va su descripción</p>
          <div className="price">
            El item cuesta :<p className="text-green-400">${item.price}</p>
          </div>
        </div>
      </div>
      {count === 0 ? (
        <ItemCount stock={5} initial={0} onAdd={addHandler}></ItemCount>
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
