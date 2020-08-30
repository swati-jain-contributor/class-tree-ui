import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import SessionApi from '../../api/sessionApi';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../../actions/sessionActions';

class Header extends React.Component {
  constructor(context) {
    super(context);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  logout() {
    SessionApi.logout().then((res) => {
      sessionStorage.user = undefined;
      this.setState({ user: undefined });
      this.props.actions.addUserDetails(null);
      location.reload();
    });
  }
  render() {
    let titleCase = (str) => {
      str = str.toLowerCase().split(' ');
      for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
      return str.join(' ');
    };
    let path = location.pathname.replace(/\//g, '');
    let firstname = this.props.user ? this.props.user.firstname : null;
    let name = ((firstname && firstname.length > 10) ? firstname.substring(0, 10) : firstname);
    return (
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container">
          <div className="header-container d-flex align-items-center">
            <div className="logo">
              <h1 className="text-light"><a onClick={() => this.context.router.push('/')}><span>BakeMinds</span></a></h1>
            </div>
            <span className="name">{(this.props.user) ? ('Hey ' + titleCase(name) + '!') : ''}</span>
            <nav className="nav-menu d-none d-lg-block">
              {this.props.isHome ?
                <ul>
                  <li className="active"><a href="#header">Home</a></li>
                  <li><a href="#why-us">About</a></li>
                  <li><a href="#testimonials">Our Stories</a></li>
                  <li><a href="#team">Team</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li className="get-started">
                    {this.props.user ?
                      <a onClick={() => this.context.router.push('/student')}> Get Started</a> :
                      < a href="/student?login=true"> Login / Signup</a>
                    }
                  </li>
                </ul> :
                <ul>
                  <li className={path == "about" ? "active" : ""}><a onClick={() => this.context.router.push('/about')}>Who we are</a></li>
                  <li className={path == "registered" ? "active" : ""}><a onClick={() => this.context.router.push('/registered')}>Registered classes</a></li>
                  <li className={path == "tutor" ? "active" : ""}><a onClick={() => this.context.router.push('/tutor')}>Offered classes</a></li>
                  <li className={path == "student" ? "active" : ""}><a onClick={() => this.context.router.push('/student')}>Let's learn</a></li>
                  <li className={path == "contact" ? "active" : ""}><a onClick={() => this.context.router.push('/contact')}>Contact</a></li>
                  <li >
                    {!this.props.user ? <a onClick={() => window.dispatchEvent(new CustomEvent('askLogin', {}))}>Sign In</a> :
                      <a onClick={this.logout}>Logout</a>}
                  </li>
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
    name: state.classes.userName,
    user: state.session.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
Header.contextTypes = {
  router: PropTypes.func.isRequired
};

