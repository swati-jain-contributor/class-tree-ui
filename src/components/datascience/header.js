import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import SessionApi from '../../api/sessionApi';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../../actions/sessionActions';

const hideMenu =()=>{
  let clickover = $(event.target);
  let _opened = $(".navbar-collapse").hasClass("show");
  if (_opened === true && !clickover.hasClass("navbar-toggle")) {
      $("button.navbar-toggle").click();
  }
};
class Header extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.logout = this.logout.bind(this);
    this.state={};
    this.redirect = this.redirect.bind(this);
  }
  componentDidMount() {
    this.getUserDetails();
    document.addEventListener("click", hideMenu);
    document.addEventListener("scroll", hideMenu);
  }
  componentWillUnmount(){
    document.removeEventListener("click", hideMenu);
    document.removeEventListener("scroll", hideMenu);
  }
  redirect(e){
      e.preventDefault(); 
      this.context.router.push(e.target.href); 
      window.scrollTo(0, 0); 
  }
  logout() {
    SessionApi.logout().then((res)=>{
      sessionStorage.user = undefined;
      this.setState({ user: undefined });
      this.props.actions.addUserDetails(null);
      location.reload();
    });
  }  
  getUserDetails() {
    SessionApi.getUserData().then((res)=>{
      if (res.status == "SUCCESS") {
        if (res.response.email) {
          sessionStorage.user = JSON.stringify(res.response);
          this.setState({ user: res.response });
          this.props.actions.addUserDetails(res.response);
        }
        else {
          sessionStorage.sessionid = res.response;
          this.setState({ sessionid: res.response });
        }
      }
    });
  }
  render() {
    let user = this.props.user;
    return (
      <header className="header">
        <nav id="" className="navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Menu</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="btn bg-red color-1 free-trail" href="/demo" id="form_button">Try Live Demo</a>
              <a className="navbar-brand" href="/">
                DataScience@<span>BakeMinds</span>
              </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav f-s-11">
                <li><a href="/" onClick={this.redirect}>Home</a></li>
                <li><a href="/courses" onClick={this.redirect}>Courses</a></li>
                <li><a href="/books" onClick={this.redirect}>Books</a></li>
                <li><a href="/blogs" onClick={this.redirect}>Blogs</a></li>
                <li><a href="/videos" onClick={this.redirect}>Videos</a></li>
                {/* <li><a href="/corporate-training">Employers</a></li> */}
                <li>
                  <a className="btn bg-red color-1" id="form_button" 
                  href="/demo" 
                //   onClick={(e)=>{
                //     e.preventDefault();
                //     $([document.documentElement, document.body]).animate({
                //       scrollTop: $("#demo-section").offset().top
                //     }, 1500);
                // }}
                >Try Live Demo</a>
                </li>
                {user ? <li>
                  <div className="dropdown">
                    <a type="button" className="dropdown-toggle" data-toggle="dropdown">
                      {user.firstname}&nbsp; {user.lastname}
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" onClick={this.logout}>Logout</a>
                    </div>
                  </div>

                </li> :
                  <li onClick={() => window.dispatchEvent(new CustomEvent('askLogin', {}))}><a>Sign in</a></li>}
              </ul>
            </div>
          </div>

        </nav>

      </header>
    );
  }
}
function mapStateToProps(state, ownProps) {
  console.log(state.ajaxCallsInProgress);
  return {
    name: state.classes.userName,
    user:state.session.user
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

