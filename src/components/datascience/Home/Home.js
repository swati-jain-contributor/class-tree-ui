import React from 'react';
import '../header.less';
import '../reset.less';
import '../style.less';
import { connect } from 'react-redux';
import { webinars } from "../webinars";
import { courses } from "../data-camp-courses";
import { pioneers } from '../pioneers';
import Slider from "react-slick";
import CourseCard from '../CourseList/CourseCard';
import server from '../../../api/server';
import ClassApi from '../../../api/classApi';
import swal from 'sweetalert2';
const corporates = [{
  image: "https://lh3.googleusercontent.com/bIFO3AloFzcOzd4FRvaJ7cHhVFIeMY4BWh0hrk8D09pdaLqwyypQGv15ZYrYsL14DowOeWngfcWR8UhQ2f6dSw=w200",
  name:"SAP"
},
{
  image: "https://lh3.googleusercontent.com/x3dt9FbHIrqefYpLbbi0pRSuFgBRZluvd7a8qAmFEm_0bjZ_Nceu7ijbos_gEXMR2Fdu6KDfhvADECIiGKG-xQ=s0",
  name:"Deutsche Bank"
},
{
  image: "https://lh3.googleusercontent.com/SRXQgJaKRXHyowclLpL8YqaMrpW_xzuAYi3HpvbBjqa6AuC2NcZcvRW7qojGKPqGgrihWAXGtrPV7YQ3LWZP=s0",
  name:"BOSCH"
},
{
  image: "https://lh3.googleusercontent.com/nH5IUm5QnW3ZiVrccR1AEqFKGgz5nztmCMlcAVuZGTPNdEaXCSHzBVACoUGoUzURI2HS0ImMu9TXcoqJ0FJS=s0",
  name:"abbvie"
},
{
  image: "https://lh3.googleusercontent.com/M-GJstJBMWdHu1PI7NH8tzM35qeqPQXA68Y5j_S3gF1GKE34wtNnnGaR_iDoY0Yolasd5MyJdl0V7FqVXaNV=w300",
  name:"Pentax"
},
{
  image: "https://lh3.googleusercontent.com/K_uZJE6u7VQ4K6dPVXUs-9jQaISGT8B3GW5uHrBxuvIQFgn0evjQ7aVgOuko1s17qoBI8OjGJ3buInLd9QhEDA=s0",
  name:"Edge CLoud"
},
{
  image: "https://lh3.googleusercontent.com/UE1PJ6Pf4YBrIEwDJB3I2PyhKxAsJ-6jUvCtjfSQkInaloXKClcQ0Zsrot0zRQAkh0KgoMySHmrLKT6fN4urLA=s0",
  name:"Jimdo"
},
{
  image: "https://lh3.googleusercontent.com/T7A-5PXICGslRF1DE-szfg5rR1iDZpfvn2tq1ITX_-VEdm80OLi3qNbms1yK7XjMsrfecr6yOJEo4yl0q3j3=s0",
  name:"Ada"
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
class Home extends React.Component {

  componentWillReceiveProps(nextProps) {

  }
  constructor(props, context) {
    super(props, context);
    this.state = {
      classData: {
        topic: "",
        description: ""
      },
      step: 0
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.joinWebinar = this.joinWebinar.bind(this);
    this.userloginFn = this.userloginFn.bind(this);
  }
  componentDidMount() {
    document.title = "Learn Data Science | BakeMinds";
    setTimeout(() => {
      let e = document.querySelectorAll('.form_md input[type="text"],.form_md input[type="textarea"],.form_md input[type="password"], .form_md input[type="email"], .form_md input[type="number"], .form_md input[type="tel"], .form_md textarea');
      if (e)
        for (let i = 0; i < e.length; i++)
          e[i].previousElementSibling.classList.add("floating-label"),
            e[i].addEventListener("focusin", function () {
              this.previousElementSibling.classList.add("label-active");
            }),
            e[i].addEventListener("focusout", function () {
              "" != this.value ? this.classList.add("input-active") : ("" == this.value && this.classList.remove("input-active"),
                this.previousElementSibling.classList.remove("label-active"));
            });
      jQuery(function ($) {
        $('#r_val').on('change', function () {
          $('#r_val option').each(function () {
            $(this).html($(this).attr('data-text'));
          });
          $('#r_val option:selected').html($('#r_val option:selected').attr('data-text'));
          let cval = $('#r_val option:selected').attr('value');
          let ccode = $('#r_val option:selected').attr('data-code');
          $('#r_val option:selected').html(cval + ' (' + ccode + ')');
          $(this).blur();
        }).trigger('change');
        $('#r_val').on('focus', function () {
          $('#r_val option').each(function () {
            $(this).html($(this).attr('data-text'));
          });
        });

        $('#b_val').on('change', function () {
          $('#b_val option').each(function () {
            $(this).html($(this).attr('data-text'));
          });
          $('#b_val option:selected').html($('#r_val option:selected').attr('data-text'));
          let cval = $('#b_val option:selected').attr('value');
          let ccode = $('#b_val option:selected').attr('data-code');
          $('#b_val option:selected').html(cval + ' (' + ccode + ')');
          $(this).blur();
        }).trigger('change');
        $('#b_val').on('focus', function () {
          $('#b_val option').each(function () {
            $(this).html($(this).attr('data-text'));
          });
        });
      });

    }, 0);

  }
  componentDidUpdate() {
    if (this.state.joiningWebinar && this.props.user) {
      this.joinWebinar(this.state.joiningWebinar);
      this.setState({ joiningWebinar: null });
    }
  }

  joinWebinar(w){
    if(this.props.user){
      ClassApi.sendFeedback({
        message:w.topic+ '-'+w.date,
        subject:w.topic,
        type:"WEBINAR_REQUEST",
      });
      swal.fire({
        title: 'Booking seat for you...!',
        html: 'Please wait',
        timer: 5000,
        timerProgressBar: true,
        onBeforeOpen: () => {
          swal.showLoading();
        },
        onClose: () => {
          swal.fire({text:"Your seat for webinar is reserved. Our representative will get in touch with you shortly.", title:"Congrats", icon:"success"});
        }
      });
    }
    else{
      this.setState({joiningWebinar:w});
      window.dispatchEvent(new CustomEvent('askLogin', {}));
      window.addEventListener("userloggedin", this.userloginFn);
    }
  }
  userloginFn() {
    window.removeEventListener("userloggedin", this.userloginFn);
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

    const settingpioneer = JSON.parse(JSON.stringify(settings));
    settingpioneer.slidesToShow = 1;
    settingpioneer.autoplaySpeed = 5000;
    settingpioneer.responsive = [
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          centerPadding: '0',
          centerMode: false
        }
      }];
    // settingpioneer.centerMode=false;
    settingpioneer.dots = true;
    return (
      <div>
        <section className="journey-section">
          <div className="left">
            <h1>Empowering the future generations of data scientists</h1>
            <h3>Show your talent in data science and land your dream job</h3>
            <a href="#roadmap" onClick={(e) => {
              e.preventDefault();
              $([document.documentElement, document.body]).animate({
                scrollTop: $("#roadmap").offset().top
              }, 1500);
            }}>Begin your journey</a>
          </div>
          <div className="right">
            <img alt={"Begin your data science journey"} src="https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/robot.webp"/>
          </div>
        </section>
        <section className="library">
          <div>
            <div className="title-text"><strong>Did you know that you can get all this for FREE.... </strong> 
            {!this.props.user ? <button onClick={() => window.dispatchEvent(new CustomEvent('askLogin', {}))}>Enroll Now</button>:null}
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
        <section className="roadmap" id="roadmap">
          <p className="title"><span><strong>&nbsp;The proven roadmap to becoming a top data scientist...</strong></span></p>
          <div className="flow">
            <div className="circle">
              <div className="q quarter1" />
              <div className="cutout">
                <h4>UNDERSTAND</h4>
                <p> Attend webinars, read blogs, watch videos, practice daily</p>
              </div>
              <div className="ring" />
            </div>
            <div className="circle">
              <div className="q quarter1" />
              <div className="q quarter2" />
              <div className="cutout" >
                <h4>MASTER</h4>
                <p> Do trainings and professional courses and attain skillset to standout from others</p>
              </div>
              <div className="ring" />
            </div>
            <div className="circle">
              <div className="q quarter1" />
              <div className="q quarter2" />
              <div className="q quarter4" />
              <div className="cutout" >
                <h4>BUILD PROFILE</h4>
                <p> A profile that shows credibility and unique values to the companies</p>
              </div>
              <div className="ring" />
            </div>
            <div className="circle">
              <div className="q quarter1" />
              <div className="q quarter2" />
              <div className="q quarter3" />
              <div className="q quarter4" />
              <div className="cutout" >
                <h4>DEMONSTARTE</h4>
                <p> Your expertise to the right people and land the job that you deserve</p>
              </div>
              <div className="ring" />
            </div>
          </div>
          <p className="title">Get connected to the right job opportunities through our recruitment partnerships...</p>
        </section>
        <section className="webinars parallax">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-5 left" >
                <h3 className="title">LIVE WEBINARS ON DATA SCIENCE</h3>
                <p>Learn about the latest topics in data science and how to adapt to an ever-changing industry, navigate the trends to win those top jobs, and find the best opportunities.</p>
                <p>
                  Each live webinar discusses a topic that helps you to grow your data science career.
                </p>
                <p>Usually, including a Q&A session, in which you ask your questions and receive personalized advice directly from us, these webinars are an invaluable addition to your career journey. </p>
              </div>
              <div className="col-md-7 right">
                {webinars.map((w, i) => <div className="webinar" key={"webinar" + i}>
                  <h4>{w.topic}</h4>
                  <br />
                  <span>{w.date}</span>
                  <br />
                  <span className="free-txt">FREE!</span>
                  <br />
                  <br />
                  <button onClick={()=>this.joinWebinar(w)}>Join Webinar</button>
                </div>)}

              </div>
            </div>
          </div>
        </section>
        <section className="pioneers">
          <h1>Pioneers in AI</h1>
          <span className="section-separator" />
          <div className="list-carousel">
            <Slider {...settingpioneer} ref={c => (this.pioneerslider = c)}>
              {pioneers.map((c, i) => <div className="pioneer-wrapper" key={i}><div className="pioneer" key={"pioneer" + i}>
                <div className="pic-box">
                  <img src={"https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/pioneers/" + c.name.split(" ")[0].toLowerCase() + ".jpeg"} alt={c.name} />
                </div>
                <div className="content-box">
                  <h5>{c.name}</h5><br /> {c.about}</div></div></div>)}

            </Slider>
            {/* <div className="swiper-button-prev sw-btn" onClick={() => this.previous(this.pioneerslider)}><i className="fa fa-arrow-left" /></div>
            <div className="swiper-button-next sw-btn" onClick={() => this.next(this.pioneerslider)}><i className="fa fa-arrow-right" /></div> */}
          </div>

        </section>
        <section className="corporates">
          <h1>Join the network of our mentees who get hired at top companies...</h1>
          <span className="section-separator" />
          <div className="corporate-wrapper">
            {corporates.map(co => <div className="corporate" key={co}>
              <img src={co.image} alt={co.name}/>
            </div>
            )}
          </div>
        </section>
        <section className="demo-section parallax" id="demo-section" data-scrollax-parent="true">
          <div className="overlay" />
          <div className="container">
            <div className="section-title">
              <h2> Request a Free Demo</h2>
              {/* <span className="section-separator" /> */}
              <p>Meet the Expert Who Can Kickstart Your Career</p>
            </div>

            <form action={server + "/api/classes/contact"} onSubmit={(e) => {
              e.preventDefault();
              let z = {}; 
              $(document.getElementsByTagName("form")[0]).serializeArray().map(el => z[el.name] = el.value);
              document.getElementsByTagName("form")[0].reset();
              ClassApi.sendFeedback(z);
              swal.fire({
                title: 'Placing request for you...!',
                html: 'Please wait',
                timer: 5000,
                timerProgressBar: true,
                onBeforeOpen: () => {
                  swal.showLoading();
                },
                onClose: () => {
                  swal.fire({text:"Our representative will call you shortly.", title:"Request Received.", icon:"success"});
                }
              });
              
            }} method="POST" className="form_md">

              <div className="row m-t-5">
                <div className="col-md-5 text-left">
                  <label className="color-1 floating-label">Full Name *</label>
                  <input type="text" name="name" required className="color-1" />
                </div>
                <div className="col-md-1" />
                <div className="col-md-6 text-left">
                  <label className="color-1 floating-label">E-mail Address *</label>
                  <input type="email" name="email" required className="color-1" />
                </div>


              </div>

              <div className="row m-t-5">

                <div className="col-md-5 text-left">
                  <label className="color-1 floating-label">Course Name*</label>
                  <input type="text" name="course" required className="color-1" />
                </div>

                <div className="col-md-1" />
                <div className="col-md-2 col-xs-4 p-r-0 country_code text-left">
                  <select id="r_val" name="code" className="form-control color-1">
                    <option className="color-black" value="US" data-code="+1" data-text="United States">US</option>
                    <option className="color-black" value="IN" data-code="+91" data-text="India">India</option>
                    <option className="color-black" value="AU" data-code="+61" data-text="Australia">Australia</option>
                    
                    <option className="color-black" value="GB" data-code="+44" data-text="United Kingdom">United Kingdom</option>
                    <option className="color-black" value="CA" data-code="+1" data-text="Canada">Canada</option>
                    <option className="color-black" value="SA" data-code="+966" data-text="Saudi Arabia">Saudi Arabia</option>
                    <option className="color-black" value="AE" data-code="+971" data-text="United Arab Emirates">United Arab Emirates</option>
                    <option className="color-black" value="SG" data-code="+65" data-text="Singapore">Singapore</option>
                    <option className="color-black" value="CH" data-code="+41" data-text="Switzerland">Switzerland</option>
                    <option className="color-black" value="ZA" data-code="+27" data-text="South Africa">South Africa</option>
                    <option className="color-black" value="BR" data-code="+55" data-text="Brazil">Brazil</option>
                    <option className="color-black" value="RU" data-code="+7" data-text="Russia">Russia</option>
                    <option className="color-black" value="RO" data-code="+40" data-text="Romania">Romania</option>
                    <option className="color-black" value="JP" data-code="+81" data-text="Japan">Japan</option>
                    <option className="color-black" value="HK" data-code="+852" data-text="Hong Kong">Hong Kong</option>
                    <option className="color-black" value="PK" data-code="+92" data-text="Pakistan">Pakistan</option>
                    <option className="color-black" value="PH" data-code="+63" data-text="Philippines">Philippines</option>
                    <option className="color-black" value="PL" data-code="+48" data-text="Poland">Poland</option>
                    <option className="color-black" value="EG" data-code="+20" data-text="Egypt">Egypt</option>
                    <option className="color-black" value="IT" data-code="+39" data-text="Italy">Italy</option>
                    <option className="color-black" value="VN" data-code="+84" data-text="Vietnam">Vietnam</option>
                    <option className="color-black" value="ES" data-code="+34" data-text="Spain">Spain</option>
                    <option className="color-black" value="MY" data-code="+60" data-text="Malaysia">Malaysia</option>
                    <option className="color-black" value="MX" data-code="+52" data-text="Mexico">Mexico</option>
                    <option className="color-black" value="FR" data-code="+33" data-text="France">France</option>
                    <option className="color-black" value="NL" data-code="+31" data-text="Netherlands">Netherlands</option>
                    <option className="color-black" value="NO" data-code="+47" data-text="Norway">Norway</option>
                    <option className="color-black" value="CN" data-code="+86" data-text="China">China</option>
                    <option className="color-black" value="CR" data-code="+506" data-text="Costa Rica">Costa Rica</option>
                    <option className="color-black" value="SE" data-code="+46" data-text="Sweden">Sweden</option>
                    <option className="color-black" value="DE" data-code="+49" data-text="Germany">Germany</option>
                    <option className="color-black" value="IE" data-code="+353" data-text="Ireland">Ireland</option>
                    <option className="color-black" value="ID" data-code="+62" data-text="Indonesia">Indonesia</option>
                    <option className="color-black" value="UA" data-code="+380" data-text="Ukraine">Ukraine</option>
                    <option className="color-black" value="QA" data-code="+974" data-text="Qatar">Qatar</option>
                  </select>
                </div>

                <div className="col-md-4 col-xs-8 p-l-0 text-left">
                  <label className="p-l-4 floating-label">Phone Number *</label>
                  <input type="tel" name="mobile" className="color-1" onKeyPress="return isNumberKey(event)" maxLength="15" required="" />
                </div>
              </div>

              <div className="row m-t-10">
                <div className="col-md-12 text-left">
                  <label className="color-1 floating-label">Message</label>
                  <textarea rows="4" maxLength="200" className="color-1" name="message" />
                </div>
              </div>
              <input type="hidden" name="type" value="DEMO_REQUEST" />
              <button type="submit" className="btn bg-red " id="submit_form">Send Message</button>
            </form>
          </div>

        </section>
        {/* <section className="user-reviews" >
          <div className="user-reviews col-md-9">
            <Slider {...settings} ref={c => (this.slider = c)}>
              {pioneers.map((c, i) => <div className="course-wrapper"><div className="course" key={"course" + i}><h5>{c.name}</h5><br /> {c.about}</div></div>)}
            </Slider>
          </div>
          <div className="col-md-3 social-reviews">
            <div>
              <i className="fa fa-google google-review" />
              <div className="ratings">
                <span>4.1</span>
                <span className="stars" data-rating="4.1" data-num-stars="5"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-half-empty" /></span>
              </div>
            </div>
            <div>
              <i className="fa fa-google google-review" />
              <div className="ratings">
                <span>4.1</span>
                <span className="stars" data-rating="4.1" data-num-stars="5"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-half-empty" /></span>
              </div>
            </div>
            <div>
              <i className="fa fa-google google-review" />
              <div className="ratings">
                <span>4.1</span>
                <span className="stars" data-rating="4.1" data-num-stars="5"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-half-empty" /></span>
              </div>
            </div>
          </div>

        </section>
        <section>
          <h4>Get your first gift</h4>
        </section>
      */}
      </div>);
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state.ajaxCallsInProgress);
  return {
    name: state.classes.userName,
    user:state.session.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
