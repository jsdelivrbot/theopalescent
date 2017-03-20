import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Panel, Col, Row } from 'react-bootstrap';
import { Socials, Prompt, PoemRow } from './common';

class Prose extends Component {
  render() {
    const { containerStyle } = this.props;
    return (
      <div id={containerStyle} className="container">
        <h3>Prose</h3>
        <Row>
          <Col sm={6}>
            <Panel>
              <p>All prose submissions will be published on this page. If you're looking for a piece from a particular month just click on that month. Otherwise, have a good scroll through!</p>
              <ul>
                <li><Link to="prose/03-2017">March 17</Link></li>
              </ul>
            </Panel>
          </Col>
          <Col sm={6}>
            <Socials />
            <br />
            <Prompt />
            <br />
          </Col>
        </Row>
        &nbsp;
        <hr />
        &nbsp;
        {/* <PoemRow /> */}
        <h4 className="half-theme">There are no entries</h4>
        <Panel className="half-theme">
          <p className="vertical-align-theme">Why don't you help us change that?</p>
        </Panel>
        <br />
      </div>
    );
  }
}

const mapStateToProps = ({ containerStyleReducer }) => {
   const { containerStyle } = containerStyleReducer;
   return { containerStyle };
};

export default connect(mapStateToProps)(Prose);
