import React, { PropTypes } from 'react';
// import { ReactDOM , render} from 'react-dom';
// import { Holdable } from 'react-touch';
import Tappable from 'react-tappable/lib/Tappable';
import groups from '../../api/groups';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as classActions from '../../actions/classActions';
import AddDiscussion from '../overlays/AddDiscussion';
import ValidationService from '../common/Validation';
import LoginEmail  from '../LoginEmail/LoginEmail';
import LoginName from '../LoginName/LoginName';
import AddClass from './AddClass';
import Card from '../Card/Card';

let initialClass ={
  startTime: "05:00 PM",
  maxStudents:40,
  date:"",
  description:"",
  topic:"",
  name:"",
  phoneNo:"",
  email:""
  
};

class Tutor extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      classData: JSON.parse(JSON.stringify(initialClass)) ,
      timeList: ["12:00 AM", "12:30 AM", "01:00 AM", "01:30 AM", "02:00 AM", "02:30 AM", "03:00 AM", "03:30 AM", "04:00 AM", "04:30 AM", "05:00 AM", "05:30 AM", "06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"]
    };
    this.addClass = this.addClass.bind(this);
    this.closeClass = this.closeClass.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getClasses = this.getClasses.bind(this);
    this.addName = this.addName.bind(this);
    this.checkValidity = this.checkValidity.bind(this);
    this.checkELValidity = this.checkELValidity.bind(this);

  }
  onChange(event) {
    const field = event.target.name;
    let classData = this.state.classData;
    classData[field] = event.target.value;
    return this.setState({ classData: classData });
  }
  addClass(event) {
    event.preventDefault();
    if (this.checkValidity(event)) {
      let classData = {
        email: this.props.email,
        name: this.props.name,
        phoneNo: this.props.phoneNo,
        date: new Date(this.state.classData.date).toUTCString(),
        topic: this.state.classData.topic,
        description: this.state.classData.description,
        maxStudents: this.state.classData.maxStudents,
        startTime: this.state.classData.startTime
      };
      this.props.actions.addClass(classData);
      this.setState({
        classData: JSON.parse(JSON.stringify(initialClass)) 
      });
    }
    event.target.form.reset();
    window.initiateDatepicker(this);
  }
  addName(event) {
    event.preventDefault();
    if ((event && this.checkValidity(event)) || !event) {
      this.props.actions.addTeacherData({
        email: this.props.email,
        name: this.state.classData.name,
        phoneNo: this.state.classData.phoneNo
      });
    }
  }
  getClasses(event) {
    event && event.preventDefault();
    if ((event && this.checkValidity(event)) || !event) {
      if(!this.props.name){
        this.props.actions.addTeacherData({
          email: this.state.classData.email || this.props.email,
          name: null,
          phoneNo: null
        });
      }
      this.props.actions.getClasses({
        email: this.state.classData.email,
        type: "T"
      });
    }
  }
  closeClass() {
    this.props.cancel();
  }
  checkValidity(event) {
    if (event.target.form.checkValidity()) {
      this.setState({ errors: {} });
      for (let i in event.target.form.elements) {
        let el = event.target.form.elements[i];
        if (el.tagName == "INPUT" || el.tagName == "TEXTAREA")
          el.style.borderColor = "black";
      }
      return true;

    }
    else {
      let errors = {};
      for (let i in event.target.form.elements) {
        let el = event.target.form.elements[i];
        this.checkELValidity(el);
      }
      return false;
    }
  }

  checkELValidity(event) {
    var el;
    if (!event.target)
      el = event;
    else
      el = event.target;
    var errors = JSON.parse(JSON.stringify(this.state.errors || {}));

    if (el.tagName == "INPUT" || el.tagName == "TEXTAREA") {
      let name = el.getAttribute("name");
      if (!el.checkValidity()) {
        if (el.validity.valueMissing)
          errors[name] = "Required";
        else if (name == "email")
          errors[name] = "Invalid email address";
        else
          errors[name] = "Invalid value";
        el.style.borderColor = "red";
      }
      else {
        errors[name] = void 0;
        el.style.borderColor = "black";
      }
    }
    this.setState({ errors });
  }
  render() {
    var banner = (<div> <div className="banner"><span>A <b>Teacher</b> plants a seed of knowledge to produce <b>Tomorrow's Dreams</b></span></div>
    <div className="thank-note"><span>We appreciate efforts you are making to make people learn.. &nbsp;&nbsp;   <i className="fa fa-thumbs-up" aria-hidden="true"></i></span></div></div>);
    return (
      <div className="col-block  view-holder">


        <div>
          {(!this.props.email) ?
            <div className="content-box clearfix">
              {banner}
              <LoginEmail type="T"/>
            </div>
            : null}

          {(this.props.classes && this.props.classes.length == 0 && this.props.email && !this.props.name) ?
            <div className="content-box clearfix">
              {banner}
              <LoginName type="T"/>
            </div> : null
          }
        </div>
        {(this.props.name && this.props.email) ? <div className="content-box clearfix">
          {banner}
          <h1 className="greet-user">Hello {this.props.name}</h1>
          <div className="card">
            <AddClass/>
          </div>
          {this.props.classes.map((cl, i) => <Card type="T" class={cl} key={i}/>)}
        </div> : null}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

  return {
    classes: state.classes.TeacherClasses,
    email: state.classes.teacherEmail,
    name: state.classes.teacherName,
    phoneNo: state.classes.teacherPhone
  };
}
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(classActions, dispatch)
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Tutor);
