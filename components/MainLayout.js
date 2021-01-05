import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap'
import Header from './Header';

const MainLayout = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col><Header /></Col>
      </Row>
      {children}
    </Container>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;