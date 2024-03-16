import React, { useState } from "react";
import "../App.css";

const Counter = () => {
  const [count, setCount] = useState(0); // ()안은 초기값

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>감소</button>
      <span className="value">{count}</span>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
};

export default Counter;
