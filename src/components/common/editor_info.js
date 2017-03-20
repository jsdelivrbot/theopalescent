import React from 'react';
import { Panel } from 'react-bootstrap';

const EditorInfo = ({ photo, name, desc, twitter, instagram }) => {
  return (
    <Panel>
      <img className="img-about" src={`img/${photo}`} alt={name} />
      <div className="social-holder half">
        <a className="svg" href={twitter}>
          <object className="social" type="image/svg+xml" data="img/twitter.svg">
            Your browser does not support SVG
          </object>
        </a>
        <a className="svg" href={instagram}>
          <object className="social" type="image/svg+xml" data="img/instagram.svg">
            Your browser does not support SVG
          </object>
        </a>
      </div>
      <h4>{name}</h4>
      <p>{desc}</p>
    </Panel>
  );
};

export default EditorInfo;
