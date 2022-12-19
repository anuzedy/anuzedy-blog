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

const BoardContent = () => {
  const dispatch = useDispatch();
  const { recentId, recentPost, commentLoading, commentComplete } = useSelector((state) => state.post);
  const [comment, onChangeComment, setComment] = useInput('');

  useEffect(() => {
    if (commentComplete) {
      setComment('');
    }
  }, [commentComplete]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    console.log('recentid : ', recentId);
    dispatch(commentRequest({
      postId: recentId,
      comment: {
        userId: '아이디',
        content: comment,
      },
    }));
  }, [comment]);

  return (
    recentId ? 
      <Card>
        <Card.Body>
          <Card.Title>{recentPost.title}</Card.Title>
          <Card.Text>
            {recentPost.content}
          </Card.Text>
          <div>댓글 {recentPost.Comments.length}개</div>
          {recentPost.Comments.map((c) => (
            <CommentComponent key={c.id} comment={c} />
          ))}
          <StyledForm onSubmit={onSubmitForm}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} value={comment} onChange={onChangeComment} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={commentLoading}>
              {commentLoading
                ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                : '입력'}
            </Button>
          </StyledForm>
        </Card.Body>
      </Card> : <></>
  );
};

export default BoardContent;
