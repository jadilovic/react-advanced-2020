import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (num) => {
    if (num > people.length - 1) {
      return 0;
    }
    if (num < 0) {
      return people.length - 1;
    }
    return num;
  };

  const decrease = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const increase = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomIndex = () => {
    let rand = Math.floor(Math.random() * people.length);
    if (rand === index) {
      rand = index + 1;
    }
    console.log(rand);
    setIndex(checkNumber(rand));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={decrease}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={increase}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomIndex}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
