import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LoginComponent from '../components/LoginComponent';
import MainLayout from '../components/MainLayout';

const Login = () => {
  return (
    <MainLayout>
      <Row>
        <Col>
          <LoginComponent />
        </Col>
      </Row>
    </MainLayout>
  );
}

export default Login;