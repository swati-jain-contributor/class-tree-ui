import React from 'react';


class Counts extends React.Component {
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
      <section id="counts" className="counts">
      <div className="container">

        <div className="row counters">

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">151,236</span>
            <p>Happy Students</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">5042</span>
            <p>Hours of Live Learning</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">514</span>
            <p>Cities Worldwide</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span>4.6/5</span>
            <p>Avg Teacher Rating</p>
          </div>

        </div>

      </div>
    </section>

      );
  }
}

export default Counts;
