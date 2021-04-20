import React from "react";
import { Link } from "react-router-dom";
import SingleCocktail from "../pages/SingleCocktail";

const Cocktail = ({ img, id, name, info, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div className="cocktial-footer">
        <h2>{name}</h2>
        <h3>{glass}</h3>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
