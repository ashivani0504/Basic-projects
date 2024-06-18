import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((count) => count + 1);
  }
  function handleDecrement() {
    setCount(count > 0 ? (count) => count - 1 : 0);
  }
  return (
    <div>
      <h1> COUNTER</h1>
      <button onClick={handleIncrement}>+</button>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Counter;
