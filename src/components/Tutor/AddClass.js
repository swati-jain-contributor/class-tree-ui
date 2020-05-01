import PropTypes from 'prop-types';
import React from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as classActions from '../../actions/classActions';
import ValidationService from '../common/Validation';
import { checkELValidity, checkValidity, onChange } from '../Utils';

let initialClass ={
  startTime: "05:00 PM",
  maxStudents:80,
  date:"",
  description:"",
  topic:""
};
class AddClass extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.checkValidity = this.checkValidity.bind(this);
    this.checkELValidity = this.checkELValidity.bind(this);
    this.onChange = this.onChange.bind(this);
    this.addClass = this.addClass.bind(this);
    this.state = {
      classData: JSON.parse(JSON.stringify(initialClass)),
      timeList: ["12:00 AM", "12:30 AM", "01:00 AM", "01:30 AM", "02:00 AM", "02:30 AM", "03:00 AM", "03:30 AM", "04:00 AM", "04:30 AM", "05:00 AM", "05:30 AM", "06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"]
    };
    window.initiateDatepicker(this);
  }

  componentDidMount() {
    window.initiateDatepicker(this);
  }
  getMySQLDate(date,time){
    let year = parseInt(date.split("/")[2]);
    let month = parseInt(date.split("/")[1]);
    let day = parseInt(date.split("/")[0]);
    let hours= parseInt(time.substring(0,2)) + (time.indexOf("PM")>-1 ? 12:0);
    let minutes= parseInt(time.substring(3,5));
    return new Date(year,month-1,day,17,hours,minutes).toMysqlFormat();
  }
  getUserLocalDate(date){
    return new Date(Date.parse((date + " UTC").replace(/-/g, '/')));
  }
  addClass(event) {
    event.preventDefault();
    if (this.checkValidity(event)) {
      let classData = {
        email: this.props.email,
        name: this.props.name,
        phoneNo: this.props.phoneNo,
        date: window.getMySQLDate(this.state.classData.date,this.state.classData.startTime),
        topic: this.state.classData.topic,
        description: this.state.classData.description,
        maxStudents: this.state.classData.maxStudents,
        startTime: this.state.classData.startTime
      };
      this.props.actions.addClass(classData);
      this.setState({
        classData: JSON.parse(JSON.stringify(initialClass)) 
      });
      this.props.onClose();
    }
    event.target.form.reset();
    window.initiateDatepicker(this);
  }

  addName(event) {
    event.preventDefault();
    if ((event && this.checkValidity(event)) || !event) {
      if (this.props.type == "T")
        this.props.actions.addTeacherData({
          email: this.props.email,
          name: this.state.classData.name,
          phoneNo: this.state.classData.phoneNo
        });
      else
        this.props.actions.addStudentData({
          email: this.props.email,
          name: this.state.classData.name,
          phoneNo: this.state.classData.phoneNo
        });
    }
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

  onChange(event) {
    const field = event.target.name;
    let classData = this.state.classData;
    classData[field] = event.target.value;
    return this.setState({ classData: classData });
  }

  render() {
    return (
      <div className="popup add-class">
      <form>
        <label><b>Please provide class details-</b></label>
        <div>
          <label>Topic</label><br />
          <input type="text" maxLength="40" onBlur={this.checkELValidity} name="topic" required value={this.state.classData.topic} onChange={this.onChange} />
          {this.state.errors ? <span className="error">{this.state.errors["topic"]}</span> : ''}
        </div>
        <br />
        <div>
          <label>Description</label><br />
          <textarea type="text" onBlur={this.checkELValidity} maxLength="300" required placeholder="Type about your experience and topics you are going to cover in your class" rows="8" name="description" value={this.state.classData.description} onChange={this.onChange} />
          {this.state.errors ? <span className="error">{this.state.errors["description"]}</span> : ''}
        </div>
        <br />
        <div><label>When</label>
          <div className="time-row">
            <input type="text" required onBlur={this.checkELValidity} name="date" value={this.state.classData.date} onChange={this.onChange} />
            <select name="startTime" defaultValue={this.state.classData.startTime}>
              {this.state.timeList.map((tl,i) => <option key={i} value={tl}> {tl} </option>)}
            </select>
          </div>
          {this.state.errors ? <span className="error">{this.state.errors["date"]}</span> : ''}
        </div>
        <br />
        <div>
          <label>Duration : 40 Minutes</label>
        </div>
        <br />
        <div><label>Max Students</label>
          <select name="maxStudents"  defaultValue={this.state.classData.maxStudents}>
            {[100, 80 , 60, 50, 40, 30, 20, 10].map((tl,i) => <option  key={i} value={tl}>{tl}</option>)}
          </select>
        </div>
        <button type="submit" className="submit-btn" onClick={this.addClass}>Add Class</button>
      </form>
    </div>
  

    );
  }
}

function mapStateToProps(state, ownProps) {

  return {
    classes: state.classes.TeacherClasses,
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

export default connect(mapStateToProps, mapDispatchToProps)(AddClass);
