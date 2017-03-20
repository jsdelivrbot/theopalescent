import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Affix from './affix';

class NavBar extends Component {
  state = {
    width: 0,
    height: 0
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  updateDimensions() {
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    const height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

    this.setState({ width, height });
  }

  render() {
    return (
      <div>
        <nav className="nav">
          <div className="container">
            <div className="row">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">The Opalescent</a>
              </div>
              <div className="vertical-align">
                <Link to="/submissions" className="nav-item">
                  Submissions
                </Link>
                <Link to="/about" className="nav-item">
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <Affix width={this.state.width} offsetTop={0}>
          <nav id="affix" className="nav-sub">
            <div className="container">
              <div className="row-sub">
                <div className="vertical-align-sub">
                  <Link to="/prose" className="nav-item-sub">
                    Prose
                  </Link>
                  <Link to="/poetry" className="nav-item-sub">
                    Poetry
                  </Link>
                  <Link to="/articles" className="nav-item-sub">
                    Articles
                  </Link>
                  <Link to="/reviews" className="nav-item-sub">
                    Reviews
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </Affix>
      </div>
    );
  }
}

export default connect(null)(NavBar);
