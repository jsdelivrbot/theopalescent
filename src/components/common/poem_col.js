import React from 'react';
import { Panel, Col } from 'react-bootstrap';

const PoemCol = ({ title, author, content }) => {
  return (
    <Col sm={6}>
      <h4>{title} - {author}</h4>
      <Panel>
        {content}
      </Panel>
    </Col>
  );
};

export default PoemCol;
