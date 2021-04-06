import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const UseEffectSecondArgument = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const usersdata = await response.json();
    console.log(usersdata);
  };

  useEffect(() => {
    getUsers();
  });

  return (
    <div>
      <h3>github users</h3>;
    </div>
  );
};

export default UseEffectSecondArgument;
