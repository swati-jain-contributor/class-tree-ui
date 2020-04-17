import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import DashboardPage from './components/dashboard/DashboardPage';
import MenuPage from './components/menu/MenuPage';
import AboutPage from './components/about/About';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import Student from './components/Student/Student';

export default (
  <Route path="/" component={App}>
    <Route path="about" component={AboutPage} />
    <Route path="student" component={AboutPage} />
    <Route path="tutor" component={AboutPage} />
    <Route path="registered" component={AboutPage} />
    <Route path="contact" component={AboutPage} />
  </Route>
);
