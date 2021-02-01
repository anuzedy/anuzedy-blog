import React from 'react';
import styled from 'styled-components';
import { Button, Card, Form } from 'react-bootstrap';

const StyledForm = styled(Form)`
  text-align: center;
`;

const PostInputComponent = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Card style={{ width: '18rem' }}>
      <StyledForm onSubmit={onSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={8} />
        </Form.Group>
        <Button variant="primary">글쓰기</Button>
      </StyledForm>
    </Card>
  );
};

export default PostInputComponent;
