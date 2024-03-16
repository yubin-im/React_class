import React from "react";

const Component01 = () => {
  let name = "홍길동";
  let nickname = null;

  return (
    <div>
      <h1>컴포넌트01</h1>
      <h1>이름: {name}</h1>
      <h1>{name === "홍길동" ? "홍길동입니다." : "홍길동이 아닙니다."}</h1>
      {/*연산자*/}
      <h1>{name === "홍길동" && "홍길동입니다."}</h1>
      <h1>{nickname || "닉네임이 없습니다."}</h1>
      <hr />
    </div>
  );
};

export default Component01;
