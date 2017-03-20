import React from 'react';
import { Panel } from 'react-bootstrap';

const socials = () => {
  return (
    <Panel>
      <div className="small-text">FOLLOW</div>
      <div className="half">
        <hr />
      </div>
      <div className="half">
        <a className="svg" href="https://www.facebook.com/theopalescent/">
          <object className="social" type="image/svg+xml" data="img/facebook.svg">
            Your browser does not support SVG
          </object>
        </a>
        <a className="svg" href="https://twitter.com/TheOpalescent">
          <object className="social" type="image/svg+xml" data="img/twitter.svg">
            Your browser does not support SVG
          </object>
        </a>
        {/* <a className="svg" href="#">
          <object className="social" type="image/svg+xml" data="img/tumblr.svg">
            Your browser does not support SVG
          </object>
        </a>
        <a className="svg" href="#">
          <object className="social" type="image/svg+xml" data="img/instagram.svg">
            Your browser does not support SVG
          </object>
        </a> */}
      </div>
    </Panel>
  );
};

export default socials;
