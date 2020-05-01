import React from 'react';
import { Link } from 'react-router';

import '../../Bethany/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../Bethany/assets/vendor/boxicons/css/boxicons.min.css';
import '../../Bethany/assets/vendor/venobox/venobox.css';
import '../../Bethany/assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../../Bethany/assets/vendor/aos/aos.css';
import '../../Bethany/assets/css/style.css';

import Student from '../../components/Student/Student';
import Contact from '../contact/Contact';
import MyTeams from './MyTeams';
import Testimonials from './Testimonials';
import WhyUs from './WhyUs';
import Counts from './Counts';
import WhyTeach from './WhyTeach';
import Clients from './Clients';
import Header from './Header';

class HomePage extends React.Component {
  componentDidMount() {
    setTimeout(() => window.loadCarousel(), 1000);
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }

  constructor() {
    super();
  }
  render() {
    return (
      <div>
        {/* <!--  ======= Header ======= --> */}
        <Header isHome="true"/>
        {/* <!--  ======= Hero Section ======= --> */}
        <section id="hero" className="d-flex align-items-center">
          <div className="container text-center position-relative" data-aos="fade-in" data-aos-delay="200">
            <h1>Your learning won't stop</h1>
            <h2>We are team of talented students and tutors who believe in learning every now and then</h2>
            {/* <a href="#cta" className="btn-get-started scrollto">Get Started</a> */}
            
            <div className="header-action">
            <div className="text-center" data-aos="zoom-in">
                <h3>Book A Class</h3>
                <p> Take first step to your learnings by clicking here.</p>
                <a className="cta-btn" href="/student">Book A Class</a>
              </div>

              <div className="text-center" data-aos="zoom-in">
                <h3>Tute A Class</h3>
                <p> Take first step towards sharing your learnings by clicking here.</p>
                <a className="cta-btn" href="/tutor">Tute A Class</a>
              </div>
            </div>
            
            {/* <a href="/student" className="btn-get-started scrollto">Book a class</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/tutor" className="btn-get-started scrollto">Tute a class</a> */}
          </div>
        </section>{/* <!--  End Hero --> */}

        <main id="main">
          
          <section id="portfolio" className="portfolio">
            <div className="container">

              <div className="section-title" data-aos="fade-left">
                <h2>Feature Listing</h2>
                <p>Knowledge is waiting for you to come and learn</p>
              </div>
              <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                <Student max="6" />
              </div>
            </div>
          </section>
          <Counts />
          
          <WhyUs />
          <Clients />
          
          <WhyTeach />
          <section id="cta" className="cta">
            <div className="container cta-section">

              <div className="text-center" data-aos="zoom-in">
                <h3>Book A Class</h3>
                <p> Take first step to your learnings by clicking here.</p>
                <a className="cta-btn" href="/student">Book A Class</a>
              </div>

              <div className="text-center" data-aos="zoom-in">
                <h3>Tute A Class</h3>
                <p> Take first step towards sharing your learnings by clicking here.</p>
                <a className="cta-btn" href="/tutor">Tute A Class</a>
              </div>

            </div>
          </section>{/* <!--  End Cta Section --> */}
          

          <Testimonials />
          <MyTeams />
          <Contact />
        </main>

        <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
      </div>
    );
  }
}

export default HomePage;
