import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button className="btn btn-success" onClick={increment}>
        Add
      </button>
      <button className="btn btn-danger" onClick={decrement}>
        Delete
      </button>
    </div>
  );
};
