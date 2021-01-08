import React from 'react';
import { Button, Form } from 'react-bootstrap';

const LoginComponent = () => (
  <Form>
    <Form.Group controlId="formId">
      <Form.Label>아이디</Form.Label>
      <Form.Control type="id" placeholder="아이디 입력" />
    </Form.Group>

    <Form.Group controlId="formPassword">
      <Form.Label>비밀번호</Form.Label>
      <Form.Control type="password" placeholder="비밀번호 입력" />
    </Form.Group>

    <Button variant="primary" type="submit">
      완료
    </Button>
  </Form>
);

export default LoginComponent;
