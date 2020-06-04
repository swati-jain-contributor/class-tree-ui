import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

import AboutPage from './components/about/About';

import Student from './components/Student/Student';
import VideoClass from './components/VideoClass/VideoClass';
import ClassDetails from './components/ClassDetails/ClassDetails';

export default (
  <Route path="/" component={App}>
    <Route path="about" component={AboutPage} />
    <Route path="student" component={AboutPage} />
    <Route path="tutor" component={AboutPage} />
    <Route path="registered" component={AboutPage} />
    <Route path="contact" component={AboutPage} />
    <Route path="class/:id" component={ClassDetails} />
    <Route path="joinclass" component={VideoClass} />
    <Route path="*" component={AboutPage} />
  </Route>
);
