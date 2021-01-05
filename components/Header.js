import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

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
              Home
            </Nav.Link>
          </Link>
          <Link href="/blog" passHref>
            <Nav.Link>
              Blog
            </Nav.Link>
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </MarginNavbar>
    </>
  );
};

export default Header;