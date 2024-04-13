import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Card, Button, InputGroup, Form } from "react-bootstrap";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [end, setEnd] = useState(false);
  const [query, setQuery] = useState("리액트");

  const callAPI = async () => {
    const url = `https://dapi.kakao.com/v3/search/book?target=title&query=${query}&size=12&page=${page}`;
    const config = {
      headers: {
        Authorization: "KakaoAK 8ad34168ae393ea0f6d3fb63449799f7",
      },
    };
    setLoading(true);
    const res = await axios.get(url, config);
    const data = res.data;
    setBooks(data.documents);
    setEnd(data.meta.is_end);
    setLoading(false);
  };

  useEffect(() => {
    callAPI();
  }, [page]);

  const onSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    callAPI();
  };

  if (loading) return <h1 className="my-5">로딩중...</h1>;

  return (
    <div>
      <h1 className="my-5">도서검색</h1>

      <Row className="mx-5 mb-3">
        <Col md={6} lg={4}>
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

      <Row className="mx-5">
        {books.map((book) => (
          <Col className="mb-3" xs={6} md={4} lg={2}>
            <Card>
              <Card.Body>
                <Book book={book} />
              </Card.Body>
              <Card.Footer>
                <div className="ellipsis">{book.title}</div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <div>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          이전버튼
        </Button>
        <span className="mx-3">{page}</span>
        <Button onClick={() => setPage(page + 1)} disabled={end}>
          다음버튼
        </Button>
      </div>
    </div>
  );
};

export default Books;
