import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button, Card, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ReplyComponent from './ReplyComponent';

const StyledForm = styled(Form)`
  text-align: center;
`;

const BoardContent = ({ postId }) => {
  const { Posts } = useSelector((state) => state.post);
  const post = Posts.filter((v) => v.id === postId)[0] || Posts[0];
  return (
    <Card>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          {post.content}
        </Card.Text>
        <div>댓글 {post.Comments.length}개</div>
        { post.Comments.map((c) => (
          <ReplyComponent key={c.id} comment={c} />
        )) }
        <StyledForm>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            입력
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
