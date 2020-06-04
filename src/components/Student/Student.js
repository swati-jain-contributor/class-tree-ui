import PropTypes from 'prop-types';
import React from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as classActions from '../../actions/classActions';

import Card from '../Card/Card';
import clap from '../../images/clap.gif';

class Student extends React.Component {

  componentWillReceiveProps(nextProps) {

    let classesNP = nextProps.classes;
    if (!classesNP)
      classesNP = [];
    if ((nextProps.search || nextProps.category != "All") && !this.props.max) {
      let classes = classesNP;
      if (nextProps.search)
        classes = classesNP.filter(cl =>
          this.checkParam(cl, 'Topic', nextProps.search) || this.checkParam(cl, 'Description', nextProps.search) || this.checkParam(cl, 'TutorName', nextProps.search));
      if (nextProps.category && nextProps.category != 'All')
        classes = classes.filter(cl => cl.category == nextProps.category);
      this.setState({ classes });
    }
    else {
      if (this.props.max && classesNP.length > this.props.max)
        this.setState({ classes: classesNP.slice(0, this.props.max) });
      else
        this.setState({ classes: classesNP });

    }
  }
  constructor(props, context) {
    super(props, context);
    this.state = {
      classData: {
        topic: "",
        description: ""
      },
      step: 0
    };
    this.closeClass = this.closeClass.bind(this);
    this.getClasses = this.getClasses.bind(this);
    this.bookClass = this.bookClass.bind(this);
    this.search = this.search.bind(this);
    this.addClass = this.addClass.bind(this);
    this.userloginFn = this.userloginFn.bind(this);
    this.classadded = this.classadded.bind(this);
  }


  getClasses() {
    this.props.actions.getClasses({
      email: this.props.email,
      type: 'C'
    });
  }
  componentDidMount() {
    // if (this.getQueryParams("login", location.href))
    //   this.setState({ popup: true, showEmail: true, showName: false, firstLoad: true });
    // else if (this.getQueryParams("thankyou", location.href)) {
    //   window.showThankyou();
    // }
    this.getClasses();
  }
  getQueryParams(params, url) {

    let href = url;
    //this expression is to get the query strings
    let reg = new RegExp('[?&]' + params + '=([^&#]*)', 'i');
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : null;
  }
  componentDidUpdate() {
    if (this.state.bookingClass && this.props.email && this.props.name) {
      this.bookClass(this.state.bookingClass);
      this.setState({ bookingClass: null });
    }
    if (this.getQueryParams("thankyou", location.href)) {
      window.showThankyou();
    }
  }
  checkParam(cl, field, search) {
    return cl[field] && cl[field].toLowerCase().indexOf(search.toLowerCase()) > -1;
  }
  search(event) {
    let search = event.target.value;
    this.setState({ search });
    if (event.target.value) {
      let classes = this.props.classes.filter(cl =>
        this.checkParam(cl, 'Topic') || this.checkParam(cl, 'Description') || this.checkParam(cl, 'TutorName'));
      this.setState({ classes });
    }
    else
      this.setState({ classes: this.props.classes });
  }

  bookClass(cl) {
    if (this.props.email && this.props.name) {
      this.props.actions.bookClass({
        "classId": cl.id,
        "email": this.props.email,
        "phoneNo": this.props.phoneNo,
        "rating": "5",
        "name": this.props.name
      });
      window.showSuccessToast("Congratulations! Class Registered successfully!");
    }
    else {
      this.setState({ bookingClass: cl });
      window.dispatchEvent(new CustomEvent('askLogin', {}));
      window.addEventListener("userloggedin", this.userloginFn);
    }
  }
  userloginFn() {
    window.removeEventListener("userloggedin", this.userloginFn);
  }
  classadded() {
    window.removeEventListener("classadded", this.classadded);
    this.getClasses();
  }
  closeClass() {
    this.props.cancel();
  }
  addClass() {
    window.dispatchEvent(new CustomEvent('addClass', {}));
    window.addEventListener("classadded", this.classadded);
  }
  render() {
    return (
      <div className={"col-block  view-holder " + (this.props.max ? "on-home" : "")}>
        {(!this.props.max) ?
          <button className="add-class-btn" onClick={this.addClass}><span>{window.innerWidth > 900 ? 'Tute Class' : 'Tute Class'}</span></button> : null}
        <div className="content-box clearfix">
          {this.state.classes ? this.state.classes.map((cl, i) => <Card type="C" key={i} class={cl} bookClass={this.bookClass} />) : null}
        </div>

        <div id="modal-thankyou" className="modal" role="dialog" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content thankyou-modal">
              Hey!!!
              <br />
              <br />
              You did a great job. We are happy to have you on our platform.
              <br />
              You are contributing a big piece towards nation by educating yourself and others.
              <img src={clap} className="clap" />
              <br />
              <div style={{ width: "80%" }}>
                Hope you had a great experience. Lets boost it more by sharing FEEDBACK.
              </div>
              <br />
              Many more classes are waiting for you.
              <div>
                <button type="button" className="btn btn-default" style={{ float: "left" }} onClick={() => this.context.router.push('/contact')} data-dismiss="modal">FEEDBACK</button>&nbsp;&nbsp;
                <button type="button" className="btn btn-default" onClick={() => this.context.router.push('/student')} data-dismiss="modal">OK</button>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

  return {
    classes: state.classes.AllClasses,
    email: state.classes.userEmail,
    name: state.classes.userName,
    phoneNo: state.classes.userPhone
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(classActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Student);
Student.contextTypes = {
  router: PropTypes.func.isRequired
};
