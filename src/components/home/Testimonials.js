import React from 'react';
import '../../Bethany/assets/vendor/bootstrap/css/bootstrap.min.css';
// import '../../Bethany/assets/vendor/boxicons/css/boxicons.min.css';
import '../../Bethany/assets/vendor/venobox/venobox.css';
import '../../Bethany/assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../../Bethany/assets/vendor/aos/aos.css';
import '../../Bethany/assets/css/style.css';
import t1 from "../../Bethany/assets/img/testimonials/testimonials-1.jpg";
import t2 from "../../Bethany/assets/img/testimonials/testimonials-2.jpg";
import t3 from "../../Bethany/assets/img/testimonials/testimonials-3.jpg";
import t4 from "../../Bethany/assets/img/testimonials/testimonials-4.jpg";
import t5 from "../../Bethany/assets/img/testimonials/testimonials-5.jpg";

class Testimonials extends React.Component {
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

      <section id="testimonials" className="testimonials section-bg">
        <div className="container">

          <div className="row">
            <div className="col-lg-4">
              <div className="section-title" data-aos="fade-right">
                <h2>Our Stories</h2>
                <p>You are the center of our universe. Our passion takes new heights when we listen these words from you. MORE THE MARRIER.</p>
              </div>
            </div>
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <div className="owl-carousel testimonials-carousel">

                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left fa fa-quote-left quote-icon-left" />
                    Through BakeMinds, I have met so many brilliant and interesting people whom I may not have otherwise met. I have also learned so much, and with the help of my wonderful Spanish teacher, I aim to become fluent by the end of the year! My brain and I are grateful for BakeMinds!.
       <i className="bx bxs-quote-alt-right fa fa-quote-right quote-icon-right" />
                  </p>
                  <img src={t1} className="testimonial-img" alt={"Saul"} />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                </div>

                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left fa fa-quote-left quote-icon-left" />
                    I have truly enjoyed my experience thus far with BakeMinds. Sessions can be easily booked through the website. I have met some incredible individuals through my learning experiences on BakeMinds and I hope more people join and add to the knowledge pool!
       <i className="bx bxs-quote-alt-right fa fa-quote-right quote-icon-right" />
                  </p>
                  <img src={t2} className="testimonial-img" alt={"Sara"} />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>

                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left fa fa-quote-left quote-icon-left" />
                    I have had an amazing experience with BakeMinds. The platform makes it easy to find and connect with students with minimal effort. I would highly recommend becoming a provider on BakeMinds!
       <i className="bx bxs-quote-alt-right fa fa-quote-right quote-icon-right" />
                  </p>
                  <img src={t3} className="testimonial-img" alt={"Jena"} />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                </div>

                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left fa fa-quote-left quote-icon-left" />
                    I am impressed with the high quality of students and tutors on BakeMinds. There is a market to be made here and kudos for being the first to create it. All the best!!
       <i className="bx bxs-quote-alt-right fa fa-quote-right quote-icon-right" />
                  </p>
                  <img src={t4} className="testimonial-img" alt={"Matt"} />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                </div>

                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left fa fa-quote-left quote-icon-left" />
                    As a fitness instructor I never thought I'd be able to work remotely, but BakeMinds has allowed me greater schedule flexibility, and access to a broad range of students!
       <i className="bx bxs-quote-alt-right fa fa-quote-right quote-icon-right" />
                  </p>
                  <img src={t5} className="testimonial-img" alt={"John"} />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Testimonials;


