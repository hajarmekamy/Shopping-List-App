import React from "react";

const AddItemForm = ({ newItemUpdate, addNewItem, Form }) => {
  return (
    <form onSubmit={addNewItem} onClick={Form}>
      <input type="text" onChange={newItemUpdate} />
      <button type="submit">
        <span id="text">ADD</span>
      </button>
    </form>
  );
};

export default AddItemForm;
