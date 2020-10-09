import React, { useState, useEffect } from "react";
import "./styles.css";
import ItemList from "./ItemList";
import AddItemForm from "./AddItemForm";

const BACKEND_URL = "https://5i7q1.sse.codesandbox.io/";

const ShoppingList = () => {
  const [newItem, setNewItem] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(BACKEND_URL)
      .then(response => response.json())
      .then(list => setList(list))
      .catch(err => console.error(err));
  }, []);

  const form = async () => {
    await fetch(BACKEND_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: newItem })
    });
  };

  const newItemUpdate = e => {
    e.preventDefault();
    setNewItem(e.target.value);
  };

  const addNewItem = e => {
    e.preventDefault();
    if (newItem === "") return;
    form()
      .then(data => {
        alert("successfully added");
        setList([...list, { id: Date.now(), text: newItem }]);
        setNewItem("");
      })
      .catch(err => alert("error while adding new item"));
    e.target.reset();
  };
  const deleteItem = id => {
    fetch(`${BACKEND_URL}${id}`, { method: "DELETE", mode: "cors" })
      .then(() => {
        setList(list.filter(list => list.id !== id));
      })
      .catch(err => {
        console.log(err.message);
        console.log(err);
      });
  };

  // const deleteItem = id => {
  //   setList(list.filter(list => list.id !== id));
  // };

  return (
    <div className="container">
      <div className="box">
        <h2>SHOPPING LIST</h2>
        <h4>YOU HAVE ({list.length}) ITEMS LEFT</h4>
        <AddItemForm addNewItem={addNewItem} newItemUpdate={newItemUpdate} />
        <ItemList list={list} deleteItem={deleteItem} />
        <button className="reset" onClick={() => setList([])}>
          RESET
        </button>
      </div>
    </div>
  );
};
export default ShoppingList;
