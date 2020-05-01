import React from 'react';
import MyTeams from '../home/MyTeams';
import WhyTeach from '../home/WhyTeach';
import Counts from '../home/Counts';
import Testimonials from '../home/Testimonials';
import WhyUs from '../home/WhyUs';
import Clients from '../home/Clients';

class About extends React.Component {
  componentDidMount() {
    setTimeout(() => window.loadCarousel(), 1000);
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  render() {
    return (
      <div>
        <WhyUs/>
        <Clients/>
        <Counts/>
        <WhyTeach/>
        <MyTeams/>
        <Testimonials/>
        </div>
        );
      }
    }
    
    export default About;
