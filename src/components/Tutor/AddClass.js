import PropTypes from 'prop-types';
import React from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as classActions from '../../actions/classActions';
import ValidationService from '../common/Validation';
import { checkELValidity, checkValidity, onChange } from '../Utils';

let initialClass = {
  startTime: "05:00 PM",
  maxStudents: 80,
  date: "",
  description: "",
  topic: "",
  tutorexp: "professional",
  followers: "small",
  pattern:"Daily",
  category:"Science",
  level:"All Levels",
  totalClasses:50
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
      selectedStep: 0,
      timeList: ["12:00 AM", "12:30 AM", "01:00 AM", "01:30 AM", "02:00 AM", "02:30 AM", "03:00 AM", "03:30 AM", "04:00 AM", "04:30 AM", "05:00 AM", "05:30 AM", "06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"]
    };
    window.initiateDatepicker(this);
  }

  componentDidMount() {
    window.initiateDatepicker(this);
  }
  getMySQLDate(date, time) {
    let year = parseInt(date.split("/")[2]);
    let month = parseInt(date.split("/")[1]);
    let day = parseInt(date.split("/")[0]);
    let hours = parseInt(time.substring(0, 2)) + (time.indexOf("PM") > -1 ? 12 : 0);
    let minutes = parseInt(time.substring(3, 5));
    return new Date(year, month - 1, day, 17, hours, minutes).toMysqlFormat();
  }
  getUserLocalDate(date) {
    return new Date(Date.parse((date + " UTC").replace(/-/g, '/')));
  }
  addClass(event) {
    // event.preventDefault();
    // if (this.checkValidity(event)) {
      let classData = {
        email: this.props.email,
        name: this.props.name,
        phoneNo: this.props.phoneNo,
        date: window.getMySQLDate(this.state.classData.date, this.state.classData.startTime),
        topic: this.state.classData.topic,
        description: this.state.classData.description,
        maxStudents: this.state.classData.maxStudents,
        startTime: this.state.classData.startTime,
        introduction: this.state.classData.introduction,
        prerequisite:this.state.classData.prerequisite,
        totalClasses:this.state.classData.totalClasses,
        pattern:this.state.classData.pattern,
        tutorexp:this.state.classData.tutorexp,
        followers:this.state.classData.followers,
        level:this.state.classData.level,
        category:this.state.classData.category,
        type:this.state.classData.type,
      };
      this.props.actions.addClass(classData);
      this.setState({
        classData: JSON.parse(JSON.stringify(initialClass))
      });
      this.props.onClose();
    // }
    // event.target.form.reset();
    // window.initiateDatepicker(this);
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
  changeStep(type) {
    if (type=="nxt") {
      if (this.state.selectedStep == "3" && !this.state.classData.type) {
        let errors = JSON.parse(JSON.stringify(this.state.errors || {}));
        errors["type"] = "Please select one";
        this.setState({ errors });
        return;
      }
      let nextStep;
      if(this.state.classData.type=="session" && this.state.selectedStep==5)
        nextStep=this.state.selectedStep+2;
      else
        nextStep=this.state.selectedStep+1;

      if (this.checkValidity({ target: { form: document.getElementsByTagName("form")[0] } })) {
        this.setState({ selectedStep: nextStep }); setTimeout(() => window.initiateDatepicker(this), 100);
      }
    }
    else {
      this.setState({ selectedStep: this.state.selectedStep - 1 }); setTimeout(() => window.initiateDatepicker(this), 100);
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
    let el;
    if (!event.target)
      el = event;
    else
      el = event.target;
    let errors = JSON.parse(JSON.stringify(this.state.errors || {}));

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
        <div className="add-class-box">
          <label style={{ fontSize: "18px" }}> <b>Share your knowledge - </b> <i className="fa fa-times" onClick={()=>this.props.onClose(true)}/></label>
          <br />
          {
            this.state.selectedStep == 0 ?
              <form>
                <label>What kind of teaching have you done before?</label>
                <div className="form-check" onClick={() => this.onChange({ target: { name: "tutorexp", value: "informal" } })}>
                  <input className="form-check-input" type="radio" name="tutorexp" id="informal" value="informal" checked={this.state.classData.tutorexp == "informal"} />
                  <label className="form-check-label" htmlFor="informal">
                    In person, informally
                  </label>
                  <span className="checkmark" />
                </div>
                <div className="form-check" onClick={() => this.onChange({ target: { name: "tutorexp", value: "professional" } })}>
                  <input className="form-check-input" type="radio" name="tutorexp" id="formal" value="professional" checked={this.state.classData.tutorexp == "professional"} />
                  <label className="form-check-label" htmlFor="formal">
                    In person, professionally
                  </label>
                  <span className="checkmark" />
                </div>
                <div className="form-check" onClick={() => this.onChange({ target: { name: "tutorexp", value: "online" } })}>
                  <input className="form-check-input" type="radio" name="tutorexp" id="online" value="online" checked={this.state.classData.tutorexp == "online"} />
                  <label className="form-check-label" htmlFor="online">
                    Online
                  </label>
                  <span className="checkmark" />
                </div>
                <div className="form-check" onClick={() => this.onChange({ target: { name: "tutorexp", value: "other" } })}>
                  <input className="form-check-input" type="radio" name="tutorexp" id="other" value="other" checked={this.state.classData.tutorexp == "other"} />
                  <label className="form-check-label" htmlFor="other">
                    Other
                  </label>
                  <span className="checkmark" />
                </div>
              </form> : null
          }
          {
            this.state.selectedStep == 1 ?
              <form>
                <label>Do you have an audience to share your course with?</label>
                <div className="form-check" onClick={() => this.onChange({ target: { name: "followers", value: "zero" } })}>
                  <input className="form-check-input" type="radio" name="followers" id="zero" value="zero" checked={this.state.classData.followers == "zero"} />
                  <label className="form-check-label" htmlFor="zero">
                    Not at the moment
                  </label>
                  <span className="checkmark" />
                </div>
                <div className="form-check" onClick={() => this.onChange({ target: { name: "followers", value: "small" } })}>
                  <input className="form-check-input" type="radio" name="followers" id="small" value="small" checked={this.state.classData.followers == "small"} />
                  <label className="form-check-label" htmlFor="small">
                    I have a small following
                  </label>
                  <span className="checkmark" />
                </div>
                <div className="form-check" onClick={() => this.onChange({ target: { name: "followers", value: "large" } })}>
                  <input className="form-check-input" type="radio" name="followers" id="large" value="large" checked={this.state.classData.followers == "large"} />
                  <label className="form-check-label" htmlFor="large">
                    I have a sizable following
                  </label>
                  <span className="checkmark" />
                </div>
              </form> : null
          }
          {
            this.state.selectedStep == 2 ?
              <form>
                <label>Introduce yourself to students. <br />Help them to understand why they should learn from you (min 100chars)</label>
                <textarea type="text" onBlur={this.checkELValidity} pattern=".{100,300}"
                  minLength="100"
                  maxLength="300" required placeholder="Type about your experience, knowledge and what motivates you for teaching"
                  rows="12" name="introduction" value={this.state.classData.introduction}
                  onChange={this.onChange} />
                {this.state.errors ? <span className="error">{this.state.errors["introduction"]}</span> : ''}
              </form> : null
          }
          {
            this.state.selectedStep == 3 ?
              <form>
                <label>Select one of the below options:</label>

                <div className={"class-type " + (this.state.classData.type == "session" ? "selected" : "")} onClick={() => this.onChange({ target: { name: "type", value: "session" } })}>
                  <b>One Session</b>
                  <br />
                  <br />
                  Share your expertise, findings or research on one particular topic.
                </div>
                <div className={"class-type " + (this.state.classData.type == "course" ? "selected" : "")} onClick={() => this.onChange({ target: { name: "type", value: "course" } })}> <b>Multiple Classes</b> <br /><br /> Create rich learning experience by taking multiple continous sessions</div>
                {this.state.errors ? <span className="error">{this.state.errors["type"]}</span> : ''}
              </form>
              : null
          }
          {
            this.state.selectedStep == 4 ?
              <form>
                <div>
                  <label>Course Topic (50 chars)</label><br />
                  <input type="text" maxLength="40" onBlur={this.checkELValidity} name="topic" required value={this.state.classData.topic} onChange={this.onChange} />
                  {this.state.errors ? <span className="error">{this.state.errors["topic"]}</span> : ''}
                </div>
                <br />
                <div>
                  <label>Level</label><br />
                  <select className="browser-default custom-select" name="level" defaultValue={this.state.classData.level} onChange={this.onChange} >
                    {["Beginner Level", "Intermediate Level", "Expert Level", "All Levels"].map((tl, i) => <option key={i} value={tl}>{tl}</option>)}
                  </select>
                </div>
                <br />
                <div>
                  <label>Category</label><br />
                  <select className="browser-default custom-select" name="category" defaultValue={this.state.classData.category}  onChange={this.onChange} >
                    {["Finance & Accounting", "Science", "Technology", "General"].map((tl, i) => <option key={i} value={tl}>{tl}</option>)}
                  </select>
                </div>
                <br />
                <div><label>When</label>
                  <div className="time-row">
                    <input type="text" required onBlur={this.checkELValidity} name="date" value={this.state.classData.date} onChange={this.onChange} />
                    <select name="startTime" style={{ width: "120px" }} className="browser-default custom-select" defaultValue={this.state.classData.startTime}>
                      {this.state.timeList.map((tl, i) => <option key={i} value={tl}> {tl} </option>)}
                    </select>
                  </div>
                  {this.state.errors ? <span className="error">{this.state.errors["date"]}</span> : ''}
                </div>
                <br />
                <div>
                  <label>Duration : 60 Minutes</label>
                </div>
                <br />
                <div><label>Max Students</label>
                  <select style={{ width: "65px", marginLeft: "10px" }} className="browser-default custom-select" name="maxStudents" defaultValue={this.state.classData.maxStudents}  onChange={this.onChange} >
                    {[100, 80, 60, 50, 40, 30, 20, 10].map((tl, i) => <option key={i} value={tl}>{tl}</option>)}
                  </select>
                </div>
              </form> : null
          }
          {
            this.state.selectedStep == 5 ?
              <form>
                <div>
                  <label>Course Description <br /> A detailed description motivates students to join the class</label><br />
                  <textarea rows="5" type="text" maxLength="500" onBlur={this.checkELValidity} name="description" required value={this.state.classData.description} onChange={this.onChange} />
                  {this.state.errors ? <span className="error">{this.state.errors["description"]}</span> : ''}
                </div>
                <br />
                <div>
                  <label>Any course requirements or prerequisites?</label><br />
                  <textarea rows="5" type="text" maxLength="200" onBlur={this.checkELValidity} name="prerequisite" required value={this.state.classData.prerequisite} onChange={this.onChange} />
                  {this.state.errors ? <span className="error">{this.state.errors["prerequisite"]}</span> : ''}
                </div>
              </form> : null
          }
          {
            this.state.selectedStep == 6 ?
              <form>
                <div>
                  <label>Number of Classes</label><br />
                  <select className="browser-default custom-select" name="totalClasses" defaultValue={this.state.classData.totalClasses}  onChange={this.onChange} >
                    {[60, 50, 40, 30, 20, 10].map((tl, i) => <option key={i} value={tl}>{tl}</option>)}
                  </select>
                </div>
                <br />
                <div>
                  <label>Class Pattern</label><br />
                  <select className="browser-default custom-select" name="pattern" defaultValue={this.state.classData.pattern}  onChange={this.onChange} >
                    {["Daily", "Mon-Fri", "Mon-Sat", "Sat-Sun", "Every Saturday", "Every Sunday"].map((tl, i) => <option key={i} value={tl}>{tl}</option>)}
                  </select>
                </div>
              </form> : null
          }
          {
            this.state.selectedStep == 7 ?
              <div>
                <label>Tips  -  please read carefully</label>
                <ul className="tips">
                  <li>Communicate with students one on one.</li>
                  <li>Be sure you have a good stable internet and power backup.</li>
                  <li>If for some reason, you have to cancel the class, please raise it to ClassTree support before hand.</li>
                  <li>To share any material or link with students, drop a message to +91-8886080289</li>
                  <li>Last but not least , We are happy to have you onboard. We know you would be great teacher.</li>
                </ul>
              </div> : null
          }
          {
            this.state.selectedStep < 7 ?
              <div>
                <button type="button" disabled={this.state.selectedStep==0} className="submit-btn prev" onClick={() => this.changeStep('prev')}>Previous</button>
                <button type="button" className="submit-btn next" onClick={() => this.changeStep('nxt')}> Next </button>
              </div> : 
              <button type="submit" style={{width:"100%"}} className="submit-btn next" onClick={() => this.addClass({})}> Submit for review </button>
          }

          
        </div>
      </div>


    );
  }
}

function mapStateToProps(state, ownProps) {

  return {
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
