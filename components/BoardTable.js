import React, { useCallback, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import BoardContent from './BoardContent';
import PostWriteComponent from './PostWriteComponent';
import { changeWriteMode } from '../reducers/post';

const BoardTable = () => {
  const dispatch = useDispatch();
  const { Posts, writeMode } = useSelector((state) => state.post);
  const [postId, setPostId] = useState('');

  const onClickTitle = useCallback((e, id) => {
    setPostId(id);
    dispatch(changeWriteMode(false));
  }, []);

  const onClickWrite = useCallback(() => {
    dispatch(changeWriteMode(true));
  }, [writeMode]);

  useEffect(() => {
    setPostId(Posts[0].id);
  }, [Posts]);

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
          </tr>
        </thead>
        { Posts.map((v) => (
          <tbody key={v.id}>
            <tr>
              <td>{v.id}</td>
              <td><a href="#" onClick={(e) => onClickTitle(e, v.id)}>{v.title}</a></td>
            </tr>
          </tbody>
        )) }
      </Table>
      { writeMode
        ? <PostWriteComponent />
        : (
          <>
            <BoardContent postId={postId} /><br />
            <Button variant="primary" style={{ float: 'right' }} onClick={onClickWrite}>글쓰기</Button>
          </>
        )}
    </>
  );
};

export default BoardTable;
