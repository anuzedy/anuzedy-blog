import React from 'react';
import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';

const BorderlessItem = styled(ListGroup.Item)`
  border: none;
  padding-top: 2px;
  padding-bottom: 2px;
`;

const Category = () => {
  return (
    <ListGroup >
      <ListGroup.Item>
        카테고리1
        <ListGroup>
          <BorderlessItem>하위카테고리1</BorderlessItem>
          <BorderlessItem>하위카테고리2</BorderlessItem>
          <BorderlessItem>하위카테고리3</BorderlessItem>
        </ListGroup>
      </ListGroup.Item>
      <ListGroup.Item>
        카테고리2
        <ListGroup>
          <BorderlessItem>하위카테고리1</BorderlessItem>
          <BorderlessItem>하위카테고리2</BorderlessItem>
          <BorderlessItem>하위카테고리3</BorderlessItem>
        </ListGroup>
      </ListGroup.Item>
      <ListGroup.Item>
        카테고리3
        <ListGroup>
          <BorderlessItem>하위카테고리1</BorderlessItem>
          <BorderlessItem>하위카테고리2</BorderlessItem>
          <BorderlessItem>하위카테고리3</BorderlessItem>
        </ListGroup>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Category;