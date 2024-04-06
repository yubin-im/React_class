import React, { useEffect, useState } from "react";
import { Table, Button, Spinner } from "react-bootstrap";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [last, setLast] = useState(1);
  const [loading, setLoading] = useState(false);

  const callAPI = () => {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        const size = 5;
        setLast(json.length / size);
        const start = (page - 1) * size + 1;
        const end = page * size;

        const data = json.filter((j) => j.id >= start && j.id <= end);
        const data1 = data.map((d) => d && { ...d, toggle: false });
        setPosts(data1);
        setLoading(false);
      });
  };

  useEffect(() => {
    callAPI();
  }, [page]);

  const onClick = (id) => {
    const data = posts.map((post) =>
      post.id === id ? { ...post, toggle: !post.toggle } : { ...post }
    );
    setPosts(data);
  };

  if (loading)
    return (
      <Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );

  return (
    <div className="posts">
      <h1 className="my-5">게시글 목록</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr>
              <td>{post.id}</td>
              <td className="text-start">
                <b
                  onClick={() => onClick(post.id)}
                  style={{ cursor: "pointer" }}
                >
                  {post.title}
                </b>
                {post.toggle && (
                  <>
                    <br />
                    <hr />
                    {post.body}
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          이전
        </Button>
        <span className="mx-3">
          {page} / {last}
        </span>
        <Button onClick={() => setPage(page + 1)} disabled={page === last}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default Posts;
