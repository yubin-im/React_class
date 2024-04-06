import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [last, setLast] = useState(1);

  const callAPI = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setLast(json.length / 10);
        const start = (page - 1) * 10 + 1;
        const end = page * 10;
        const data = json.filter((j) => j.id >= start && j.id <= end);
        setTodos(data);
      });
  };

  useEffect(() => {
    callAPI();
  }, [page]);

  return (
    <div className="todos">
      <h1>할 일 목록</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr>
              <td>
                <input type="checkbox" checked={todo.completed} />
              </td>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          이전
        </Button>
        <span className="mx-3">
          {page}/{last}
        </span>
        <Button onClick={() => setPage(page + 1)} disabled={page === last}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default Todos;
