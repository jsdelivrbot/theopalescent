import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import Home from './components/home';
import Submissions from './components/submissions';
import About from './components/about';
import Prose from './components/prose';
import Poetry from './components/poetry';
import Articles from './components/articles';
import Reviews from './components/reviews';

export default (
  <Route path="/theopalescent/" component={App}>
    <IndexRoute component={Home} />
    <Route path='submissions' component={Submissions} />
    <Route path='about' component={About} />
    <Route path='prose' component={Prose} />
    <Route path='poetry' component={Poetry} />
    <Route path='articles' component={Articles} />
    <Route path='reviews' component={Reviews} />
    <Route path='posts' component={PostsIndex} />
    <Route path='posts/new' component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);
