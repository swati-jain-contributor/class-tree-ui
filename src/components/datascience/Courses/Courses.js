import PropTypes from 'prop-types';
import React from 'react';
import '../header.less';
import '../reset.less';
import '../style.less';
import './courses.less';
import '../typer.js';
import CourseCard from '../CourseList/CourseCard';
import { courses } from '../data-camp-courses';

const techs = ["r", "python", "sql", "git", "shell", "spreadsheets", "tableau", "power_bi", "scala", "excel", "theory"];
const skills = [{
  name: "Data Engineering",
  unique_id: "data-engineering",
  image_id: "engineering"
},
{
  name: "Programming",
  unique_id: "programming",
  image_id: "programming"
},
{
  name: "Importing & Cleaning Data",
  unique_id: "cleaning",
  image_id: "cleaning"
},
{
  name: "Data Manipulation",
  unique_id: "manipulation",
  image_id: "manipulation"
},
{
  name: "Data Visualization",
  unique_id: "visualization",
  image_id: "visualization"
},
{
  name: "Probability & Statistics",
  unique_id: "probability",
  image_id: "probability"
},
{
  name: "Machine Learning",
  unique_id: "machine",
  image_id: "machine"
},
{
  name: "Applied Finance",
  unique_id: "finance",
  image_id: "Finance"
},
{
  name: "Reporting",
  unique_id: "reporting",
  image_id: "reporting"
},
{
  name: "Case Studies",
  unique_id: "case",
  image_id: "casestudy"
},
{
  name: "Management",
  unique_id: "management",
  image_id: "management"
},
{
  name: "Other",
  unique_id: "other",
  image_id: "other"
}];
const shuffle = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
class Courses extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      $('[data-typer-targets]').typer();
    }, 0);
    document.title="Online certification training on Data Science";
  }
  render() {
    return (
      <div className="courses-page">
        <div className="course-banner">
          <img src="https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/smart-datascience.jpg" alt={"Courses for Data Science"} />
          <div className="container info-container">
            <h2>This is your year to excel</h2>
            <p>Instead of finding excuses for not doing it, find reasons to do it..</p>
            <h3>
              Get started with
              <h4 style={{ position: "relative" }}>
                <span className="typer" id="main" data-backgroundColor="#000" data-primaryColor="#fff" data-typer-targets={"Artificial Intelligence, Machine Learning,Data Science,Deep Learning,Data Analytics,Big Data"} data-typer-highlight-speed="50" data-typer-type-speed="90" data-typer-clear-delay="1.5" data-typer-type-delay="0.2" data-typer-interval="1.5" data-typer-direction="rtl" />
              </h4>

            </h3>
            <a href="/search-courses" onClick={(e) => { 
            e.preventDefault(); 
            this.context.router.push('/search-courses'); 
            window.scrollTo(0, 0); 
            }} >Browse all courses</a>
          </div>
        </div>

        <div>
          <br />
          <br />
          <h2>Explore our course library</h2>
          <div className="class-list">
            {shuffle(courses).slice(0, 8).map((pc, i) => <CourseCard course={pc} />)}
          </div>
          <a href="/search-courses" onClick={(e) => { 
            e.preventDefault(); 
            this.context.router.push('/search-courses'); 
            window.scrollTo(0, 0); 
            }} className="all-courses">See all courses</a>
        </div>

        <div className="select-tech">
          <h2>Browse by technology</h2>
          <br />
          <br />
          <div className="tech-list">
            {techs.map((t, i) => <article key={i} onClick={() => { this.context.router.push('/course-list/' + t); window.scrollTo(0, 0); }}>
              <img src={"https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/00fff168c1ea7a30add9c8718b3bd3452321da7b/tech/" + t + ".svg"} alt={t.replace("_", " ")} />
              <div>
                <h4>{t.replace("_", " ")}</h4>
              </div>
            </article>)}
          </div>
        </div>
        <div className="skill-list">
          <h2>Browse by Skills</h2>
          <br />
          <br />
          <div className="tech-list">
            {skills.map((t, i) => <article key={i} onClick={() => { this.context.router.push('/course-list/' + t.unique_id); window.scrollTo(0, 0); }}>
              <img src={"https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/skills/" + t.image_id + ".png"} alt={t.name}/>
              <div>
                <h4>{t.name}</h4>
              </div>
            </article>)}
          </div>
        </div>
        <div>
          <br />
          <br />
          <h2>Trending Courses</h2>
          <div className="class-list">
            {courses.slice(0, 4).map((pc, i) => <CourseCard course={pc} />)}
          </div>
        </div>
      </div>);
  }
}

export default Courses;
Courses.contextTypes = {
  router: PropTypes.func.isRequired
};


