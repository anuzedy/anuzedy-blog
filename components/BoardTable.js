import React, { useCallback, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import BoardContent from './BoardContent';
// import { postGetRequest } from '../reducers/post';

const BoardTable = () => {
  // const dispatch = useDispatch();
  const { Posts } = useSelector((state) => state.post);
  const [postId, setPostId] = useState('');

  const onClickTitle = useCallback((e, id) => {
    setPostId(id);
  }, []);

  useEffect(() => {
    // dispatch(postGetRequest);
    setPostId(Posts[0].id);
  }, []);

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
          </tr>
        </thead>
        { Posts.map((v, i) => (
          <tbody key={v.id}>
            <tr>
              <td>{i + 1}</td>
              <td><a href="#" onClick={(e) => onClickTitle(e, v.id)}>{v.title}</a></td>
            </tr>
          </tbody>
        )) }
      </Table>
      <BoardContent postId={postId} />
    </>
  );
};

export default BoardTable;
