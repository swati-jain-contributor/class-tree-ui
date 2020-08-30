import React from 'react';



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
            <img src="https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/who.jpg" className="img-fluid" alt="Who Should join bakeminds" /> <b>Anyone, Everyone </b> Whether you've got years of expertise or a special nugget of knowledge to share
    </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center question" data-aos="zoom-in" data-aos-delay="200">
            <span className="title">What</span>
            <br />
            <img src="https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/what.jpg" className="img-fluid" alt="What you will find in bakeminds" /> <b>A Global Knowledge Marketplace</b> Share, learn & earn about anything -
            from the everyday to the extraordinary
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center question" data-aos="zoom-in" data-aos-delay="300">
            <span className="title">Where</span><br /><img src="https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/where.jpg" className="img-fluid" alt="Where you can find bakeminds" /><b>Any Connected Device</b> Whether you're on your sofa or on the go
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center question" data-aos="zoom-in" data-aos-delay="400">
            <span className="title">When</span> <br /><img src="https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/when.jpg" className="img-fluid" alt="When you can contact bakeminds" /><b>
              At Your Convenience</b> Choose from a world of providers at your schedule
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center question" data-aos="zoom-in" data-aos-delay="500">
            <span className="title">Why</span><br /><img src="https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/why.jpg" className="img-fluid" alt="Why you should join bakeminds" />
            <b>Unlock Human Knowledge</b> Earn or donate from live video lessons it's your call

          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center question" data-aos="zoom-in" data-aos-delay="600">
            <span className="title">How</span><br /><img src="https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/how.jpg" className="img-fluid" alt="How to join bakeminds" /><b>Via Live Video</b>Connecting people face-to-face with tools and support services

          </div>

        </div>

      </div>
    </section>
);
  }
}

export default Clients;
