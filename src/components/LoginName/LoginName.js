import React, { PropTypes } from 'react';
import Tappable from 'react-tappable/lib/Tappable';
import groups from '../../api/groups';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as classActions from '../../actions/classActions';
import AddDiscussion from '../overlays/AddDiscussion';
import ValidationService from '../common/Validation';
import { checkELValidity, checkValidity, onChange } from '../Utils';
class LoginName extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.checkValidity = this.checkValidity.bind(this);
    this.checkELValidity = this.checkELValidity.bind(this);
    this.onChange = this.onChange.bind(this);
    this.addName = this.addName.bind(this);
    this.state = {
      classData: { name: "", phoneNo: "" }
    };

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
      <div>
        <br />
        <br />
        <span style={{ fontSize: "18px" }} >Hey! Welcome to <b>ClassTree!!</b></span>
        <br />
        <br />
        <span>You are a <b>new member</b>, please help us with your name and phone number to create an account for you!</span>

        <br />
        <br />
        <form>
          <label className="big-label">Name</label><br />
          <input className="big-input" required onBlur={this.checkELValidity} placeholder="Name" maxLength="50" type="text" name="name" value={this.state.classData.name} onChange={this.onChange} /><br />
          {this.state.errors ? <span className="error">{this.state.errors["name"]}</span> : ''}
          <br />
          <br />

          <label className="big-label">Phone Number</label><br />
          <input className="big-input" min="1001" max="9999999999999" required onBlur={this.checkELValidity} maxLength="13" placeholder="Phone Number" type="number" name="phoneNo" value={this.state.classData.phoneNo} onChange={this.onChange} /><br />
          {this.state.errors ? <span className="error">{this.state.errors["phoneNo"]}</span> : ''}
          <br />
          <br />
          <button type="submit" className="submit-btn" onClick={this.addName} >Submit</button>
        </form>

      </div>

    );
  }
}

function mapStateToProps(state, ownProps) {

  return {
    classes: state.classes.TeacherClasses,
    email: ownProps.type=="T" ? state.classes.teacherEmail : state.classes.studentEmail,
    name: ownProps.type=="T" ?state.classes.teacherName:state.classes.studentName,
    phoneNo: ownProps.type=="T" ?state.classes.teacherPhone:state.classes.studentPhone
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(classActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginName);
