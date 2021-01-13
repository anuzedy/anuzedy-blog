import React, { useCallback, useState } from 'react';
import { Button, Card, Form, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../reducers/login';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const { loginLoading } = useSelector((state) => state.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFilled, setIsFilled] = useState(false);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    if (!isFilled) {
      alert('이메일과 비밀번호를 입력해 주세요');
    }

    dispatch(loginRequest({ email, password }));
  }, [email, password]);

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
    setIsFilled(e.target.value !== '' && password !== '');
    console.log(e.target.value, password);
  }, [password]);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
    setIsFilled(email !== '' && e.target.value !== '');
    console.log(email, e.target.value);
  }, [email]);

  return (
    <Card body>
      <Form onSubmit={onSubmitForm}>
        <Form.Group controlId="formId" onChange={onChangeEmail}>
          <Form.Label>이메일</Form.Label>
          <Form.Control type="email" placeholder="이메일 입력" />
        </Form.Group>

        <Form.Group controlId="formPassword" onChange={onChangePassword}>
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호 입력" />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!isFilled || loginLoading}>
          { loginLoading
            ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
            : '로그인' }
        </Button>
      </Form>
    </Card>
  );
};

export default LoginComponent;
