import React from 'react';
import PropTypes from 'prop-types';
import '../header.less';
import '../reset.less';
import '../style.less';
import './all-courses.less';
import '../typer.js';
import { courses } from '../data-camp-courses';
import CourseCard from '../CourseList/CourseCard';
import Pagination from "react-js-pagination";
const techs = [{ name: "R" }, { name: "Python" }, { name: "SQL" }, { name: "Git" }, { name: "Shell" }, { name: "Spreadsheets" }, { name: "Tableau" }, { name: "Power BI" }, { name: "Scala" }, { name: "Excel" }, { name: "Theory" }];
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

class AllCourses extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      courses: courses,
      techs,
      skills,
      activePage: 1,
      searchText: ""
    };
  }
  componentDidMount() {
    document.title="Online Data Science certification trainings";
  }
  render() {
    let filteredTechs = this.state.techs.filter(t => t.selected);
    let filteredSkills = this.state.skills.filter(t => t.selected);
    let selectedCourses = this.state.courses;
    if (filteredTechs.length > 0)
      selectedCourses = selectedCourses.filter(c => filteredTechs.find(t => t.name.toLowerCase().replace(' ', "_") == c.technology));
    if (filteredSkills.length > 0)
      selectedCourses = selectedCourses.filter(c => filteredSkills.find(s => c.stream.indexOf(s.name) > -1));
    if (this.state.searchText)
      selectedCourses = selectedCourses.filter(c => this.state.searchText.split(" ").find(st => c.title.toLowerCase().indexOf(st.toLowerCase()) > -1));
    let startIndex = (this.state.activePage - 1) * 15;
    return (
      <div className="all-courses-pages">
        <div>
          <br />
          <br />
          <h2 style={{ textTransform: "capitalize" }}>All Courses</h2>

          <div className="all-course-view">
            <button className="hidden-lg filter-btn" onClick={()=>this.setState({showFilters:!this.state.showFilters})}>{!this.state.showFilters?'Show': 'Hide'} Filters</button>
            <div className={"filter-col "+(this.state.showFilters?'show-filter':'')}>
              <label>FILTER BY</label>
              <h4>TECHNOLOGY</h4>
              {techs.map((t) =>
                <label className="cb-container" key={t.name}>{t.name}
                  <input type="checkbox" checked={t.selected} onClick={() => { t.selected = !t.selected; this.setState({ techs: this.state.techs, activePage: 1 }); }} />
                  <span className="cb-checkmark" />
                </label>)}
              <h4>SKILLS</h4>
              {skills.map((s) =>
                <label className="cb-container" key={s.name} >{s.name}
                  <input type="checkbox" checked={s.selected} onClick={() => { s.selected = !s.selected; this.setState({ skills: this.state.skills, activePage: 1 }); }} />
                  <span className="cb-checkmark" />
                </label>)}
            </div>
            <div className="class-col">
              <div className="search-box">
                <input type="text" maxLength="40" placeholder="Enter keyword or phrase" value={this.state.searchText} onChange={(e) => this.setState({ searchText: e.target.value, activePage: 1 })} />
                <i className="fa fa-search"/>
              </div>
              Results ({selectedCourses.length})
              <div className="class-list">
                {selectedCourses.slice(startIndex, startIndex + 15).map((pc, i) => <CourseCard course={pc} key={i} />)}
              </div>
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={15}
                totalItemsCount={selectedCourses.length}
                pageRangeDisplayed={5}
                onChange={(pageNumber) => { this.setState({ activePage: pageNumber }); window.scrollTo(0, 0); }}
              />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>

        </div>
      </div>);
  }
}

export default AllCourses;
AllCourses.contextTypes = {
  router: PropTypes.func.isRequired
};


