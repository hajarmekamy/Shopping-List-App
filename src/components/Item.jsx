import React from "react";
import { MdDelete } from "react-icons/md";

const Item = ({ item, deleteItem }) => {
  return (
    <li className="items">
      {item.text}
      <a href="/#" onClick={() => deleteItem(item.id)}>
        <MdDelete />
      </a>
    </li>
  );
};

export default Item;
