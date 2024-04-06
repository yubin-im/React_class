import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const callAPI = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
      });
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className="todos">
      <h1>할 일 목록</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Todos;
