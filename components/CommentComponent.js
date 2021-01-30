import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image, ListGroup } from 'react-bootstrap';

const SmallImage = styled(Image)`
  width: 30px;
  height: 30px;
`;

const CommentComponent = memo(({ comment }) => (
  <ListGroup>
    <ListGroup.Item>
      <SmallImage src="/pngegg.png" roundedCircle />
      { comment.userId } { comment.content }
    </ListGroup.Item>
  </ListGroup>
));

CommentComponent.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default CommentComponent;
