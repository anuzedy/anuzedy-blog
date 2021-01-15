import React from 'react';
import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

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
  const { categories } = useSelector((state) => state.category);
  return (
    <ListGroup>
      <BorderlessTitleItem>
        전체글
      </BorderlessTitleItem>
      { categories.map((v) => (
        <BorderlessTitleItem>
          { v.name }
          <ListGroup>
            <BorderlessItem>{ v.Child.name }</BorderlessItem>
          </ListGroup>
        </BorderlessTitleItem>
      )) }
    </ListGroup>
  );
};

export default Category;
