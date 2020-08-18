import React from 'react';
import '../../Bethany/assets/vendor/bootstrap/css/bootstrap.min.css';
// import '../../Bethany/assets/vendor/boxicons/css/boxicons.min.css';
import '../../Bethany/assets/vendor/venobox/venobox.css';
import '../../Bethany/assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../../Bethany/assets/vendor/aos/aos.css';
import '../../Bethany/assets/css/style.css';
import swati from '../../Bethany/assets/img/team/team-4.jpg';
import sweety from "../../Bethany/assets/img/team/team-2.jpg";

class MyTeams extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  render() {
    return (
      <section id="team" className="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-title" data-aos="fade-right">
                <h2>Meet the Team</h2>
                <p>Meet our team of digital warriors, ready to harness the Force for good.</p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">

                <div className="col-lg-6">
                  <div className="member" data-aos="zoom-in" data-aos-delay="100">
                    <div className="pic"><img src={swati} className="img-fluid" alt={"Chief Technical Officer"} /></div>
                    <div className="member-info">
                      <h4>Swati Jain</h4>
                      <span>Chief Technical Officer</span>
                      <p>Believes in nothing less than excellent</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mt-4 mt-lg-0">
                  <div className="member" data-aos="zoom-in" data-aos-delay="200">
                    <div className="pic"><img src={sweety} className="img-fluid"  alt={"Chief Executive Officer"}  /></div>
                    <div className="member-info">
                      <h4>Sweety Jain</h4>
                      <span>Chief Executive Officer</span>
                      <p>Some wish it, some try it, she makes it</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default MyTeams;
