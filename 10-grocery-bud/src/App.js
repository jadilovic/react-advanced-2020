import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // alert
      showAlert(true, "please enter value", "danger");
    } else if (name && isEditing) {
      // is editing
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setIsEditing(false);
      setEditId("");
      setName("");
    } else {
      showAlert(true, "added new item to the list", "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const clearList = () => {
    setList([]);
    showAlert(true, "cleared all items", "danger");
  };

  const removeItem = (id) => {
    showAlert(true, "removed item from the list", "danger");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    showAlert(true, "edited item in the list", "success");
    const specItem = list.find((item) => item.id === id);
    setEditId(id);
    setIsEditing(true);
    setName(specItem.title);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <div className="form-control">
          <h3>gorcery bud</h3>
          <input
            type="text"
            placeholder="e.g. eggs"
            className="grocery"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="gorcery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear list
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
