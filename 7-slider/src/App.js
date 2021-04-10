import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

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
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          // positions
          let position = "nextSlide";
          if (personIndex === value) {
            position = "activeSlide";
          }
          if (
            personIndex === value - 1 ||
            (value === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon"></FaQuoteRight>
            </article>
          );
        })}
        <button className="prev">
          <FiChevronLeft
            onClick={() => setValue(() => checkValue(value - 1))}
          ></FiChevronLeft>
        </button>
        <button className="next">
          <FiChevronRight
            onClick={() => setValue(() => checkValue(value + 1))}
          ></FiChevronRight>
        </button>
      </div>
    </section>
  );
}

export default App;
