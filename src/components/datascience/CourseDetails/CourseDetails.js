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
import { reviews } from '../reviews';
import Slider from "react-slick";
import CourseCard from '../CourseList/CourseCard';
import ClassApi from '../../../api/classApi';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import crypto from 'crypto';
import swal from 'sweetalert2';

let bolt;
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
const b = {
  id: 1,
  img: "https://books.google.co.in/books/content?id=9klLaqIUbSAC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70PgALsiv-WZOu_fGraV_P_T3nVCmRT19oqL16RD2ELiXE0xD2QoVD3IO_JNGYWjZXoPKaHirAAoofsxdVRSaPY4-2ymY6Qb5wADXPe5B8NvXyfzWfPULanHQugy4Ko9Qb2yeFv",
  name: "Head First Statistics",
  reads: 120,
  author: "Dawn Griffiths",
  rating: "4",
  loadName: "Introduction%20to%20Machine%20Learning_page"
};

const features = [{
  title: "Instructor LED 1:1 Session",
  description: "It is not just a video you are watching. Sessions are going to be very interactive with whole focus on you. Your all questions doubts woould be clarified right there in the session.",
  image: "instructor.jpeg"
},
{
  title: "Flexible Learning Program",
  description: "Get a custom learning plan tailored to fit your busy life. Classes would be scheduled based on your availability. Course outline would be prepared based on your needs.",
  image: "custom.jpeg"
},
// {
//   title: "Certificate",
//   description: "On successful completion of course, you will get certificate from BakeMinds with unique certification id. You can use this certification id to claim your knowledge anytime in your career.",
//   image: "certificate.jpeg"
// },
{
  title: "Assignments",
  description: "All sessions would be followed by assignment sessions",
  image: "assignments.jpeg"
},
{
  title: "Life time access to study material",
  description: "During the sessions, rich learning study material will be shared to you which you can leverage at any point of time to refresh your knowledge",
  image: "study.jpeg"
},
{
  title: "Real Life Case Study",
  description: "With real world projects and immersive content built in partnership with top tier companies, you’ll master the tech skills companies want.",
  image: "casestudy.jpeg"
}
  ,
{
  title: "24x7 Personal Assistance",
  description: "Before session, Durng session or After session. Anytime you are facing any issue, we are just a message away. Just drop call / message to your personal advisor. He would resolve all your issues.",
  image: "personal.jpeg"
},
{
  title: "Lifelong knowledge",
  description: "The best thing you can do for yourself is to invest time in developing your skills. And this is the time to learn something you would be pproud of always.",
  image: "knowledge.jpeg"
},
{
  title: "Access on all devices - Mobile / Laptop / Tablet",
  description: "All sessions are compatible on all devices. Feel free to take sessions on any device you are comfortable with.",
  image: "access.jpeg"
}];

