import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ReplyComponent from './ReplyComponent';

const BoardContent = () => {
  const { Posts } = useSelector((state) => state.post);
  return (
    <>
      { Posts.map((v) => (
        <Card key={v.id}>
          <Card.Body>
            <Card.Title>{v.title}</Card.Title>
            <Card.Text>
              {v.content}
            </Card.Text>
            <div>댓글 {v.Comments.length}개</div>
            { v.Comments.map((c) => (
              <ReplyComponent comment={c} />
            )) }
          </Card.Body>
        </Card>
      )) }
    </>
  );
};

export default BoardContent;