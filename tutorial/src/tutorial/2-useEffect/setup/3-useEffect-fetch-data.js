import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const UseEffectSecondArgument = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const usersdata = await response.json();
    setUsers(usersdata);
    // console.log(usersdata);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h3>github users</h3>;
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>User Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseEffectSecondArgument;
