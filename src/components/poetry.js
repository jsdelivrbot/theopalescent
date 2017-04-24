import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Panel, Col, Row } from 'react-bootstrap';
import { Socials, Prompt, PoemRow, PoemCol } from './common';

class Poetry extends Component {
  render() {
    const { containerStyle } = this.props;
    return (
      <div id={containerStyle} className="container">
        <h3>Poetry</h3>
        <Row>
          <Col sm={6}>
            <Panel>
              <p>All poetry submissions will be published on this page. If you're looking for a piece from a particular month just click on that month. Otherwise, have a good scroll through!</p>
              <ul>
                <li><Link to="poetry/03-2017">March 17</Link></li>
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
        <PoemRow>
          <PoemCol
            weight={12}
            title="Sophie"
            author="Jessica Blain"
            >
            <p><i>Always believe in yourself.</i></p>
            <p>
              Some days we just lie under my blankets,<br />
              watching stupid YouTube videos on a tiny tv screen.<br />
              She’s surprised I’ve never seen any Studio Ghibli films,<br />
              and we end up watching one after the other;<br />
              Totoro, Howl, Spirited, Mononoke.
            </p>
            <p><i>Do this and no matter where you are,</i></p>
            <p>
              She gets excited as she talks about the films.<br />
              Animation fascinates her, but she is insecure about it,<br />
              feeling as if it dims her maturity. I always assure her<br />
              that her enthusiasm, the way she waves her hands,<br />
              smiling as she tells me facts about Hayao Miyazaki<br />
              while a documentary of his work plays in the background,<br />
              is what makes her. I tell her I love to hear her talk<br />
              about the things she loves, that if passion makes you<br />
              immature, we should all be children forever;<br />
              buried under quilts and Disney blankets, hands kept warm<br />
              by hot drinks in cartoon mugs from my kitchen.
            </p>
            <p><i>you will have nothing to fear.</i></p>
            <p><i>-Quote from The Cat Returns</i></p>
          </PoemCol>
        </PoemRow>
        {/* <h4 className="half-theme">There are no entries</h4>
        <Panel className="half-theme">
          <p className="vertical-align-theme">Why don't you help us change that?</p>
        </Panel> */}
        &nbsp;
      </div>
    );
  }
}

const mapStateToProps = ({ containerStyleReducer }) => {
   const { containerStyle } = containerStyleReducer;
   return { containerStyle };
};

export default connect(mapStateToProps)(Poetry);
