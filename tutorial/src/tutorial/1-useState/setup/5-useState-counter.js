import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  let increase = () => {
    setValue(value + 1);
  };
  let decrease = () => {
    setValue(value - 1);
  };

  let complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
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
      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase
        </button>
      </section>
    </div>
  );
};

export default UseStateCounter;
