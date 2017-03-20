import React from 'react';
import { Panel } from 'react-bootstrap';

const Prompt = () => {
  return (
    <Panel>
      <h4>Prompt</h4>
      <p>Every month we'll post a new word prompt to inspire some writing in all of you (at least we hope it will), take what you want from it and let us know!</p>
      <div>
        <Panel className="half-theme"><h5 className="vertical-align-theme">NOSTALGIA</h5></Panel>
      </div>
    </Panel>
  );
};

export default Prompt;
