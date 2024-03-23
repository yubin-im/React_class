import React, { useState } from "react";
import Register from "./Register";

const Address = () => {
  const [address, setAddress] = useState([
    {
      id: 1,
      name: "홍길동",
      address: "인천 서구 서곶로120",
      phone: "010-1010-1010",
    },
    {
      id: 2,
      name: "심청이",
      address: "인천 부평구 계산동",
      phone: "010-1010-2020",
    },
  ]);

  const onRegister = (form) => {
    const newAddress = address.concat(form);
    setAddress(newAddress);
  };

  const onDelete = (id) => {
    if (window.confirm(`${id}번 주소를 삭제하시겠습니끼?`)) {
      const newAddress = address.filter((add) => add.id !== id);
      setAddress(newAddress);
    }
  };

  return (
    <div>
      <Register onRegister={onRegister} />
      <h1>주소목록</h1>
      <table>
        <thead>
          <tr>
            <td>번호</td>
            <td>이름</td>
            <td>주소</td>
            <td>전화</td>
            <td>삭제</td>
          </tr>
        </thead>
        <tbody>
          {address.map((add) => (
            <tr key={add.id}>
              <td>{add.id}</td>
              <td>{add.name}</td>
              <td>{add.address}</td>
              <td>{add.phone}</td>
              <td>
                <button onClick={() => onDelete(add.id)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Address;
