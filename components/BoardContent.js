import React from 'react';
import { Card } from 'react-bootstrap';
import ReplyComponent from './ReplyComponent';

const BoardContent = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>게시글 제목!</Card.Title>
        <Card.Text>
          첫번째 게시물 내용!
        </Card.Text>
        <div>댓글 1개</div>
        <ReplyComponent />
      </Card.Body>
    </Card>
  );
};

export default BoardContent;