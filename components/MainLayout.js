import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';

const MainLayout = ({ children }) => (
  <Container>
    <Row>
      <Col><Header /></Col>
    </Row>
    {children}
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
