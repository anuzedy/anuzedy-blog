import React, { useCallback, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import BoardContent from './BoardContent';
import PostWriteComponent from './PostWriteComponent';
import { postRequest, setRecentId, setWriteMode } from '../reducers/post';

const BoardTable = () => {
  const dispatch = useDispatch();
  const { Posts, writeMode } = useSelector((state) => state.post);
  const { recentCategory } = useSelector((state) => state.category);

  const onClickTitle = useCallback((e, id) => {
    dispatch(setRecentId(id));
  }, []);

  const onClickWrite = useCallback(() => {
    dispatch(setWriteMode(true));
  }, [writeMode]);

  useEffect(() => {
    dispatch(postRequest(recentCategory));
  }, [recentCategory]);

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
          </tr>
        </thead>
        {Posts.map((v) => (
          <tbody key={v.id}>
            <tr>
              <td>{v.id}</td>
              <td><a href="#" onClick={(e) => onClickTitle(e, v.id)}>{v.title}</a></td>
            </tr>
          </tbody>
        ))}
      </Table>
      {writeMode
        ? <PostWriteComponent />
        : (
          <>
            <BoardContent /><br />
            <Button variant="primary" style={{ float: 'right' }} onClick={onClickWrite}>글쓰기</Button>
          </>
        )}
    </>
  );
};

export default BoardTable;
