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
class Card extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.bookClass=this.bookClass.bind(this);
  }

  bookClass(cl){
    console.log(cl);
    this.props.actions.bookClass({
      "classId" : cl.id,
      "email":this.props.email,
      "phoneNo":this.props.phoneNo,
      "rating":"5",
      "name":this.props.name
    });
}
  render() {
    var cl = this.props.class;
    var isStudent = this.props.type=='C';
    
    var isClassGoingOn = (new Date().getTime() > window.addMinutes(window.getUserLocalDate(cl.Date),-60).getTime()) && (new Date().getTime() < window.addMinutes(window.getUserLocalDate(cl.Date),40).getTime()) ;
    return (
      <div className="card">
            <div className="topic" style={!cl.active ? {backgroundColor:'gray'}:{}}>{cl.Topic}</div>
            <span className="sublabel" style={{ marginTop: "10px", textAlign: "center" }}>
              <b>{window.getUserLocalDate(cl.Date).toDateString("en-US")} <br /> 
              {window.formatAMPM(new Date( Date.parse(cl.Date.replace(/-/g, '/')) - ((new Date().getTimezoneOffset())*(60000))))}
                </b>
            </span>
            <b className="sublabel" >About:</b>
            <div className="desc">{cl.Description}</div>
            <br />
            <div><b>Duration:</b> 40 Minutes</div><br />
            {isStudent ? <div><b>Price:</b> FREE<br/></div> : ''}
            <div><b>By:</b> {cl.TutorName}</div>
            {(isStudent &&  cl.StudentEmail) ? <span className="tag">Registered</span>:null}
            {!isStudent ? <span className="tag">{cl.Attendee + ' / ' + cl.MaxStudents}</span> :''}
            {isStudent && cl.active && cl.StudentEmail?<div className="registered-user-msg"><br/><br/><b>Thank you for registering!</b> <p>We will share class joining details via email soon.</p></div>:null}
            <br />
            <br />
            {cl.active && !isStudent ? <div className="registered-user-msg"><b>Thank you for teaching!</b> <p>We will share class joining details via email soon.</p></div> : null}
            <br />
            <span>Share it with your friends - </span>
            <div>
              <a style={{ marginRight: "8px" }} href="http://www.facebook.com/sharer.php?u=http://www.classtree.in" target="_blank"><img src="https://image.flaticon.com/icons/svg/1384/1384053.svg" alt="Facebook" className="shared-svg" /></a>
              <a href="http://www.linkedin.com/shareArticle?mini=true&url=http://www.classtree.in" target="_blank"><img src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="Linkedin" className="shared-svg" /></a>
            </div>
            {!cl.active ? <button style={{ backgroundColor: "lightgrey", fontWeight: "bold", fontSize: "20px" }} className="card-btn">Registration closed</button> : null}
            {!cl.StudentEmail && isStudent && cl.active?
            <button className="card-btn" onClick={()=>this.bookClass(cl)}>Book Class</button>:null}
            {(cl.StudentEmail|| !isStudent) && cl.MeetingLink && isClassGoingOn ?
            <a target="_blank" href={cl.MeetingLink}><button className="card-btn" >Join Class</button></a>:null}
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

export default connect(mapStateToProps, mapDispatchToProps)(Card);
