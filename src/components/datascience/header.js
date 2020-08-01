import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  componentDidMount() {

  }
  render() {

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
              <a className="btn bg-red color-1 free-trail" href="#parallax-section" id="form_button">Try Live Demo</a>
              <a className="navbar-brand" href="https://mindmajix.com/">
                Data Science World by BakeMinds
                {/* <img src="https://cdn.mindmajix.com/asset/images/logo.png" alt="logo" className="img-responsive logo" /> */}
              </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav f-s-11">
                <li><a href="/">Home</a></li>
                <li><a href="/courses">Courses</a></li>
                <li><a href="/books">Books</a></li>
                <li><a href="/blogs">Blogs</a></li>
                <li><a href="/videos">Videos</a></li>
                <li><a href="/corporate-training">Employers</a></li>
                
                <li>
                  <a className="btn bg-red color-1" href="#parallax-section" id="form_button">Try Live Demo</a>
                </li>


                <li><a href="/login"><i className="fal fa-user" /></a></li>
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

