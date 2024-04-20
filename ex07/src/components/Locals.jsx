import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

const Locals = () => {
  const [locals, setLocals] = useState([]);
  const [page, setPage] = useState(1);
  const [end, setEnd] = useState(false);

  const callAPI = async () => {
    const url = `https://dapi.kakao.com/v2/local/search/keyword.json?query=인하대학교&size=10&page=${page}`;
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

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>장소명</td>
            <td>전화번호</td>
            <td>주소</td>
          </tr>
        </thead>
        <tbody>
          {locals.map((local) => (
            <tr key={local.id}>
              <td>{local.place_name}</td>
              <td>{local.phone}</td>
              <td>{local.address_name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          이전
        </Button>
        <span className="mx-3">{page}</span>
        <Button onClick={() => setPage(page + 1)}>다음</Button>
      </div>
    </div>
  );
};

export default Locals;
