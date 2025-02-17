import { useState } from "react";

const Counter = () => {
  const [counters, setCounters] = useState({ increment: 0, decrement: 20 });

  // Increment handler
  const incrementHandler = () => setCounters((prev) => ({ ...prev, increment: prev.increment + 1 }));

  // Decrement handler
  const decrementHandler = () => setCounters((prev) => ({ ...prev, decrement: prev.decrement - 1 }));

  // Reset handler for both counters
  const resetHandler = (counter) => {
    setCounters((prev) => ({
      ...prev,
      [counter]: 0,
    }));
  };

  return (
    <div>
      <button onClick={incrementHandler}>Increment: {counters.increment}</button>
      <button onClick={() => resetHandler("increment")}>Reset Increment</button>

      <button onClick={decrementHandler}>Decrement: {counters.decrement}</button>
      <button onClick={() => resetHandler("decrement")}>Reset Decrement</button>
    </div>
  );
};

export default Counter;
