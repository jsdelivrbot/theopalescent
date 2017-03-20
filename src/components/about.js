import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Row, Col } from 'react-bootstrap';
import { EditorInfo } from './common';

class About extends Component {
  render() {
    const { containerStyle } = this.props;
    return (
      <div id={containerStyle} className="container">
        <h3>Meet the editors</h3>
        <Row>
          <Col sm={6}>
            <EditorInfo photo="jess.png" name="Jessica Blain" twitter="https://twitter.com/o_JessyBean_o" instagram="https://www.instagram.com/o_jessybean_o/" desc="Final year English and Creative Writing student at LJMU. Specialises in screenwriting. Spends way too much time talking about her pets and video games" />
          </Col>
          <Col sm={6}>
            <EditorInfo photo="megan.jpg" name="Megan Walters" twitter="https://twitter.com/TenderPurpleInk" instagram="https://www.instagram.com/tenderpurpleink_/" desc="Final Year English & Creative Writing student. Specialises in Poetry. Likes to change her hair colour too often and thinks she's funny" />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ containerStyleReducer }) => {
  const { containerStyle } = containerStyleReducer;
  return { containerStyle };
};

export default connect(mapStateToProps)(About);
