import React from 'react';
import styled from 'styled-components';
import { Image, Col, Row } from 'react-bootstrap';
import NoticeTable from './NoticeTable';

const MarginRow = styled(Row)`
  margin-bottom: 10px;
`;

const HomeComponent = () => {
  return (
    <>
      <MarginRow>
        <Col className="text-center">
          <Image src='/shf.gif' fluid />
        </Col>
      </MarginRow>
      <MarginRow>
        <Col>
          <NoticeTable />
        </Col>
      </MarginRow>
    </>
  );
}

export default HomeComponent;