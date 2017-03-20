import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Row, Col } from 'react-bootstrap';
import { Socials } from './common';

class Home extends Component {
  render() {
    return (
      <div id={this.props.containerStyle} className="container">
        <h3>Welcome</h3>
        <Row>
          <Col sm={6}>
            <Panel>
              <p>The Opalescent is an online magazine run by two final year university students, and publishes LGBT writers in the following categories:</p>
              <ul>
                <li>Prose</li>
                <li>Poetry</li>
                <li>Articles</li>
                <li>Reviews</li>
              </ul>
              <p>Feel free to browse the site and read to your hearts content. Each tab leads to its namesake, so everything will be easy to find! We accept submissions on an ongoing basis so feel free to head over to Submissions and send us your work</p>
              <p>The purpose of this site is to provide LGBT writers with a platform by which to share their work with the world in a friendly space, and start getting themselves out into the world of writers</p>
              <p>The editors are super friendly (if I do say so myself) so if you have any queries or want to know anything just head over to the About page where you'll find all of our contact details and personal social media links (the magazine social media is on the right here, so check them out too)</p>
            </Panel>
            <br />
          </Col>
          <Col sm={6}>
            <Socials />
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps({ posts, containerStyleReducer }) {
  const { containerStyle } = containerStyleReducer;
  return { posts, containerStyle };
}

export default connect(mapStateToProps)(Home);
