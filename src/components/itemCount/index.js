import React, { useState } from "react";
import add from "../../img/add.svg";
import remove from "../../img/remove.svg";

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
    <div className="flex flex-col">
      <div className="flex flex-row justify-center mt-4 mb-4">
        <button type="button" onClick={adding} className="mr-10">
          <img src={add} height="24px" width="24px" alt="add" />
        </button>
        {count}
        <button onClick={removing} type="button" className="ml-10">
          <img src={remove} height="24px" width="24px" alt="remove" />
        </button>
      </div>
      <div>
        <button
          className="p-4 bg-blue-400 text-white rounded"
          type="button"
          onClick={agregar}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
