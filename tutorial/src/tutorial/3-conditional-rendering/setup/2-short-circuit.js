import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <div>
      {
        // <h1>{firstValue}</h1>
        // <h2>value: {secondValue}</h2>
      }
      <h2>{text || "john doe"}</h2>
      <h2>{!text && "tom jerry"}</h2>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle button
      </button>
      <h2>{isError && "Error tom jerry"}</h2>
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no no no error</h2>
        </div>
      )}
    </div>
  );
};

export default ShortCircuit;
