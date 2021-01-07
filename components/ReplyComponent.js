import React from 'react';
import styled from 'styled-components';
import { Image, ListGroup } from 'react-bootstrap';

const SmallImage = styled(Image)`
  width: 30px;
  height: 30px;
`;

const ReplyComponent = () => {
  return (
    <ListGroup>
      <ListGroup.Item>
        <SmallImage src="/pngegg.png" roundedCircle />
        아이디 댓글내용
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ReplyComponent;