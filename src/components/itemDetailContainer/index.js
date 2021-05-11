import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail";
import { getFirestore } from "../../firebase";

const getItems = (id) => {
  const db = getFirestore();
  const itemsCollection = db.collection("items");
  const item = itemsCollection.doc(id);
  return item.get();
};

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getItems(itemId).then((res) => {
      console.log("existe?", res.exists);
      if (res.exists) {
        setItem({ id: res.id, ...res.data() });
      }
    });
    return;
  }, [itemId]);

  console.log(item);

  return (
    <div>{item == null ? "Esta cargando" : <ItemDetail item={item} />}</div>
  );
};

export default ItemDetailContainer;
