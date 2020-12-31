import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import Navibar from './Navibar';
import Category from './Category';
import BoardTable from './BoardTable';

const MainLayout = () => {
  return (
    <Container fluid>
      <Row>
        <Col><Navibar /></Col>
      </Row>
      <Row>
        <Col sm={2}><Category /></Col>
        <Col sm={10}><BoardTable /></Col>
      </Row>
    </Container>
  );
};

export default MainLayout;