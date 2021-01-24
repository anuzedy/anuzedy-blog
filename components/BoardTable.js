import React, { useCallback, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import BoardContent from './BoardContent';
// import { postGetRequest } from '../reducers/post';

const BoardTable = () => {
  // const dispatch = useDispatch();
  const { Posts } = useSelector((state) => state.post);
  const [title, setTitle] = useState('');

  const onClickTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  useEffect(() => {
    // dispatch(postGetRequest);
    setTitle(Posts[0]);
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
              <td><a href="#" onClick={onClickTitle}>{v.title}</a></td>
            </tr>
          </tbody>
        )) }
      </Table>
      <BoardContent title={title} />
    </>
  );
};

export default BoardTable;
