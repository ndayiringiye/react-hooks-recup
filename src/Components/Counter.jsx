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
    <div className="flex gap-6 w-11/12 mx-auto">
      <button onClick={incrementHandler} className="border p-3 font-bold">Increment: {counters.increment}</button>
      <button onClick={() => resetHandler("increment")} className="border p-3 font-bold">Reset Increment</button>

      <button onClick={decrementHandler} className="border p-3 font-bold">Decrement: {counters.decrement}</button>
      <button onClick={() => resetHandler("decrement")} className="border p-3 font-bold">Reset Decrement</button>
    </div>
  );
};

export default Counter;
