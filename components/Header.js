import React from 'react';
import { Button, Form, FormControl, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar className="justify-content-between" bg="dark" variant="dark">
        <Navbar.Brand href="#home">블로그!</Navbar.Brand>
        <Form className="align-items-right" inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default Header;