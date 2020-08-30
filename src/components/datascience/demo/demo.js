import React from 'react';
import '../header.less';
import '../reset.less';
import '../style.less';
import './demo.less';
import { courses } from "../data-camp-courses";
import { pioneers } from '../pioneers';
import { reviews } from '../reviews';
import Slider from "react-slick";
import CourseCard from '../CourseList/CourseCard';
import { connect } from 'react-redux';
const corporates = [{
  image: "https://lh3.googleusercontent.com/bIFO3AloFzcOzd4FRvaJ7cHhVFIeMY4BWh0hrk8D09pdaLqwyypQGv15ZYrYsL14DowOeWngfcWR8UhQ2f6dSw=w200",
  name: "SAP"
},
{
  image: "https://lh3.googleusercontent.com/x3dt9FbHIrqefYpLbbi0pRSuFgBRZluvd7a8qAmFEm_0bjZ_Nceu7ijbos_gEXMR2Fdu6KDfhvADECIiGKG-xQ=s0",
  name: "Deutsche Bank"
},
{
  image: "https://lh3.googleusercontent.com/SRXQgJaKRXHyowclLpL8YqaMrpW_xzuAYi3HpvbBjqa6AuC2NcZcvRW7qojGKPqGgrihWAXGtrPV7YQ3LWZP=s0",
  name: "BOSCH"
},
{
  image: "https://lh3.googleusercontent.com/nH5IUm5QnW3ZiVrccR1AEqFKGgz5nztmCMlcAVuZGTPNdEaXCSHzBVACoUGoUzURI2HS0ImMu9TXcoqJ0FJS=s0",
  name: "abbvie"
},
{
  image: "https://lh3.googleusercontent.com/M-GJstJBMWdHu1PI7NH8tzM35qeqPQXA68Y5j_S3gF1GKE34wtNnnGaR_iDoY0Yolasd5MyJdl0V7FqVXaNV=w300",
  name: "Pentax"
},
{
  image: "https://lh3.googleusercontent.com/K_uZJE6u7VQ4K6dPVXUs-9jQaISGT8B3GW5uHrBxuvIQFgn0evjQ7aVgOuko1s17qoBI8OjGJ3buInLd9QhEDA=s0",
  name: "Edge CLoud"
},
{
  image: "https://lh3.googleusercontent.com/UE1PJ6Pf4YBrIEwDJB3I2PyhKxAsJ-6jUvCtjfSQkInaloXKClcQ0Zsrot0zRQAkh0KgoMySHmrLKT6fN4urLA=s0",
  name: "Jimdo"
},
{
  image: "https://lh3.googleusercontent.com/T7A-5PXICGslRF1DE-szfg5rR1iDZpfvn2tq1ITX_-VEdm80OLi3qNbms1yK7XjMsrfecr6yOJEo4yl0q3j3=s0",
  name: "Ada"
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
let Cognito;
class Demo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  componentDidMount() {
    document.title = "Demo Class on Data Science | BakeMinds";
    setTimeout(() => window.Cognito.load("forms", { id: "1" }), 0);
  }
  next(slder) {
    slder.slickNext();
  }
  previous(slder) {
    slder.slickPrev();
  }
  render() {
    const settings = {
      lazyLoad: 'ondemand',
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
          centerMode: false
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
      <div className="demo-page course-details">
        <section className="trending-course book-demo-class"> <h1>Book Your Class</h1>
          <span className="section-separator" /></section>

        <h3 className="take-control">Take control of your destiny and transform your career .... Reserve your slot</h3>
        <h2 className="discover">Discover How To Go Beyond Traditional Learning And Learn With Live Instructor</h2>
        <section className="meta-section" id="overview">
          <div className="meta-wrapper">
            <div className="meta-item">
              <label>103,526</label>
              <span>Students Enrolled</span>
            </div>
            <div className="meta-item">
              <label>60 Minutes</label>
              <span>Master Class</span>
            </div>
            <div className="meta-item prereq-meta">
              <label>PREREQUISITES</label>
              <span>PASSION TO LEARN</span>
            </div>
          </div>
        </section>
        <section className="survey-form">
          <div className="cognito" />
          <div className="hide-cognito" />
        </section>
        <section className="library">
          <div>
            <div className="title-text"><strong>Did you know that you can get all this for FREE.... </strong>
              {!this.props.user ? <button onClick={() => window.dispatchEvent(new CustomEvent('askLogin', {}))}>Enroll Now</button> : null}
            </div>
            <div className="feature-list">
              <div className="section">
                <span className="count">300+</span>
                <span>Books</span>
              </div>
              <div className="section">
                <span className="count">100+</span>
                <span>Webinars</span>
              </div>
              <div className="section">
                <span className="count">100+</span>
                <span>Videos</span>
              </div>
              <div className="section">
                <span className="count">100+</span>
                <span>Private Coaching</span>
              </div>
              <div className="section">
                <span className="count">200+</span>
                <span>Blogs</span>
              </div>
            </div>
          </div>
        </section>
        <section className="trending-course">
          <h1>Trending courses in 2020</h1>
          <span className="section-separator" />
          <div className="list-carousel">
            <Slider {...settings} ref={c => (this.courseslider = c)}>
              {shuffle(courses).map((c, i) => <CourseCard course={c} />)}
            </Slider>
            <div className="swiper-button-prev sw-btn" onClick={() => this.previous(this.courseslider)}><i className="fa fa-arrow-left" /></div>
            <div className="swiper-button-next sw-btn" onClick={() => this.next(this.courseslider)}><i className="fa fa-arrow-right" /></div>
          </div>
        </section>
        <section className="user-reviews" id="reviews">
          <h1>What other says about us</h1>
          <span className="section-separator" />
          <div className="list-carousel">
            <Slider {...settingreview} ref={c => (this.settingslider = c)}>
              {reviews.map((c, i) => <div className="review-wrapper" key={i}><div className="review" key={"review" + i}>
                <div className="content-box">
                  <h5>{c.name}</h5><br /> {c.review}</div></div></div>)}
            </Slider>
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
      </div>
    );
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
export default connect(mapStateToProps, mapDispatchToProps)(Demo);
