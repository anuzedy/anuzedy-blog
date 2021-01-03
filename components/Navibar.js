import React from 'react';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

const MarginNav = styled(Nav)`
  margin-top: 5px;
  margin-bottom: 10px;
`;

const Navibar = () => {
  return (
    <MarginNav variant="tabs" defaultActiveKey="home">
      <Nav.Item>
        <Nav.Link eventKey="home">홈</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">항목1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">항목2</Nav.Link>
      </Nav.Item>
      {/* <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item> */}
    </MarginNav>
  );
};

export default Navibar;