import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MarginNavbar = styled(Navbar)`
  margin-bottom: 10px;
`;

const Header = () => {
  const { id } = useSelector((state) => state.login);
  const { nickname, thumbnail } = useSelector((state) => state.login.User);
  const RightMenu = () => {
    if (id) {
      return <div>{nickname}님 안녕하세요.</div>;
    }

    return (
      <>
        <Link href="/login">
          <Button variant="outline-info">로그인</Button>
        </Link>
        <Link href="/register">
          <Button variant="outline-info">회원가입</Button>
        </Link>
      </>
    );
  };
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
        <RightMenu />
      </MarginNavbar>
    </>
  );
};

export default Header;
