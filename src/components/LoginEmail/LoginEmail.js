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
class LoginEmail extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.checkValidity= this.checkValidity.bind(this);
    this.checkELValidity = this.checkELValidity.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getClasses = this.getClasses.bind(this);
    this.state = {
      classData: { email: "" }
    };

  }

  checkValidity(event){
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
  
  checkELValidity(event){
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
  
  onChange(event){
    const field = event.target.name;
    let classData = this.state.classData;
    classData[field] = event.target.value;
    return this.setState({ classData: classData });
  }
  getClasses(event) {
    event && event.preventDefault();
    if ((event && this.checkValidity(event)) || !event) {
      if (this.props.type == "T")
        this.props.actions.addTeacherData({
          email: this.state.classData.email,
          name: null,
          phoneNo: null
        });

      else
        this.props.actions.addStudentData({
          email: this.state.classData.email,
          name: null,
          phoneNo: null
        });

      this.props.actions.getClasses({
        email: this.state.classData.email,
        type: this.props.type
      });
    }
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <form noValidate>
          <label className="big-label" htmlFor="email">Your Email Address</label> &nbsp;&nbsp;&nbsp;&nbsp;<br />
          <input className="big-input" onBlur={this.checkELValidity} placeholder="Email" required type="email" name="email" value={this.state.classData.email} onChange={this.onChange} /> <br />
          {this.state.errors ? <span className="error">{this.state.errors["email"]}</span> : ''}
          <button type="submit" className="submit-btn" onClick={this.getClasses}>Submit</button>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginEmail);
