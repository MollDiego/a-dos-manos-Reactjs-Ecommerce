import React, { useState } from "react";
import add from "../../img/add.svg";
import remove from "../../img/remove.svg";
import "./styles.css";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  function adding() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function removing() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function agregar() {
    onAdd(count);
  }
  return (
    <div className="flex-col">
      <div className="flex-row count-container justify-center mt-4 mb-4">
        <button type="button" onClick={adding} className="button-add">
          <img src={add} height="24px" width="24px" alt="add" />
        </button>
        {count}
        <button onClick={removing} type="button" className="button-remove">
          <img src={remove} height="24px" width="24px" alt="remove" />
        </button>
      </div>
      <div>
        <button className="button-end" type="button" onClick={agregar}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
