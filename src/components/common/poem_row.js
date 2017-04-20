import React from 'react';
import { Row } from 'react-bootstrap';
import PoemCol from './poem_col';

const PoemRow = ({ children }) => {
  return (
    <Row>
      {children}
      {/* <PoemCol title="A BOX" author="GERTRUDE STEIN" content="Out of kindness comes redness and out of rudeness comes rapid same question, out of an eye comes research, out of selection comes painful cattle. So then the order is that a white way of being round is something suggesting a pin and is it disappointing, it is not, it is so rudimentary to be analysed and see a fine substance strangely, it is so earnest to have a green point not to red but to point again." />
      <PoemCol title="A RED STAMP" author="GERTRUDE STEIN" content="If lilies are lily white if they exhaust noise and distance and even dust, if they dusty will dirt a surface that has no extreme grace, if they do this and it is not necessary it is not at all necessary if they do this they need a catalogue." /> */}
    </Row>
  );
};

export default PoemRow;
