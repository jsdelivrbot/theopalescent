import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    console.log(this.props.posts);
    return _.map(this.props.posts, (post, key) => {
      return (
        <li className="list-group-item" key={key}>
          {post}
        </li>
      );
    });
  }

  render() {
    console.log(this.props.containerStyle);
    return (
      <div id={this.props.containerStyle} className="container">
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
        <div id="large-container">Large container!</div>
      </div>
    );
  }
}

function mapStateToProps({ posts, containerStyleReducer }) {
  const { containerStyle } = containerStyleReducer;
  return { posts, containerStyle };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
