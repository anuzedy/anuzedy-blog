import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ReplyComponent from './ReplyComponent';

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
      </Card.Body>
    </Card>
  );
};

BoardContent.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default BoardContent;
