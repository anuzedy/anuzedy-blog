import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Button, Nav, Navbar } from 'react-bootstrap';

const MarginNavbar = styled(Navbar)`
  margin-bottom: 10px;
`;

const Header = () => {
  return (
    <>
      <MarginNavbar bg="dark" variant="dark">
        <Link href="/" passHref>
          <Navbar.Brand>
            잡동사니
          </Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          <Link href="/" passHref>
            <Nav.Link>
              홈
            </Nav.Link>
          </Link>
          <Link href="/blog" passHref>
            <Nav.Link>
              블로그
            </Nav.Link>
          </Link>
        </Nav>
        <Link href="/login">
          <Button variant="outline-info">로그인</Button>
        </Link>
        <Link href="/register">
          <Button variant="outline-info">회원가입</Button>
        </Link>
      </MarginNavbar>
    </>
  );
};

export default Header;