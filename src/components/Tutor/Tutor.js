import PropTypes from 'prop-types';
import React from 'react';
// import { ReactDOM , render} from 'react-dom';
// import { Holdable } from 'react-touch';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as classActions from '../../actions/classActions';
import ValidationService from '../common/Validation';
import LoginEmail from '../LoginEmail/LoginEmail';
import LoginName from '../LoginName/LoginName';
import AddClass from './AddClass';
import Card from '../Card/Card';

let initialClass = {
  startTime: "05:00 PM",
  maxStudents: 40,
  date: "",
  description: "",
  topic: "",
  name: "",
  phoneNo: "",
  email: ""

};

class Tutor extends React.Component {

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
    if ((nextProps.email && nextProps.name) || (!nextProps.email && !nextProps.name))
      this.setState({ popup: false, showEmail: false, showName: false });
    else
      this.setState({ popup: true, showEmail: false, showName: true });
  }

  componentDidMount() {
    if (this.props.email) {
      this.props.actions.getClasses({
        email: this.props.email,
        type: 'T'
      });
    }
  }
  checkParam(cl, field, search) {
    return cl[field] && cl[field].toLowerCase().indexOf(search.toLowerCase()) > -1;
  }
  constructor(props, context) {
    super(props, context);
    this.state = {
      classes: [],
      classData: JSON.parse(JSON.stringify(initialClass)),
      timeList: ["12:00 AM", "12:30 AM", "01:00 AM", "01:30 AM", "02:00 AM", "02:30 AM", "03:00 AM", "03:30 AM", "04:00 AM", "04:30 AM", "05:00 AM", "05:30 AM", "06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"]
    };
    this.addClass = this.addClass.bind(this);
    this.closeClass = this.closeClass.bind(this);
    this.getClasses = this.getClasses.bind(this);
    this.requestLogin = this.requestLogin.bind(this);
    this.classadded = this.classadded.bind(this);
    this.userloginFn = this.userloginFn.bind(this);

  }
  getClasses() {
    this.props.actions.getClasses({
      email: this.props.email,
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
      email: this.props.email,
      type: "T"
    });
  }
  closeClass() {
    this.props.cancel();
  }
  render() {
    let banner = (<div> <div className="banner"><span>A <b>Teacher</b> plants a seed of knowledge to produce <b>Tomorrow's Dreams</b></span></div>
      <div className="thank-note"><span>We appreciate efforts you are making to make people learn.. &nbsp;&nbsp;   <i className="fa fa-thumbs-up" aria-hidden="true" /></span></div></div>);
    return (
      <div className="col-block  view-holder">
        {(!this.props.email || !this.props.name) ?
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

export default connect(mapStateToProps, mapDispatchToProps)(Tutor);
