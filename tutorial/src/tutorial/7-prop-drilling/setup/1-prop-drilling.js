import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} />
    </section>
  );
};

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="list">
            <h5>{name}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default PropDrilling;
