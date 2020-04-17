// This component handles the App template used on every page.
import React, { PropTypes } from 'react';
import Header from './common/Header';
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
import { Route, IndexRoute, Switch } from 'react-router';


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
    switch (path) {

      case 'student': child = <Student search={this.state.search} />; break;
      case 'tutor': child = <Tutor search={this.state.search} />; break;
      case 'registered': child = <Registered search={this.state.search} />; break;
      case 'about': child = <About search={this.state.search} />; break;
      case 'contact': child = <Contact search={this.state.search} />; break;
      default: child = <Student search={this.state.search} />; break;
    }

    let isMobile = window.innerWidth < 700;
    let iconBox = (<div className="icon-box">
      <i role="button" aria-controls="search" className="fa fa-search" aria-hidden="true" data-toggle="collapse" href="#search" aria-expanded="false"  ></i>
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
        <ul className="menubar">
          <li style={{width:'500px'}}><input className="big-input search-box" placeholder="I'd like to learn about.." type="text" name="search" value={this.state.search} onChange={(evt) => this.setState({ search: evt.target.value })} /></li>
          <li className={path == "about" ? "active" : ""} onClick={() => this.context.router.push('/about')}>Who we are</li>
          <li className={path == "registered" ? "active" : ""} onClick={() => this.context.router.push('/registered')}>My registered classes</li>
          <li className={path == "tutor" ? "active" : ""} onClick={() => this.context.router.push('/tutor')}>My offered classes</li>
          <li className={path == "student" ? "active" : ""} onClick={() => this.context.router.push('/student')}>Learn more</li>
          <li className={path == "contact" ? "active" : ""} onClick={() => this.context.router.push('/contact')}>Contact us</li>
        </ul>
    );
    return (
      <div className="ss-root">

        <b className="morning">Good morning</b><br />
        <span className="heading-helper">What are you learning today?</span>

        {isMobile ? iconBox : menubar}

        <div id="search" className={"collapse "+ (isMobile ? "show":"")}>
          <input className="big-input search-box" placeholder="I'd like to learn about.." type="text" name="search" value={this.state.search} onChange={(evt) => this.setState({ search: evt.target.value })} />
        </div>
        {child}
      </div >

    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};
App.contextTypes = {
  router: React.PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log(state.ajaxCallsInProgress);
  return {
    loading: state.ajaxCallsInProgress > 0
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
