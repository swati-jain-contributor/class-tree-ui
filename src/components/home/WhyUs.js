import React from 'react';
import '../../Bethany/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../Bethany/assets/vendor/boxicons/css/boxicons.min.css';
import '../../Bethany/assets/vendor/venobox/venobox.css';
import '../../Bethany/assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../../Bethany/assets/vendor/aos/aos.css';
import '../../Bethany/assets/css/style.css';


class WhyUs extends React.Component {
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
      <section id="why-us" className="why-us">
            <div className="container">

              <div className="row">
                <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-right">
                  <div className="content">
                    <h3>Why choose ClassTree for your learning?</h3>
                    <p>
                      ClassTree shatters current barriers for sharing and learning - connecting people of all ages, backgrounds, and locations through our knowledge platform.
              </p>
                    {/* <!--  <div class="text-center">
                                              <a href="#" class="more-btn">Learn More <i class="bx bx-chevron-right"></i></a>
                                            </div> --> */}
                  </div>
                </div>
                <div className="col-lg-8 d-flex align-items-stretch">
                  <div className="icon-boxes d-flex flex-column justify-content-center">
                    <div className="row">
                      <div className="col-xl-4 d-flex flex-column align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box  flex-column mt-4 mt-xl-0">
                          <i className="bx bx-receipt"></i>
                          <h4>Knowledge is wealth</h4>
                          <p>We  all are rich. Being a native speaker of Greek, playing a sweet tune on the harmonica, knowing depth of technknowledy is our wealth</p>
                        </div>
                      </div>
                      <div className="col-xl-4 d-flex flex-column align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box  flex-column mt-4 mt-xl-0">
                          <i className="bx bx-cube-alt"></i>
                          <h4>Enhance Skillset</h4>
                          <p>In today's global economy, the biggest need is to learn new things, enhance skill sets, and share this knowledge. </p>
                        </div>
                      </div>
                      <div className="col-xl-4 d-flex flex-column align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
                        <div className="icon-box  flex-column mt-4 mt-xl-0">
                          <i className="bx bx-images"></i>
                          <h4>Meaningful Relations</h4>
                          <p>We are student of life. Feel excited to meet new people and learn new things. Make relations with people all around the world</p>
                        </div>
                      </div>
                    </div>
                  </div>{/* <!--  End .content--> */}
                </div>
              </div>

            </div>
          </section>
      );
  }
}

export default WhyUs;