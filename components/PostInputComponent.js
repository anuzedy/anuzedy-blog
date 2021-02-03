import React from 'react';
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';

const StyledForm = styled(Form)`
  text-align: center;
`;

const PostInputComponent = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Form.Group controlId="postSubject">
        <Form.Control type="text" placeholder="제목" />
      </Form.Group>
      <Form.Group controlId="postContent">
        <Form.Control as="textarea" rows={8} />
      </Form.Group>
      <Button variant="primary">글쓰기</Button>
    </StyledForm>
  );
};

export default PostInputComponent;
