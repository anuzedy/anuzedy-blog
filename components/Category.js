import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { cateroryRequest, allPostCategory } from '../reducers/category';
import { postRequest, setRecentCategory } from '../reducers/post';

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

  const onClickCategory = (e, c) => {
    e.preventDefault();
    dispatch(postRequest(c.id));
    dispatch(setRecentCategory(c.id));
  };

  return (
    <ListGroup>
      <BorderlessTitleItem>
        <a href="#" onClick={(e) => onClickAllPost(e)}>전체글</a>
      </BorderlessTitleItem>
      { categories.map((v) => (
        <BorderlessTitleItem key={v.id}>
          { v.name }
          { v.Child.map((c) => (
            <ListGroup key={c.id}>
              <BorderlessItem>
                <a href="#" onClick={(e) => onClickCategory(e, c)}>{ c.name }</a>
              </BorderlessItem>
            </ListGroup>
          )) }
        </BorderlessTitleItem>
      )) }
    </ListGroup>
  );
};

export default Category;
