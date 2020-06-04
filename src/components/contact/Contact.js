import React from 'react';
import '../../Bethany/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../Bethany/assets/vendor/icofont/icofont.min.css';
import '../../Bethany/assets/vendor/boxicons/css/boxicons.min.css';
// import '../../Bethany/assets/vendor/remixicon/remixicon.css';
import '../../Bethany/assets/vendor/venobox/venobox.css';
import '../../Bethany/assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../../Bethany/assets/vendor/aos/aos.css';
import '../../Bethany/assets/css/style.css';


class Contact extends React.Component {
  componentDidMount(){
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  render() {
    return (
      <section id="contact" className="container contact">
        <br/>
        <br/>
           <div className="container">
              <div className="row">
                <div className="col-lg-4" data-aos="fade-right">
                  <div className="section-title">
                    <h2>Contact</h2>
                    <p><b style={{color:'#009970', display:'block'}}>Dont be Stranger, Just say Hello</b><br />Feel free to get in touch with us. We are always open to discussing new projects, creative ideas or opportunities to be part of your vision. If nothing specific, then we can discuss some receipe as well.</p>
                  </div>
                </div>

                <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
                  <div className="info mt-4">
                    <i className=" fa fa-map-marker" />
                    <h4>Location:</h4>
                    <p> A109, Begumpet, Telangana , IN 500016</p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mt-4">
                      <div className="info">
                        <i className="fa fa-envelope" />
                        <h4>Email:</h4>
                        <p>classtreecare@gmail.com</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="info w-100 mt-4">
                        <i className="fa fa-phone fa-rotate-90" />
                        <h4>Call / Whatsapp:</h4>
                        <p>+91 88860 80289</p>
                      </div>
                    </div>
                  </div>

                  <form action="https://api.classtree.in/api/classes/contact" method="post" role="form" className="php-email-form mt-4">
                    <div className="form-row">
                      <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate" />
                      </div>
                      <div className="col-md-6 form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                        <div className="validate" />
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                      <div className="validate" />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message" />
                      <div className="validate" />
                    </div>
                    <div className="mb-3">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                  </form>
                </div>
              </div>

            </div>
         
      </section>
      );
  }
}

export default Contact;
