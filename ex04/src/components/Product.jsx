import React, { useState } from "react";
import Table from "react-bootstrap/Table";

const Product = () => {
  const [products, setProducts] = useState([
    { code: 101, name: "엘지전자 오브제 세탁기", price: 250, qnt: 5 },
    { code: 102, name: "엘지전자 오브제 건조기", price: 230, qnt: 5 },
  ]);

  return (
    <div>
      <h1>매출관리</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>상품코드</td>
            <td>상품이름</td>
            <td>상품가격</td>
            <td>판매수량</td>
            <td>판매금액</td>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr>
              <td>{p.code}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.qnt}</td>
              <td>{p.price * p.qnt}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Product;
