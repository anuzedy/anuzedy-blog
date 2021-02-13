import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { cateroryRequest, allPostCategory } from '../reducers/category';

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
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(cateroryRequest);
  }, []);

  const onClickAllPost = (e) => {
    e.preventDefault();
    dispatch(allPostCategory);
  };

  return (
    <ListGroup>
      <BorderlessTitleItem>
        <a href="#" onClick={(e) => onClickAllPost(e)}>전체글</a>
      </BorderlessTitleItem>
      { categories.map((v) => (
        <BorderlessTitleItem key={v.id}>
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
