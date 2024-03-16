import React, { useState } from "react";

const Component05 = () => {
  const [form, setForm] = useState({
    id: 1,
    name: "냉장고",
    price: 100,
  });

  const { id, name, price } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onClick = () => {
    alert(`아이디: ${id}\n상품명: ${name}\n상품가격: ${price}`);

    setForm({
      id: 2,
      name: "",
      price: "",
    });
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>상품관리</h1>
      <div className="address">
        <input
          name="id"
          placeholder="아이디"
          value={id}
          onChange={onChange}
        ></input>
        <input
          name="name"
          placeholder="상품명"
          value={name}
          onChange={onChange}
        ></input>
        <input
          name="price"
          placeholder="상품가격"
          value={price}
          onChange={onChange}
          onKeyDown={onKeyDown}
        ></input>
        <button onClick={onClick}>확인</button>
      </div>
    </div>
  );
};

export default Component05;
