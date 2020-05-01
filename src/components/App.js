// This component handles the App template used on every page.
import PropTypes from 'prop-types';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as loginActions from '../actions/loginActions';
import Snackbar from 'material-ui/Snackbar';
import Tutor from '../components/Tutor/Tutor';
import About from '../components/about/About';
import Student from '../components/Student/Student';
import Contact from '../components/contact/Contact';
import Registered from '../components/Registered/Registered';
import VideoClass from '../components/VideoClass/VideoClass';
import Header from './home/Header';
import HomePage from './home/HomePage';
import { Route, IndexRoute, Switch } from 'react-router';
<ul>
  <li className="active"><a href="#header">Home</a></li>
  <li><a href="#why-us">About</a></li>
  <li><a href="#testimonials">Our Stories</a></li>
  <li><a href="#team">Team</a></li>
  <li><a href="#contact">Contact</a></li>
  <li className="get-started"><a href="/student">Get Started</a></li>
</ul>;


class App extends React.Component {
  constructor(context) {
    super(context);
    this.state = {
      step: 0,
      imageCode: Math.floor(Math.random() * 9) + 1
    };
  }
  render() {
    let path = location.pathname.replace(/\//g, '');
    let child;
    let isMobile = window.innerWidth < 700;
    switch (path) {

      case 'student': child = <Student search={this.state.search} />; break;
      case 'tutor': child = <Tutor search={this.state.search} />; break;
      case 'registered': child = <Registered search={this.state.search} />; break;
      case 'about': child = <About search={this.state.search} />; break;
      case 'contact': child = <Contact search={this.state.search} />; break;
      case 'joinclass': child = <VideoClass />; break;
      default:
        child = isMobile ? <Student search={this.state.search} /> : <HomePage />;
        // child = <Student search={this.state.search} />; 
        break;
    }


    let iconBox = (<div className="icon-box">
      {/* <i role="button" aria-controls="search" className="fa fa-search" aria-hidden="true" data-toggle="collapse" href="#search" aria-expanded="false"  ></i> */}
      <div className="dropdown">
        <i className="fa fa-bars" aria-hidden="true" id="menudropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></i>
        <ul className="dropdown-menu dropdown-menu-right">
          <li className="dropdown-item" onClick={() => this.context.router.push('/about')}>Who we are</li>
          <li className="dropdown-item" onClick={() => this.context.router.push('/registered')}>My registered classes</li>
          <li className="dropdown-item" onClick={() => this.context.router.push('/tutor')}>My offered classes</li>
          <li className="dropdown-item" onClick={() => this.context.router.push('/student')}>Learn more</li>
          <li className="dropdown-item" onClick={() => this.context.router.push('/contact')}>Contact us</li>
        </ul>
      </div>
    </div>);
    let menubar = (
      <div>
        <Header />
      </div>
    );

    let today = new Date();
    let curHr = today.getHours();

    let wish;
    if (curHr < 12) {
      wish = 'Good morning';
    } else if (curHr < 18) {
      wish = 'Good afternoon';
    } else {
      wish = 'Good evening';
    }
    return (
      path != "joinclass"? 
      <div className="ss-root" style={{ padding: (isMobile) ? '20px' : "0" }}>
        {(isMobile) ?
          <span>
            <b className="morning">{wish} {this.props.name}</b><br />
            <span className="heading-helper">What are you learning today?</span></span> : null}

        {isMobile ? iconBox : (path.length > 3 ? menubar : "")}

        <div id="search" className={"collapse " + (((path != 'about' && path != 'contact' && path) || (!path && isMobile)) ? "show" : "")}>
          <i className="fa fa-search" />
          <input className="big-input search-box" placeholder="What's your learning dose today.." type="text" name="search" value={this.state.search} onChange={(evt) => this.setState({ search: evt.target.value })} >
          </input>
        </div>
        {child}
      </div >
        : child
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};
App.contextTypes = {
  router: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log(state.ajaxCallsInProgress);
  return {
    loading: state.ajaxCallsInProgress > 0,
    name: state.classes.userName
    // isAuthenticated: state.session.authenticationStatus,
    // username: state.session.aptId + "-" + state.session.userId,
    // errorMsg: state.session.errorMsg,
    // open: state.session.open
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
