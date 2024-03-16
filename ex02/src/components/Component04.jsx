import React, { useState } from "react";

const Component04 = () => {
  const [form, setForm] = useState({
    id: 1,
    name: "홍길동",
    address: "인천 남구 학익동 인하대학교",
    phone: "032-0101-0202",
  });

  const { id, name, address, phone } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onClick = () => {
    alert(`아이디: ${id}\n이름: ${name}\n주소: ${address}\n전화번호: ${phone}`);

    setForm({
      id: 2,
      name: "",
      address: "",
      phone: "",
    });
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>주소록</h1>
      <div className="address">
        <input name="id" placeholder="아이디" value={id} readOnly></input>
        <input
          name="name"
          placeholder="이름"
          value={name}
          onChange={onChange}
        ></input>
        <input
          name="address"
          placeholder="주소"
          value={address}
          onChange={onChange}
        ></input>
        <input
          name="phone"
          placeholder="전화"
          value={phone}
          onChange={onChange}
          onKeyDown={onKeyDown}
        ></input>
        <button onClick={onClick}>확인</button>
      </div>
    </div>
  );
};

export default Component04;
