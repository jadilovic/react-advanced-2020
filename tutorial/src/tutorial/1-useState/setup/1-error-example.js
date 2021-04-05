import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = "new title";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
