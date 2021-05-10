import React, { useEffect, useState } from "react";
import ItemList from "../itemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = db.collection("items");
    const filtrado = itemsCollection
      .where("categoria", "==", categoryId)
      .limit(5);
    const prom = filtrado.get();
    prom.then((snaptshot) => {
      console.log("se consultaron los datos");
      console.log(snaptshot);
      if (snaptshot.size > 0) {
        console.log(snaptshot.docs.map((doc) => doc.data()));
        console.log(snaptshot.docs.map((doc) => doc.id));
        setItems(
          snaptshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      }
    });
  }, [categoryId]);

  return (
    <div className="text-red-400 mt-4">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
