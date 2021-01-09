import React, { useCallback, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { REGISTER_REQUEST } from '../reducers/register';

const RegisterComponent = () => {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  let isCorrect = false;

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    if (password === e.target.value) {
      isCorrect = true;
    }
    console.log(password, passwordCheck);
  }, [password]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: REGISTER_REQUEST,
      data: {
        email,
        password,
      },
    });
  }, []);

  return (
    <Form onSubmit={onSubmitForm}>
      <Form.Group controlId="formId">
        <Form.Label>이메일</Form.Label>
        <Form.Control type="email" placeholder="이메일 입력" onChange={onChangeEmail} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type="password" placeholder="비밀번호 입력" onChange={onChangePassword} />
      </Form.Group>

      <Form.Group controlId="formPasswordCheck">
        <Form.Label>비밀번호 확인</Form.Label>
        <Form.Control type="passwordCheck" placeholder="비밀번호 재입력" onChange={onChangePasswordCheck} />
        { isCorrect ? <div>비밀번호가 일치합니다.</div> : <div>비밀번호가 일치하지 않습니다.</div> }
      </Form.Group>

      <Button variant="primary" type="submit">
        완료
      </Button>
    </Form>
  );
};

export default RegisterComponent;
