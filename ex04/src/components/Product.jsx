import React, { useState } from "react";
import Register from "./Register";
import { Table, Button } from "react-bootstrap";

const Product = () => {
  const [products, setProducts] = useState([
    { code: 101, name: "엘지전자 오브제 세탁기", price: 250, qnt: 5 },
    { code: 102, name: "엘지전자 오브제 건조기", price: 230, qnt: 5 },
  ]);

  const onRegister = (product) => {
    const newData = products.concat(product);
    setProducts(newData);
  };

  const onDelete = (code) => {
    if (window.confirm(`${code}번 상품을 삭제하시겠습니까?`)) {
      const newData = products.filter((p) => p.code !== code);
      setProducts(newData);
    }
  };

  const onQntUpdate = (e, code) => {
    const newData = products.map((p) =>
      p.code === code ? { ...p, qnt: e.target.value } : { ...p }
    );
    setProducts(newData);
  };

  const onPriceUpdate = (e, price) => {
    const newData = products.map((p) =>
      p.price === price ? { ...p, price: e.target.value } : { ...p }
    );
    setProducts(newData);
  };

  const onNameUpdate = (e, name) => {
    const newData = products.map((p) =>
      p.name === name ? { ...p, name: e.target.value } : { ...p }
    );
    setProducts(newData);
  };

  return (
    <div>
      <h1>매출관리</h1>
      <Register onRegister={onRegister} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>상품코드</td>
            <td>상품이름</td>
            <td>상품가격</td>
            <td>판매수량</td>
            <td>판매금액</td>
            <td>삭제</td>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.code}>
              <td>{p.code}</td>
              <td>
                <input
                  onChange={(e) => onNameUpdate(e, p.name)}
                  value={p.name}
                  size="17"
                />
              </td>
              <td>
                <input
                  onChange={(e) => onPriceUpdate(e, p.price)}
                  value={p.price}
                  size="5"
                  className="text-end"
                />
              </td>
              <td>
                <input
                  onChange={(e) => onQntUpdate(e, p.code)}
                  value={p.qnt}
                  size="3"
                  className="text-end"
                />
              </td>
              <td>{p.price * p.qnt}</td>
              <td>
                <Button onClick={() => onDelete(p.code)} variant="danger">
                  삭제
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Product;
