import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import Navibar from './Navbar';

const MainLayout = () => {
  return (
    <Container>
      <Row>
        <Col><Navibar /></Col>
      </Row>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  );
};

export default MainLayout;