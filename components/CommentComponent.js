import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Container, Image, ListGroup, Row } from 'react-bootstrap';

const SmallImage = styled(Image)`
  width: 30px;
  height: 30px;
`;

const CommentComponent = memo(({ comment }) => (
  <ListGroup>
    <ListGroup.Item>
      <Container fluid>
        <Row>
          <Col sm={3}>
            <SmallImage src="/pngegg.png" roundedCircle />{ comment.userId }
          </Col>
          <Col sm={9}>
            { comment.content }
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  </ListGroup>
));

CommentComponent.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default CommentComponent;
