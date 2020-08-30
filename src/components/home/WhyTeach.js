import React from 'react';

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
                    Teaching is a great job and when BakeMinds jumps in, It changes the game. Here is how.
            </p>
                  <ul>
                    <li><i className="ri-check-double-line" /> No Download ,  No install. Just CLick</li>
                    <li><i className="ri-check-double-line" /> Safe and interactive live class platform</li>
                    <li><i className="ri-check-double-line" /> Enhance your knowledge daily</li>
                    <li><i className="ri-check-double-line" /> Expand your reach from neighbour next doors to people all around the world</li>
                    <li><i className="ri-check-double-line" /> Unconditional meaningful relationships</li>
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
