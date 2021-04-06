import React, { useState } from "react";

const List = ({ people }) => {
  const [listPeople, setListPeople] = useState(people);
  const removeItem = (id) => {
    const newList = listPeople.filter((person) => {
      return person.id !== id;
    });
    setListPeople(newList);
  };
  return (
    <>
      {listPeople.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
            <button className="btn" onClick={() => removeItem(id)}>
              remove birthday
            </button>
          </article>
        );
      })}
    </>
  );
};

export default List;
