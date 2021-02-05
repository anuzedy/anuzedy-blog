import React from 'react';
import styled from 'styled-components';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { postWriteRequest } from '../reducers/post';

const StyledForm = styled(Form)`
  text-align: center;
`;

const PostWriteComponent = () => {
  const dispatch = useDispatch();
  const { postWriteLoading } = useSelector((state) => state.post);
  const [title, onChangeTitle] = useInput('');
  const [content, onChangeContent] = useInput('');

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postWriteRequest({
      title,
      content,
    }));
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Form.Group controlId="postSubject">
        <Form.Control type="text" value={title} onChange={onChangeTitle} placeholder="제목" />
      </Form.Group>
      <Form.Group controlId="postContent">
        <Form.Control as="textarea" value={content} onChange={onChangeContent} rows={8} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={postWriteLoading}>
        { postWriteLoading
          ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
          : '글쓰기' }
      </Button>
    </StyledForm>
  );
};

export default PostWriteComponent;
