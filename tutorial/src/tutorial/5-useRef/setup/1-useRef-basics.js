import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const refDivContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(refContainer.current);
    console.log(refDivContainer.current);
  };
  console.log(refContainer);

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
        </div>
      </form>
      <div ref={refDivContainer}>hello world</div>
    </div>
  );
};

export default UseRefBasics;
