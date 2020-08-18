import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as classActions from '../../actions/classActions';

import Card from '../Card/Card';


class Tutor extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      classes: [],
    };
    this.addClass = this.addClass.bind(this);
    this.getClasses = this.getClasses.bind(this);
    this.requestLogin = this.requestLogin.bind(this);
    this.classadded = this.classadded.bind(this);
    this.userloginFn = this.userloginFn.bind(this);

  }
  componentDidMount() {
    if (this.props.user) {
      this.props.actions.getClasses({
        email: this.props.user.email,
        type: 'T'
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    let classesNP = nextProps.classes;
    if (!classesNP)
      classesNP = [];
    if (nextProps.search || nextProps.category != "All") {
      let classes = classesNP;
      if (nextProps.search)
        classes = classesNP.filter(cl =>
          this.checkParam(cl, 'Topic', nextProps.search) || this.checkParam(cl, 'Description', nextProps.search) || this.checkParam(cl, 'TutorName', nextProps.search));
      if (nextProps.category && nextProps.category != 'All')
        classes = classes.filter(cl => cl.category == nextProps.category);
      this.setState({ classes });
    }
    else
      this.setState({ classes: classesNP });
    if (!this.props.user && nextProps.user)
      this.props.actions.getClasses({
        email: nextProps.user.email,
        type: "T"
      });
  }
  checkParam(cl, field, search) {
    return cl[field] && cl[field].toLowerCase().indexOf(search.toLowerCase()) > -1;
  }

  getClasses() {
    this.props.actions.getClasses({
      email: this.props.user.email,
      type: "T"
    });
  }
  requestLogin() {
    window.dispatchEvent(new CustomEvent('askLogin', {}));
    window.addEventListener("userloggedin", this.userloginFn);
  }
  classadded() {
    window.removeEventListener("classadded", this.classadded);
    this.getClasses();
  }
  addClass() {
    window.dispatchEvent(new CustomEvent('addClass', {}));
    window.addEventListener("classadded", this.classadded);
  }
  userloginFn() {
    window.removeEventListener("userloggedin", this.userloginFn);
    this.props.actions.getClasses({
      email: this.props.user.email,
      type: "T"
    });
  }
  render() {
    let banner = (<div> <div className="banner"><span>A <b>Teacher</b> plants a seed of knowledge to produce <b>Tomorrow's Dreams</b></span></div>
      <div className="thank-note"><span>We appreciate efforts you are making to make people learn.. &nbsp;&nbsp;   <i className="fa fa-thumbs-up" aria-hidden="true" /></span></div></div>);
    return (
      <div className="col-block  view-holder">
        {(!this.props.user) ?
          <div>
            {banner}
            <br />
            <br />

            <span>Please login / Signup, so we can get your details</span>
            <br />
            <button className="submit-btn secondary" onClick={this.requestLogin} >Login / Signup</button>
          </div> :
          <div>
            {(this.state.classes.length == 0) ?
              <div>
                {this.props.classes.length == 0 ?
                  <span>
                    You have not added a class yet.
                <br />
                    Make your first contribution now.
              </span> :
                  <span>
                    No added classes are found.
              <br />
                    Change your search criteria or add a class now.
            </span>
                }
                <br />
                <br />
                <button className="submit-btn" onClick={this.addClass}>Tute a Class</button>
              </div> :
              <div>
                <button className="add-class-btn" onClick={this.addClass}><span>{window.innerWidth > 900 ? 'Tute a Class' : 'Tute a class'}</span></button>
                <div className="content-box">
                  {this.state.classes.map((cl, i) => <Card type="T" key={i} class={cl} bookClass={this.bookClass} />)}
                </div>
              </div>}
          </div>}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

  return {
    classes: state.classes.offeredClasses,
    user: state.session.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(classActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tutor);
