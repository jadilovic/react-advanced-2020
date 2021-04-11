import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Slide from "./Slide";

function List(people, checkValue, value, setValue) {
  return (
    <div className="section-center">
      {people.map((person, personIndex) => {
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
        <Slide person={person} position={position} />;
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
  );
}

export default List;
