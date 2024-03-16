import React, { useState } from "react";

const Component02 = () => {
  const [count, setCount] = useState(0);

  const onDecrease = () => {
    setCount(count - 1);
  };

  const onIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>컴포넌트02</h1>
      <button onClick={onDecrease}>감소</button>
      <span style={{ padding: "0px 10px ", color: "red", fontSize: "20px" }}>
        {count}
      </span>
      <button onClick={onIncrease}>증가</button>
    </div>
  );
};

export default Component02;
