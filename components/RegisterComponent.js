import React, { useCallback, useState } from 'react';
import { Button, Card, Form, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { registerRequest } from '../reducers/register';

const RegisterComponent = () => {
  const dispatch = useDispatch();
  const { registerLoading } = useSelector((state) => state.register);
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [isEqual, setIsEqual] = useState(null);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setIsEqual(password === e.target.value);
  }, [password]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    console.log(email, password);
    if (!isEqual) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    dispatch(registerRequest({ email, password }));
  }, [email, password, isEqual]);

  const EqualPassword = () => {
    if (isEqual === null) {
      return <></>;
    }

    if (isEqual) {
      return <div>비밀번호가 일치합니다.</div>;
    }

    return <div>비밀번호가 일치하지 않습니다.</div>;
  };

  return (
    <Card body>
      <Form onSubmit={onSubmitForm}>
        <Form.Group controlId="formEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control type="email" placeholder="이메일 입력" onChange={onChangeEmail} />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호 입력" onChange={onChangePassword} />
        </Form.Group>

        <Form.Group controlId="formPasswordCheck">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control type="password" placeholder="비밀번호 재입력" onChange={onChangePasswordCheck} />
          <EqualPassword />
        </Form.Group>

        <Form.Group controlId="formNickname">
          <Form.Label>닉네임</Form.Label>
          <Form.Control type="text" placeholder="닉네임 입력" onChange={onChangeNickname} />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!isEqual || registerLoading}>
          { registerLoading
            ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
            : '완료' }
        </Button>
      </Form>
    </Card>
  );
};

export default RegisterComponent;
