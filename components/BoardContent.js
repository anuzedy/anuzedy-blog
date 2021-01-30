import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button, Card, Form, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CommentComponent from './CommentComponent';
import useInput from '../hooks/useInput';
import { commentRequest } from '../reducers/post';

const StyledForm = styled(Form)`
  text-align: center;
`;

const BoardContent = ({ postId }) => {
  const dispatch = useDispatch();
  const { Posts, commentLoading, commentComplete } = useSelector((state) => state.post);
  const post = Posts.filter((v) => v.id === postId)[0] || Posts[0];
  const [comment, onChangeComment, setComment] = useInput('');

  useEffect(() => {
    if (commentComplete) {
      setComment('');
    }
  }, [commentComplete]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch(commentRequest({
      postId: post.id,
      comment: {
        userId: '아이디',
        content: comment,
      },
    }));
  }, [comment]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          {post.content}
        </Card.Text>
        <div>댓글 {post.Comments.length}개</div>
        { post.Comments.map((c) => (
          <CommentComponent key={c.id} comment={c} />
        )) }
        <StyledForm onSubmit={onSubmitForm}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} value={comment} onChange={onChangeComment} />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={commentLoading}>
            { commentLoading
              ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              : '입력' }
          </Button>
        </StyledForm>
      </Card.Body>
    </Card>
  );
};

BoardContent.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default BoardContent;
