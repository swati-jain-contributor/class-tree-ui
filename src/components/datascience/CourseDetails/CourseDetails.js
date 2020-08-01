import React from 'react';
import PropTypes from 'prop-types';
import '../header.less';
import '../reset.less';
import '../style.less';
import Header from '../header';
import './course-details.less';
import { pythoncourses } from './course-data/p-courses';
import { rCourses } from './course-data/r-courses';
import { othercourses } from './course-data/other-courses';
import sha512 from 'sha512';
import { courses } from '../data-camp-courses';
let bolt;

const b = {
  id: 1,
  img: "https://books.google.co.in/books/content?id=9klLaqIUbSAC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70PgALsiv-WZOu_fGraV_P_T3nVCmRT19oqL16RD2ELiXE0xD2QoVD3IO_JNGYWjZXoPKaHirAAoofsxdVRSaPY4-2ymY6Qb5wADXPe5B8NvXyfzWfPULanHQugy4Ko9Qb2yeFv",
  name: "Head First Statistics",
  reads: 120,
  author: "Dawn Griffiths",
  rating: "4",
  loadName: "Introduction%20to%20Machine%20Learning_page"
};


class CourseDetails extends React.Component {
  constructor(props, context) {
    super(props, context);
    let uid = this.props.params.uniqueid;


    let course = courses.find(a => a.title.toLowerCase().replace(/ /g, "-") == uid);
    let selectedList;
    if (course.technology == 'r')
      selectedList = rCourses;
    else if (course.technology == 'python')
      selectedList = pythoncourses;
    else
      selectedList = othercourses;
    this.state = {
      selectedCourse: course,
      courseDetails: selectedList.find(l => l.title == course.title)
    };
    this.makepayment = this.makepayment.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {

    }, 0);
  }
  makepayment() {
    let data = {
      key: 'ABfWbhJg',
      txnid: 'ORD519',
      hash:  "834ac856c04b48c5630f12ce6e6e9ad5f4091e0d38176ddcf743455f9873c324dc02284cc17fcbe1c86928966b36e4ec4f714258b53ec08d075fe0d4185cd6f3",//sha512("ABfWbhJg|123456789|1|Bag|Jaysinh|dummyemail@dummy.com|udf1|udf2|udf3|udf4|udf5||||||0uBSIFCm3a"),
      amount: '400.00',
      firstname: 'sweety',
      email: 'sweety@gmail.com',
      phone: '12345',
      productinfo: 'P',
      udf5:"BOLT_KIT_NODE_JS",
      surl: 'https://classtree.in',
      furl: 'https://classtree.in'
      // mode: 'mode'// non-mandatory for Customized Response Handling
    };
    let handler = {

      responseHandler:  (BOLT) => {
          alert(this.state.selectedCourse.title+" successfully booked. Check your mail for full details");
        // your payment response Code goes here, BOLT is the response object

      },
      catchException: function (BOLT) {
        console.log(BOLT);
        // the code you use to handle the integration errors goes here

      }
    };
    window.bolt.launch(data, handler);
  }
  render() {
    let course = this.state.selectedCourse;
    let courseDetail = this.state.courseDetails;
    return (
      <div className="course-details">
        <div className="course-banner">
          <img src="https://laffiles.azureedge.net/images/course/course118.jpg" alt={course.title} />
          <div className="info">
            <div className="course-info">
              <div className="crumb-container">
                <a href="/catalog/courses"> All Courses </a>
                <i className="fa-caret-right fa" />
                <a href={"/course-list/" + course.technology}> {course.technology}</a>
              </div>
              <div className="specilization-summary summary">
                <h1 className="section-title">{course.title}</h1>
                <div>
                  <div className="special-ribbon">
                    {/* <i><img src="/catalog/assets/v2/img/single-course/specialization-icon.svg" /></i> */}
                    <p>{course.description}</p>
                  </div>
                </div>
                <div className="price-and-info d-block">
                  <div>
                    <button className="btn btn-dark add-to-cart-button" data-itemtype="Subscription" onClick={this.makepayment}>{course.price || 400} INR/- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book Now <i className="fal fa-chevron-right ml-1" /></button>
                  </div>
                  <div className="access-free-text">
                    <b>100% money back gurantee.</b> If you are not satisfied after first 3 classes, 100% money is refunded back to your account without any question&nbsp;
                </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <section className="course-anchors">
          <div className="d-flex justify-content-center flex-wrap easeScroll">
            <a id="scroll-to" className="scrollTo" href="#overview">Overview</a>
            <a id="scroll-to" className="scrollTo" href="#what-youll-learn">What You'll Learn</a>
            <a id="scroll-to" className="scrollTo" href="#syllabus">Course Syllabus</a>
            <a id="scroll-to" className="scrollTo" href="#opportunities">Career Opportunities</a>
          </div>
        </section>
        <section className="course-outline">
          {/* <h1>{courseDetail.title}</h1> */}
          <h3>Course Description</h3>
          <p className="description">{courseDetail.detailDescription}</p>
          <h4>{courseDetail.time}</h4>
          <h3>Syllabus</h3>
          <div className="chapter-list">
            {courseDetail.chapters.map((ch, i) => <div key={i} className="chapter">
              <h4>{ch.title}</h4>
              <p>{ch.description}</p>
              <ul>
                {ch.parts.map(p => <li><h5>{p}</h5></li>)}
              </ul>
            </div>)}
          </div>
          <div className="cards">
            <div className="tracks">
              <h3>Tracks</h3>
              <ul>
                {courseDetail.tracks.map(t => <li><h5>{t}</h5></li>)}
              </ul>
            </div>
            <div className="prereq">
              <h3>Prerequisites</h3>
              <ul>
                {courseDetail.prerequistes.map(t => <li><h5>{t}</h5></li>)}
              </ul>
            </div>
          </div>
        </section>
      </div>);
  }
}

export default CourseDetails;
CourseDetails.contextTypes = {
  router: PropTypes.func.isRequired
};
