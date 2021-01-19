import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image, ListGroup } from 'react-bootstrap';

const SmallImage = styled(Image)`
  width: 30px;
  height: 30px;
`;

const ReplyComponent = ({ comment }) => (
  <ListGroup>
    <ListGroup.Item>
      <SmallImage src="/pngegg.png" roundedCircle />
      { comment.id } { comment.content }
    </ListGroup.Item>
  </ListGroup>
);

ReplyComponent.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default ReplyComponent;
