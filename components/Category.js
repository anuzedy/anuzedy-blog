import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

const Category = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            카테고리1
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>하위카테고리1</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
          카테고리2
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>하위카테고리1</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Category;