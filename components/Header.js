import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const MarginNavbar = styled(Navbar)`
  margin-bottom: 10px;
`;

const NoStyleLink = styled(Link)`
  text-decoration: none;
`;

const Header = () => {
  return (
    <>
      <MarginNavbar bg="dark" variant="dark">
        <Navbar.Brand><Link href="/">잡동사니</Link></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><Link href="/">Home</Link></Nav.Link>
          <Nav.Link><Link href="/blog">Blog</Link></Nav.Link>
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