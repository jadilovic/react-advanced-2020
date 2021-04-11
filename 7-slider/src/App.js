import React, { useState, useEffect } from "react";
import data from "./data";
import ListOfSlides from "./ListOfSlides";

function App() {
  const [people, setPeople] = useState(data);
  const [value, setValue] = useState(0);
  console.log(people);

  // check value
  const checkValue = (indexValue) => {
    if (indexValue < 0) {
      return people.length - 1;
    } else if (indexValue > people.length - 1) {
      return 0;
    } else {
      return indexValue;
    }
  };

  useEffect(() => {
    const slider = setInterval(() => {
      setValue(checkValue(value + 1));
    }, 3000);
    return () => clearInterval(slider);
  }, [value]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <ListOfSlides people={people} checkValue={checkValue} value={value} />
    </section>
  );
}

export default App;
