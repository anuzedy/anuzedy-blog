import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { postGetRequest } from '../reducers/post';

const BoardTable = () => {
  // const dispatch = useDispatch();
  const { Posts } = useSelector((state) => state.post);

  // useEffect(() => {
  //   dispatch(postGetRequest);
  // }, []);

  return (
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
            <td>{v.title}</td>
          </tr>
        </tbody>
      )) }
    </Table>
  );
};

export default BoardTable;
