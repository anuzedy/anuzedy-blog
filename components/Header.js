import React, { useCallback } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Button, Nav, Navbar, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest } from '../reducers/login';

const MarginNavbar = styled(Navbar)`
  margin-bottom: 10px;
`;

const StyledDiv = styled.div`
  color: white;
`;

const Header = () => {
  const dispatch = useDispatch();
  const { id, logoutLoading } = useSelector((state) => state.login);
  const { nickname, thumbnail } = useSelector((state) => state.login.User);
  const onLogoutButton = useCallback(() => {
    dispatch(logoutRequest);
  }, []);
  const RightMenu = () => {
    if (id) {
      return (
        <>
          <StyledDiv>{nickname}님 안녕하세요.</StyledDiv>&nbsp;
          <Button variant="light" onClick={onLogoutButton} disabled={logoutLoading}>
            { logoutLoading
              ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              : '로그아웃' }
          </Button>
        </>
      );
    }

    return (
      <>
        <Link href="/login">
          <Button variant="dark">로그인</Button>
        </Link>&nbsp;
        <Link href="/register">
          <Button variant="dark">회원가입</Button>
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
