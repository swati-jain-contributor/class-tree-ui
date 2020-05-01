import PropTypes from 'prop-types';
import React from 'react';
import '../../Bethany/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../Bethany/assets/vendor/boxicons/css/boxicons.min.css';
import '../../Bethany/assets/vendor/venobox/venobox.css';
import '../../Bethany/assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../../Bethany/assets/vendor/aos/aos.css';
import '../../Bethany/assets/css/style.css';
import { connect } from 'react-redux';

class Header extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  render() {
    let titleCase = (str) => {
      str = str.toLowerCase().split(' ');
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
      return str.join(' ');
    };
    let path = location.pathname.replace(/\//g, '');
    let firstName = this.props.name ? this.props.name.split(" ")[0] : "";
    let name = ((firstName && firstName.length > 10) ? firstName.substring(0, 10) : firstName);
    return (
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container">
          <div className="header-container d-flex align-items-center">
            <div className="logo">
              <h1 className="text-light"><a onClick={() => this.context.router.push('/')}><span>ClassTree</span></a></h1>
            </div>
            <span className="name">{this.props.name ? ('Hey ' + titleCase(name) + '!') : ''}</span>
            <nav className="nav-menu d-none d-lg-block">
              {this.props.isHome ?
                <ul>
                  <li className="active"><a href="#header">Home</a></li>
                  <li><a href="#why-us">About</a></li>
                  <li><a href="#testimonials">Our Stories</a></li>
                  <li><a href="#team">Team</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li className="get-started">
                    {this.props.name ?
                      <a onClick={() => this.context.router.push('/student')}> Get Started</a> :
                      < a href="/student?login=true"> Login / Signup</a>
                    }
                  </li>
                </ul> :
                <ul>
                  <li className={path == "about" ? "active" : ""}><a onClick={() => this.context.router.push('/about')}>Who we are</a></li>
                  <li className={path == "registered" ? "active" : ""}><a onClick={() => this.context.router.push('/registered')}>My registered classes</a></li>
                  <li className={path == "tutor" ? "active" : ""}><a onClick={() => this.context.router.push('/tutor')}>My offered classes</a></li>
                  <li className={path == "student" ? "active" : ""}><a onClick={() => this.context.router.push('/student')}>Let's learn</a></li>
                  <li className={path == "contact" ? "active" : ""}><a onClick={() => this.context.router.push('/contact')}>Contact</a></li>
                </ul>
              }

            </nav>

            {/* <!--  .nav-menu --> */}
          </div>{/* <!--  End Header Container --> */}
        </div>
      </header >

    );
  }
}
function mapStateToProps(state, ownProps) {
  console.log(state.ajaxCallsInProgress);
  return {
    name: state.classes.userName
  };
}
function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
Header.contextTypes = {
  router: PropTypes.func.isRequired
};

