import React from 'react';
import '../../Bethany/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../Bethany/assets/vendor/boxicons/css/boxicons.min.css';
import '../../Bethany/assets/vendor/venobox/venobox.css';
import '../../Bethany/assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../../Bethany/assets/vendor/aos/aos.css';
import '../../Bethany/assets/css/style.css';


class WhyTeach extends React.Component {
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
      <section id="about" className="about">
            <div className="container">

              <div className="row content">
                <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                  <h2>deliver online learning</h2>
                  <h3>All you need is to do is to make few clicks. Students are waiting inside for your learnings</h3>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay="200">
                  <p>
                    Teaching is a great job and when ClassTree jumps in, It changes the game. Here is how.
            </p>
                  <ul>
                    <li><i className="ri-check-double-line"></i> No Download ,  No install. Just CLick</li>
                    <li><i className="ri-check-double-line"></i> Safe and interactive live class platform</li>
                    <li><i className="ri-check-double-line"></i> Enhance your knowledge daily</li>
                    <li><i className="ri-check-double-line"></i> Expand your reach from neighbour next doors to people all around the world</li>
                    <li><i className="ri-check-double-line"></i> Unconditional meaningful relationships</li>
                  </ul>
                  {/* <!--  <p class="font-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua.
            </p> --> */}
                </div>
              </div>

            </div>
          </section>
      );
  }
}

export default WhyTeach;
