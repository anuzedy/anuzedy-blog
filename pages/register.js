import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MainLayout from '../components/MainLayout';
import RegisterComponent from '../components/RegisterComponent';

const Login = () => {
  return (
    <MainLayout>
      <Row>
        <Col>
          <RegisterComponent />
        </Col>
      </Row>
    </MainLayout>
  );
}

export default Login;