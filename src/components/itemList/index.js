import React from "react";
import { Item } from "../item";

export const ItemList = ({ items = [] }) => {
  return (
    <div className="flex flex-col items-center">
      {items.map((item) => (
        <div key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
