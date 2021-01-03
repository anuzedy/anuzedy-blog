import React from 'react';
import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';

const BorderlessTitleItem = styled(ListGroup.Item)`
  border: none;
  padding-bottom: 20px;
`;

const BorderlessItem = styled(ListGroup.Item)`
  border: none;
  padding-top: 2px;
  padding-bottom: 2px;
  font-size: small;
`;

const Category = () => {
  return (
    <ListGroup >
      <BorderlessTitleItem>
        카테고리1
        <ListGroup>
          <BorderlessItem>카테고리1</BorderlessItem>
          <BorderlessItem>카테고리2</BorderlessItem>
          <BorderlessItem>카테고리3</BorderlessItem>
        </ListGroup>
      </BorderlessTitleItem>
      <BorderlessTitleItem>
        카테고리2
        <ListGroup>
          <BorderlessItem>카테고리1</BorderlessItem>
          <BorderlessItem>카테고리2</BorderlessItem>
          <BorderlessItem>카테고리3</BorderlessItem>
        </ListGroup>
      </BorderlessTitleItem>
      <BorderlessTitleItem>
        카테고리3
        <ListGroup>
          <BorderlessItem>카테고리1</BorderlessItem>
          <BorderlessItem>카테고리2</BorderlessItem>
          <BorderlessItem>카테고리3</BorderlessItem>
        </ListGroup>
      </BorderlessTitleItem>
    </ListGroup>
  );
};

export default Category;