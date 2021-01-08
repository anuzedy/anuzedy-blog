import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BoardContent from './BoardContent';
import BoardTable from './BoardTable';
import Category from './Category';

const BlogComponent = () => (
  <Row>
    <Col xs={2}><Category /></Col>
    <Col xs={10}>
      <BoardTable />
      <BoardContent />
    </Col>
  </Row>
);

export default BlogComponent;
