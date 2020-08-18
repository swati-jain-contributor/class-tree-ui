import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

import AboutPage from './components/about/About';

import Student from './components/Student/Student';
import VideoClass from './components/VideoClass/VideoClass';
import ClassDetails from './components/ClassDetails/ClassDetails';
import BookRead from './components/datascience/bookread/BookRead';
import DataScience from './components/datascience/DataScience';
import Book from './components/datascience/books/Book';
import Blogs from './components/datascience/Blogs/Blogs';
import BlogRead from './components/datascience/BlogRead/BlogRead';
import Courses from './components/datascience/Courses/Courses';
import CourseDetails from './components/datascience/CourseDetails/CourseDetails';
import CourseList from './components/datascience/CourseList/CourseList';
import Videos from './components/datascience/videos/Videos';
import Corporate from './components/datascience/Corporate/Corporate';
import Home from './components/datascience/Home/Home';
import AllCourses from './components/datascience/AllCourse/AllCourses';
export default (
  (location.href.indexOf("5000") > -1 || location.href.indexOf("datascience") > -1) ?
    <Route path="/" component={DataScience}>
       <IndexRoute component={Home} />
      <Route path="books" component={Book} />
      <Route path="book/:uniqueid" component={BookRead} />
      <Route path="blogs" component={Blogs} />
      <Route path="blog/:uniqueid" component={BlogRead} />
      <Route path="courses" component={Courses} />
      <Route path="search-courses" component={AllCourses} />
      <Route path="course-list/:uniqueid" component={CourseList} />
      <Route path="course/:uniqueid" component={CourseDetails} />
      <Route path="videos" component={Videos} />
      <Route path="corporate-training" component={Corporate} />
      <Route path="*" component={Home} />
    </Route>

    :
    <Route path="/" component={App}>
      <Route path="about" component={AboutPage} />
      <Route path="student" component={AboutPage} />
      <Route path="tutor" component={AboutPage} />
      <Route path="registered" component={AboutPage} />
      <Route path="contact" component={AboutPage} />
      <Route path="class/:id" component={ClassDetails} />
      <Route path="book/:id" component={BookRead} />
      <Route path="joinclass" component={VideoClass} />
      <Route path="*" component={AboutPage} />
    </Route>
);
