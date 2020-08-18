import React from 'react';
import PropTypes from 'prop-types';
import '../header.less';
import '../reset.less';
import '../style.less';
import './course-list.less';
import '../typer.js';
import { courses } from '../data-camp-courses';
import CourseCard from './CourseCard';

const techs = ["R", "Python", "SQL", "Git", "Shell", "Spreadsheets", "Tableau", "Power BI", "Scala", "Excel", "Theory"];
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

class CourseList extends React.Component {
  constructor(props, context) {
    super(props, context);
    let uid= this.props.params.uniqueid;
    let selectedcourses = courses.filter(c => c.technology == uid);
    if (selectedcourses.length == 0) {
      selectedcourses = courses.filter(t => t.stream.replace(" ","-").toLowerCase().indexOf(uid) > -1);
    }

    this.state = {
      selectedStream: techs.find(a=> a.toLowerCase()==uid.replace("_"," ")) || skills.find(a=>a.unique_id==uid).name ,
      courses: selectedcourses
    };
  }
  componentDidMount() {
    setTimeout(() => {
      $('[data-typer-targets]').typer();
    }, 0);
    document.title= "Data science courses on "+ this.state.selectedStream.replace("_"," ");
  }
  render() {
    return (
      <div className="courses-page">
        <div>
          <br />
          <br />
          <h2 style={{textTransform:"capitalize"}}>All {this.state.selectedStream.replace("_"," ")} Courses</h2>
          <div className="class-list">
            {this.state.courses.map((pc, i) => <CourseCard course={pc}/>)}
          </div>
        </div>
      </div>);
  }
}

export default CourseList;
CourseList.contextTypes = {
  router: PropTypes.func.isRequired
};


