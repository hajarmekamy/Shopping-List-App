import React from "react";
import Item from "./Item";

const AddItemForm = ({ list, deleteItem }) => {
  return (
    <ul className="list">
      {list.map(item => (
        <Item key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </ul>
  );
};

export default AddItemForm;
