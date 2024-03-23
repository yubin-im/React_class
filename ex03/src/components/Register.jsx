import React, { useRef, useState } from "react";

const Register = ({ onRegister }) => {
  const last = useRef(3);

  const [form, setForm] = useState({
    id: last.current,
    nsme: "",
    address: "",
    phone: "",
  });

  const { id, name, address, phone } = form;
  const refName = useRef(null);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickRegister();
    }
  };

  const onChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onClickRegister = () => {
    if (name === "") {
      alert("이름을 입력하세요.");
      refName.current.focus();
      return;
    }

    if (window.confirm(`${name} 주소를 등록하시겠습니까?`)) {
      onRegister(form);
      last.current++;
      setForm({
        id: last.current,
        name: "",
        address: "",
        phone: "",
      });
      refName.current.focus();
    }
  };

  return (
    <div className="register">
      <h1>주소등록</h1>
      <input
        placeholder="아이디"
        value={id}
        name="id"
        onChange={onChangeForm}
      ></input>
      <input
        ref={refName}
        placeholder="이름"
        value={name}
        name="name"
        onChange={onChangeForm}
      ></input>
      <input
        placeholder="주소"
        value={address}
        name="address"
        onChange={onChangeForm}
      ></input>
      <input
        placeholder="전화"
        value={phone}
        name="phone"
        onChange={onChangeForm}
        onKeyDown={onKeyDown}
      ></input>
      <button onClick={onClickRegister}>등록</button>
    </div>
  );
};

export default Register;
