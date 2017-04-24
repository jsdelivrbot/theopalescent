import React from 'react';
import { Panel, Col } from 'react-bootstrap';

const PoemCol = ({ title, author, content, weight, children }) => {
  return (
    <Col sm={weight}>
      <h4>{title} - {author}</h4>
      <Panel>
        {/* {content} */}
        {children}
      </Panel>
    </Col>
  );
};

export default PoemCol;
