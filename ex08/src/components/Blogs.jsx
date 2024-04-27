import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Col, Row, Button, InputGroup, Form } from "react-bootstrap";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [end, setEnd] = useState(false);
  const [query, setQuery] = useState("뉴욕여행");

  const callAPI = async () => {
    const url = `https://dapi.kakao.com/v2/search/blog?target=title&query=${query}&size=3&page=${page}`;
    const config = {
      headers: {
        Authorization: "KakaoAK 8ad34168ae393ea0f6d3fb63449799f7",
      },
    };
    const res = await axios.get(url, config);
    const data = res.data;
    setBlogs(data.documents);
    setEnd(data.meta.is_end);
  };

  useEffect(() => {
    callAPI();
  }, [page]);

  const onSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    callAPI();
  };

  return (
    <div>
      <h1 className="my-5">블로그 검색</h1>

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

      <Table>
        <tbody>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <td>
                <td>
                  <div dangerouslySetInnerHTML={{ __html: blog.title }}></div>
                  <div
                    dangerouslySetInnerHTML={{ __html: blog.contents }}
                  ></div>
                </td>
                <td>
                  <img src={blog.thumbnail} />
                </td>
                <br />
                <td>
                  <font color="gray">
                    {blog.blogname}
                    <span> </span>
                    <span>{blog.datetime.substr(0, 10)}</span>
                  </font>
                </td>
              </td>
            </div>
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

export default Blogs;
