import React from "react";
import { Row, Col, Form, InputGroup, Card, Button } from "react-bootstrap";

const Login = () => {
  return (
    <Row className="my-5 justify-content-center">
      <Col md={6}>
        <Card>
          <Card.Header>
            <h3 className="text-center">로그인</h3>
          </Card.Header>
          <Card.Body>
            <form>
              <InputGroup className="mb-2">
                <InputGroup.Text
                  style={{ width: 100 }}
                  className="justify-content-center"
                >
                  아이디
                </InputGroup.Text>
                <Form.Control></Form.Control>
              </InputGroup>
              <InputGroup className="mb-2">
                <InputGroup.Text
                  style={{ width: 100 }}
                  className="justify-content-center"
                >
                  비밀번호
                </InputGroup.Text>
                <Form.Control></Form.Control>
              </InputGroup>
              <div>
                <Button className="w-100">로그인</Button>
              </div>
            </form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
