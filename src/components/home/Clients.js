import React from 'react';
import '../../Bethany/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../Bethany/assets/vendor/boxicons/css/boxicons.min.css';
import '../../Bethany/assets/vendor/venobox/venobox.css';
import '../../Bethany/assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../../Bethany/assets/vendor/aos/aos.css';
import '../../Bethany/assets/css/style.css';


class Clients extends React.Component {
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
      <section id="clients" className="clients">
      <div className="container">

        <div className="row">

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center question" data-aos="zoom-in" data-aos-delay="100">

            <span className="title">Who</span>
            <br />
            <img src="https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/who.jpg" className="img-fluid" alt="" /> <b>Anyone, Everyone </b> Whether you've got years of expertise or a special nugget of knowledge to share
    </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center question" data-aos="zoom-in" data-aos-delay="200">
            <span className="title">What</span>
            <br />
            <img src="https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/what.jpg" className="img-fluid" alt="" /> <b>A Global Knowledge Marketplace</b> Share, learn & earn about anything -
            from the everyday to the extraordinary
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center question" data-aos="zoom-in" data-aos-delay="300">
            <span className="title">Where</span><br /><img src="https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/where.jpg" className="img-fluid" alt="" /><b>Any Connected Device</b> Whether you're on your sofa or on the go
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center question" data-aos="zoom-in" data-aos-delay="400">
            <span className="title">When</span> <br /><img src="https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/when.jpg" className="img-fluid" alt="" /><b>
              At Your Convenience</b> Choose from a world of providers at your schedule
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center question" data-aos="zoom-in" data-aos-delay="500">
            <span className="title">Why</span><br /><img src="https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/why.jpg" className="img-fluid" alt="" />
            <b>Unlock Human Knowledge</b> Earn or donate from live video lessons it's your call

          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center question" data-aos="zoom-in" data-aos-delay="600">
            <span className="title">How</span><br /><img src="https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/how.jpg" className="img-fluid" alt="" /><b>Via Live Video</b>Connecting people face-to-face with tools and support services

          </div>

        </div>

      </div>
    </section>
);
  }
}

export default Clients;
