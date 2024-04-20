import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button, InputGroup, Form, Row, Col } from "react-bootstrap";
import Local from "./Local";

const Locals = () => {
  const [locals, setLocals] = useState([]);
  const [page, setPage] = useState(1);
  const [end, setEnd] = useState(false);
  const [query, setQuery] = useState("인하대학교");

  const callAPI = async () => {
    const url = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${query}&size=10&page=${page}`;
    const config = {
      headers: {
        Authorization: "KakaoAK 29e9e1950348691f626373bb936f8182",
      },
    };

    const res = await axios.get(url, config);
    const data = res.data;

    setLocals(data.documents);
    setEnd(data.meta.is_end);
    console.log(res.data);
  };

  useEffect(() => {
    callAPI();
  }, [page]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (query === "") {
      alert("검색어를 입력하세요!");
    } else {
      callAPI();
    }
  };

  return (
    <div className="mx-5">
      <Row className="mb-3">
        <Col md={4}>
          <form onSubmit={onSubmit}>
            <InputGroup>
              <Form.Control
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button type="submit">검색</Button>
            </InputGroup>
          </form>
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <td>장소명</td>
            <td>전화번호</td>
            <td>주소</td>
            <td>위치</td>
          </tr>
        </thead>
        <tbody>
          {locals.map((local) => (
            <tr key={local.id}>
              <td>{local.place_name}</td>
              <td>{local.phone}</td>
              <td>{local.address_name}</td>
              <td>
                <Local local={local} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          이전
        </Button>
        <span className="mx-3">{page}</span>
        <Button disabled={end} onClick={() => setPage(page + 1)}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default Locals;
