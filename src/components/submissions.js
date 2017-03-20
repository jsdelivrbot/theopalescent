import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Row, Col } from 'react-bootstrap';
import { Socials, Prompt } from './common';

class Submissions extends Component {
  render() {
    return (
      <div id={this.props.containerStyle} className="container">
        <h3>Submissions</h3>
        <Row>
          <Col sm={6}>
            <Panel>
              <p>The Opalescent accepts prose, poetry, reviews and articles as submissions, the specifics are listed below. But there's no subject we gear our content towards. As long as you're an LGBT writer you're welcome to submit anything you want out in the world</p>
              <p>Specifics</p>
              <p>There are limits on words and lines we accept though, so here's the serious stuff:</p>
              <p><b>Prose:</b> A maximum of 500 words - it can be a short story, flash fiction, or even an excerpt from a longer piece if you fancy it</p>
              <p><b>Poetry:</b> Maximum of 40 lines - it can be twelve lines or 32, just not more than 40 please</p>
              <p><b>Articles & Reviews:</b> 700 words max - these are a little more difficult but we think this is acceptable, don't you?</p>
              <p><b>Next up:</b><br />Okay, so now those limits are out of the way, just a friendly reminder that obviously not every submission will likely make it to the site, but we will endeavour to reply to every submission we receive. Even if you just want some feedback get in touch and we'll try our best to help</p>
              <p className="text-align-center"><b>Email your submissions to <a href="mailto:submissions@theopalescent.co.uk" target="_top">submissions@theopalescent.co.uk</a></b></p>
            </Panel>
            <br />
          </Col>
          <Col sm={6}>
            <Socials />
            <br />
            <Prompt />
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps({ containerStyleReducer }) {
  const { containerStyle } = containerStyleReducer;
  return { containerStyle };
}

export default connect(mapStateToProps)(Submissions);
