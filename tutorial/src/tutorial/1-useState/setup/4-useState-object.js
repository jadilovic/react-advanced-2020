import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  const [name, setName] = useState("bob");
  const [age, setAge] = useState(34);
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    if (message == "random message") {
      setMessage("new message");
    } else {
      setMessage("random message");
    }
    // setPerson({ ...person, message: "new message" });
  };
  return (
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>{message}</h4>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </div>
  );
};

export default UseStateObject;