const faqs = [
  {
    "question": "What if I face any technical issue while attendiing the class?",
    "answer": "Once you book the class, a personal advisor would be assigned to you. He would ensure smooth running of the course. You can reach out to him anytime of the day, 24 * 7."
  },
  {
    "question": "When my class would be scheduled?",
    "answer": "After enrollment, your personaal advisor would contact you and take available timings within 24 hours. Class would be scheduled according to your comfortable timings."
  },
  {
    "question": "I want some changes in course outline. What should I do?",
    "answer": "Reach out to us, via call - +91 88860 80 289 or email - care@bakeminds.com . In case you have already enrolled, you can also talk to your personal advisor."
  },
  {
    "question": "I don't have knowledge of pre-requisites. Can I still enroll?",
    "answer": "Without prerequisites, it could be difficult for you to learn these concepts. We recommend you to enroll for prerequiste courses first. Prerequiste courses are listed in top section."
  },
  {
    "question": "I want to enroll for demo class. Do I need to pay for it?",
    "answer": "Demo sessions are free of cost. And to make you comfortable with our platform. Our representative would reach out to you and would give you brief on course."
  },
  {
    "question": "When will I get certificate? What's the value it holds?",
    "answer": "On successful completion of course, you will get certificate from BakeMinds with unique certification id. You can use this certification id to claim your knowledge anytime in your career. It is well recognized in all corporates and institutions across the world."
  },
  {
    "question": "What if I am not satisfied? Can I ask for refund?",
    "answer": "After first 3 classes, if you feel you are not satisified and does not want to continue the course, you can ask for refund. You can talk to your personal advisor regarding this. Although, we promise you wont have bad experiencce with us."
  }
];
class CourseDetails extends React.Component {
  constructor(props, context) {
    super(props, context);
    let uid = this.props.params.uniqueid;
    let course = courses.find(a => a.title.toLowerCase().replace(/ /g, "-") == uid);
    let selectedList;
    if (course.technology == 'r') {
      selectedList = rCourses;
    }
    else if (course.technology == 'python')
      selectedList = pythoncourses;
    else
      selectedList = othercourses;
    this.state = {
      selectedCourse: course,
      courseDetails: selectedList.find(l => l.title == course.title)
    };
    this.makePayment = this.makePayment.bind(this);
    this.enrollClass = this.enrollClass.bind(this);
    this.redirect = this.redirect.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.userloginFn = this.userloginFn.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    let stateuid = state.selectedCourse.title.toLowerCase().replace(/ /g, "-");
    let currentuid = props.params.uniqueid;
    if (stateuid != currentuid) {
      let course = courses.find(a => a.title.toLowerCase().replace(/ /g, "-") == currentuid);
      let selectedList;
      if (course.technology == 'r')
        selectedList = rCourses;
      else if (course.technology == 'python')
        selectedList = pythoncourses;
      else
        selectedList = othercourses;
      return {
        selectedCourse: course,
        courseDetails: selectedList.find(l => l.title == course.title)
      };
    }
  }
  next(slder) {
    slder.slickNext();
  }
  previous(slder) {
    slder.slickPrev();
  }
  redirect(e) {
    e.preventDefault();
    this.context.router.push(e.target.href);
    window.scrollTo(0, 0);
  }
  scrollTo(e) {
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
      scrollTop: $(e.target.dataset["scrollto"]).offset().top
    }, 1500);
  }
  componentDidMount() {
    document.title = "Certification training on " + this.state.selectedCourse.title;
  }
  componentDidUpdate() {
    if (this.state.bookingClass && this.props.user) {
      this.enrollClass();
      this.setState({ bookingClass: null });
    }
  }
  enrollClass() {
    if (this.props.user) {
      this.makePayment();
    }
    else {
      this.setState({ bookingClass: true });
      window.dispatchEvent(new CustomEvent('askLogin', {}));
      window.addEventListener("userloggedin", this.userloginFn);
    }
  }
  userloginFn() {
    window.removeEventListener("userloggedin", this.userloginFn);
  }
  makePayment() {
    let cl = this.state.selectedCourse;
    let txnId = cl.id + '-' + (new Date).getTime();
    let key = 'ABfWbhJg';
    let salt = '0uBSIFCm3a';
    let cryp = crypto.createHash('sha512');
    let amount = parseInt(cl.price);
    let text = key + '|' + txnId + '|' + amount + '|' + cl.title + '|' + this.props.user.firstname + '|' + this.props.user.email + '|||||' + 'DATASCIENCE_BAKEMINDS' + '||||||' + salt;
    cryp.update(text);
    let hash = cryp.digest('hex');
    let data = {
      key: key,
      txnid: txnId,
      hash: hash,
      amount: amount,
      firstname: this.props.user.firstname,
      email: this.props.user.email,
      phone: this.props.user.mobile,
      productinfo: cl.title,
      udf5: 'DATASCIENCE_BAKEMINDS',
      surl: location.href,
      furl: location.href
      // mode: 'mode'// non-mandatory for Customized Response Handling
    };
    let handler = {

      responseHandler: (BOLT) => {
        console.log(BOLT);

        if (BOLT.response.txnStatus == 'SUCCESS') {
          ClassApi.enrollDSClass({
            "classId": cl.id,
            "txnId": txnId,
            "response": JSON.stringify(BOLT),
            "user": this.props.user.userid,
            "amount": amount
          });
          window.showSuccessToast("Congratulations! Class Registered successfully!");
          swal.fire("Congrats", cl.title + " successfully booked. Our representative will reach you shortly.", "success");
        }
        else {
          swal.fire("Oops", "Your payment failed! Please try again!", "error");
        }
      },
      catchException: function (BOLT) {
        swal.fire("Oops", "Your payment failed! Please try again!", "error");
        // the code you use to handle the integration errors goes here
      }
    };
    window.bolt.launch(data, handler);
  }
  render() {
    let course = this.state.selectedCourse;
    let courseDetail = this.state.courseDetails;
    let relatedCourses = courses.filter(c => course.stream.split(",").indexOf(st => c.stream.indexOf(st) > -1));
    let pc = course;
    let foldername;
    if (pc.technology == "sql")
      foldername = "SQL";
    else if (pc.stream.indexOf("Machine Learning") > -1)
      foldername = "machine-learning";
    else if (pc.stream.indexOf("Probability") > -1)
      foldername = "probability";
    else if (['excel', 'spreadsheets', 'theory', 'scala', 'tableau', 'power_bi', 'git', 'shell'].indexOf(pc.technology) > -1)
      foldername = pc.technology;
    else if (pc.stream.indexOf("Visualization") > -1)
      foldername = "visualization";
    else if (pc.technology == "r" && pc.stream.indexOf('Programming') > -1)
      foldername = "r";
    else if (pc.technology == "python" && pc.stream.indexOf('Programming') > -1)
      foldername = "python";
    else if (pc.stream.indexOf('Cleaning') > -1)
      foldername = "cleaning";
    else
      foldername = "others";
    const settings = {
      infinite: true,
      slidesToShow: 5,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      centerMode: true,
      centerPadding: '60px',
      responsive: [{
        breakpoint: 1580,
        settings: {
          slidesToShow: 3.5,
        }
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,

        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          centerPadding: '0',
        }
      }
      ]
    };
    const settingreview = JSON.parse(JSON.stringify(settings));
    settingreview.slidesToShow = 2;
    settingreview.autoplaySpeed = 5000;
    settingreview.dots = true;
    settingreview.responsive = [
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          centerPadding: '0',
        }
      }
    ];
    return (
      <div className="course-details">
        <div className="course-banner">
          <img src={"https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/courses/" + foldername + "/" + pc.id + ".webp"} alt={course.title} />
          <div className="info">
            <p className="instructor-tag">Instructor Led 1:1 Personal Session based on your availability and requirements</p>
            <div className="course-info">
              <div className="crumb-container">
                <a href="/search-courses" onClick={this.redirect}> All Courses </a>
                <i className="fa-caret-right fa" />
                <a href={"/course-list/" + course.technology} onClick={this.redirect}> {course.technology}</a>
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
                    <button className="btn btn-dark add-to-cart-button" data-itemtype="Subscription" onClick={this.enrollClass}><span className="actual-price">{course.price * 1.60} INR</span><span className="sale-price">{course.price} INR</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book Now <i className="fal fa-chevron-right ml-1" /></button>
                  </div>
                  <div className="access-free-text">
                    <b>100% money back gurantee.</b> If you are not satisfied after first 3 classes, 100% money is refunded back to your account without any question&nbsp;&nbsp;<b className="know-more" onClick={(e) => {
                      $([document.documentElement, document.body]).animate({
                        scrollTop: $("#contact-us").offset().top
                      }, 1500);
                    }}>Know More</b>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <section className="course-anchors">
          <div className="d-flex justify-content-center flex-wrap easeScroll">
            <a id="scroll-to" className="scrollTo" href="#overview" data-scrollto="#overview" onClick={this.scrollTo}>Overview</a>
            <a id="scroll-to" className="scrollTo" href="#course-outline" data-scrollto="#course-outline" onClick={this.scrollTo}>What You'll Learn</a>
            <a id="scroll-to" className="scrollTo" href="#features" data-scrollto="#features" onClick={this.scrollTo}>Features</a>
            <a id="scroll-to" className="scrollTo" href="#certificate" data-scrollto="#certificate" onClick={this.scrollTo}>Certificate</a>
            <a id="scroll-to" className="scrollTo" href="#reviews" data-scrollto="#reviews" onClick={this.scrollTo}>User Reviews</a>
            <a id="scroll-to" className="scrollTo" href="#contact-us" data-scrollto="#contact-us" onClick={this.scrollTo}>Contact Us</a>
            <a id="scroll-to" className="scrollTo" href="#faqs" data-scrollto="#contact-us" onClick={this.scrollTo}>FAQs</a>
          </div>
        </section>
        <section className="meta-section" id="overview">
          <div className="meta-wrapper">
            <div className="meta-item">
              <label>ESTIMATED TIME</label>
              <span>{course.time}</span>
              <span className="help-text">When you are available</span>
            </div>
            <div className="meta-item">
              <label>Language</label>
              <span>English</span>
              <span className="help-text">What you are comfortable with</span>
            </div>
            <div className="meta-item prereq-meta">
              <label>PREREQUISTES</label>
              {courseDetail.prerequistes.length > 0 ? courseDetail.prerequistes.map(t => <span className="prereq-link" onClick={() => { this.context.router.push('/course/' + t.toLowerCase().replace(/ /g, "-")); window.scrollTo(0, 0); }}>{t}</span>) : <span>PASSION to LEARN</span>}
            </div>
          </div>
        </section>
        <section className="course-outline" id="course-outline">
          <div className="what-learn">
            <h3>What You Will Learn</h3>
            {/* <button>Book Your Demo Class</button> */}
          </div>
          <div className="course-content">
            <div className="row-1">
              <h6 className="syllabus">SYLLABUS</h6>
              <div className="course--description">
                <h3 className="title">{course.title}</h3>
                <p className="description">{courseDetail.detailDescription}</p>
              </div>
              <img src={"https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/courses/" + foldername + "/" + pc.id + ".webp"} alt={course.title} />
            </div>
            <div className="prereq-box">
              <h6>PREREQUISITE KNOWLEDGE</h6>
              {courseDetail.prerequistes.length > 0 ?
                <p>This program has been created specifically for students who are interested in {course.stream.split(",").map(t => <span>{t} , </span>)}, and who have a knowledge of {courseDetail.prerequistes.map(t => <span>{t} ,</span>)} . Outside of that, it's a beginner-friendly program. <b>Passion to Learn is must</b></p>
                :
                <p>This program has been created specifically for students who are interested in {course.stream.split(",").map(t => <span>{t} , </span>)}. Outside of that, it's a beginner-friendly program. <b>Passion to Learn is must</b></p>}
            </div>
            <div>
              <div className="chapter-list">
                {courseDetail.chapters.map((ch, i) => <div key={i} className="chapter">
                  <h4>{ch.title}</h4>
                  <p>{ch.description}</p>
                  <ul>
                    {ch.parts.map(p => <li><h5>{p}</h5></li>)}
                  </ul>
                </div>)}
              </div>
            </div>
          </div>
        </section>
        <section className="course-feature" id="features">
          <h3>All Our Programs Include</h3>
          <div className="feature-list">
            {features.map(f => <div className="feature">
              <img src={"https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/features/" + f.image} alt={f.title} />
              <div>
                <h4>{f.title}</h4>
                <p >{f.description}</p>
              </div>
            </div>)}

          </div>
        </section>
        <section className="certificate-panel" id="certificate">
          <div className="certificate-board">
            <div className="txt-panel">
              <h3>{course.title + " Certification"}</h3>
              <p>On successful completion of course, you will get certificate from BakeMinds with unique certification id. You can use this certification id to claim your knowledge anytime in your career.</p>
              <p>You can share your Course Certificates in the Certifications section of your LinkedIn profile, on printed resumes, CVs, or other documents.</p>
            </div>
            <div className="picture-panel">
              <img src={"https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/features/certificate.png"} alt={"Certification for " + course.title} />
            </div>
          </div>

        </section>
        <section className="user-reviews" id="reviews">
          <h1>What other says about us</h1>
          <span className="section-separator" />
          <div className="list-carousel">
            <Slider {...settingreview} ref={c => (this.settingslider = c)}>
              {reviews.map((c, i) => <div className="review-wrapper" key={i}><div className="review" key={"review" + i}>
                {/* <div className="pic-box">
                <img src={"https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/pioneers/"+c.name.split(" ")[0].toLowerCase()+".jpeg"} alt={c.name}/>
                </div> */}
                <div className="content-box">
                  <h5>{c.name}</h5><br /> {c.review}</div></div></div>)}
            </Slider>
            {/* <div className="swiper-button-prev sw-btn" onClick={() => this.previous(this.pioneerslider)}><i className="fa fa-arrow-left" /></div>
            <div className="swiper-button-next sw-btn" onClick={() => this.next(this.pioneerslider)}><i className="fa fa-arrow-right" /></div> */}
          </div>
        </section>
        <section className="contact-queries" id="contact-us">
          <h3>Have More Questions? Need More Customisation? Any Queries ... Just let us know.</h3>
          <div className="contact">
            <div className="row">
              <div className="col-lg-4 mt-4">
                <div className="info">
                  <i className="fa fa-envelope" />
                  <h4>Email:</h4>
                  <a href="mailto:care@bakeminds.com">care@bakeminds.com</a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="info w-100 mt-4">
                  <i className="fa fa-phone fa-rotate-90" />
                  <h4>Call / Whatsapp:</h4>
                  <a href="tel:+918886080289">+91 888 60 80 289</a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="info w-100 mt-4">
                  <i className="fab fa-whatsapp" />
                  <h4>Send messsage:</h4>
                  <a href="https://wa.me/918886080289?text=Hello%20Bakeminds!">Click here</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-list" id="faqs">
          <div>
            <h3>Frequently Asked Questions</h3>
          </div>
          <div className="panel-group" id="accordion">
            {faqs.map((faq, i) => <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <svg className="_ufjrdd" aria-hidden="true" focusable="false" viewBox="0 0 48 48" role="img" aria-labelledby="ChevronRight2b4c6981-e5b3-4b85-f56b-8fbe6ba01804 ChevronRight2b4c6981-e5b3-4b85-f56b-8fbe6ba01804Desc" xmlns="http://www.w3.org/2000/svg"><polygon transform="translate(23.999500, 24.000000) scale(-1, 1) translate(-23.999500, -24.000000)" points="16 24 30.585 40 31.999 38.586 18.828 24 31.999 9.415 30.585 8" role="presentation" /></svg>
                  <a data-toggle="collapse" data-parent="#accordion" href={"#faq" + i}>
                    {faq.question}</a>
                </h4>
              </div>
              <div id={"faq" + i} className="panel-collapse collapse">
                <div className="panel-body">{faq.answer}</div>
              </div>
            </div>)}
          </div>
        </section>
        <section className="related-courses">
          <div className="title-section">
            <h3>Related Courses</h3>
          </div>
          <div className="list-carousel">
            <Slider {...settings} ref={c => (this.courseslider = c)}>
              {shuffle(relatedCourses).map((c, i) => <CourseCard course={c} />)}
            </Slider>
            <div className="swiper-button-prev sw-btn" onClick={() => this.previous(this.courseslider)}><i className="fa fa-arrow-left" /></div>
            <div className="swiper-button-next sw-btn" onClick={() => this.next(this.courseslider)}><i className="fa fa-arrow-right" /></div>
          </div>
        </section>
      </div>);
  }
}
function mapStateToProps(state, ownProps) {
  return {
    user: state.session.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails);
CourseDetails.contextTypes = {
  router: PropTypes.func.isRequired
};
