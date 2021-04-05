import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  let increase = () => {
    setValue(value + 1);
  };
  let decrease = () => {
    setValue(value - 1);
  };
  return (
    <div>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={increase}>
          increase
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(0);
          }}
        >
          reset
        </button>
        <button className="btn" onClick={decrease}>
          decrease
        </button>
      </section>
    </div>
  );
};

export default UseStateCounter;
