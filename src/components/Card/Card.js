import PropTypes from 'prop-types';
import React from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as classActions from '../../actions/classActions';
import ValidationService from '../common/Validation';
import { checkELValidity, checkValidity, onChange } from '../Utils';
import Countdown from 'react-countdown-now';

class Card extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.bookClass = this.bookClass.bind(this);
    this.state = {
      step: 0,
      imageCode: Math.floor(Math.random() * 3) + 1
    };
  }

  bookClass(cl) {
    this.props.bookClass(cl);
    console.log(cl);
  }
  render() {
    let cl = this.props.class;
    let isStudent = this.props.type == 'C';
    // let isClassGoingOn = (new Date().getTime() > window.addMinutes(window.getUserLocalDate(cl.Date), -10).getTime()) && (new Date().getTime() < window.addMinutes(window.getUserLocalDate(cl.Date), 40).getTime());
    // let allowJoinClass = ((cl.StudentEmail) || !isStudent) && isClassGoingOn;
    let date = (<span className="date">{window.getUserLocalDate(cl.Date).toDateString("en-US").substring(0, 10)} &nbsp;| &nbsp;
    {window.formatAMPM(new Date(Date.parse(cl.Date.replace(/-/g, '/')) - ((new Date().getTimezoneOffset()) * (60000))))}
    </span>);


    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return <a target="_blank" href={"/joinclass?token=" + meetingToken}><button className="card-btn join">Join Now</button></a>;
      } else {
        return <button className="card-btn joining" disabled="disabled" >{date}<br /> <span className="counter">Join in {days}d {hours}h {minutes}m {seconds}s</span></button>;
      }
    };
    let meetingToken = btoa(JSON.stringify({
      classId: cl.id.toString(),
      className: cl.Topic.toString(),
      TutorName: cl.TutorName,
      username: this.props.name,
      email: this.props.email,
      type: cl.TutorEmail == this.props.email ? 'P' : 'S'
    }));
    return (
      <div className="card-mobile">
        <div className="back-box" style={{ backgroundImage: `url(https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/finance-${this.state.imageCode}.jpg)` }} />
        <div className="card-details">
          <div data-toggle="modal" data-target={"#" + "modal-" + cl.id}>
            <h3 className="card-details-header">{cl.Topic.length > 25 ? cl.Topic.substring(0, 25) + ".." : cl.Topic}</h3>
            <div className="desc">{cl.Description.length > 200 ? cl.Description.substring(0, 200) + "..." : cl.Description}</div>
            <span className="tutor">-{cl.TutorName}</span><br />
            <span className="helper-info"><span>40 Minutes</span> &nbsp;&nbsp;&nbsp;
                {isStudent ? <span>FREE</span> : <span>{cl.Attendee + ' / ' + cl.MaxStudents}</span>}
            </span>
            <div className="line" />
          </div>
          {!cl.active ? <button style={{ backgroundColor: "lightgrey", fontWeight: "bold", fontSize: "20px" }} className="card-btn">Registration closed</button> : null}
          {!cl.StudentEmail && isStudent && cl.active ?
            <button className="card-btn" onClick={() => this.bookClass(cl)}>{date}  <span className="book">Book</span></button> : null}
          {(isStudent && cl.StudentEmail) ? <span className="tag tag-registered"><i className="fa fa-id-badge" /> &nbsp;Registered</span> : null}
          {(((cl.StudentEmail && isStudent) || !isStudent) && cl.active) ? <Countdown
            date={window.addMinutes(window.getUserLocalDate(cl.Date), -10)}
            renderer={renderer}
          /> : null}
        </div>

        <div id={"modal-" + cl.id} className="modal fade" role="dialog" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content" style={{ background: "transparent" }}>
              <div className="modal-body card-details" style={{ marginTop: "0px", height: "auto" }}>
                <h3 className="card-details-header">{cl.Topic}</h3>
                {/* <button type="button" className="close" data-dismiss="modal">&times;</button> */}
                <div className="desc">{cl.Description}</div>
                <span className="tutor">-{cl.TutorName}</span><br />
                <span className="helper-info"><span>40 Minutes</span> &nbsp;&nbsp;&nbsp;
                {isStudent ? <span>FREE</span> : <span>{cl.Attendee + ' / ' + cl.MaxStudents}</span>}
                </span>
                <div className="line" />
                <div className="helper-info" style={{ marginTop: "5px", marginBottom: "40px" }}>
                  <span>Share - </span>
                  <span>
                    <a className="grayscale" style={{ marginRight: "8px" }} href="http://www.facebook.com/sharer.php?u=https://www.classtree.in/student" target="_blank"><img src="https://image.flaticon.com/icons/svg/1384/1384053.svg" alt="Facebook" className="shared-svg" /></a>
                    <a className="grayscale" href="http://www.linkedin.com/shareArticle?mini=true&url=https://www.classtree.in/student" target="_blank"><img src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="Linkedin" className="shared-svg" /></a>
                  </span>
                </div>

                {!cl.active ? <button style={{ backgroundColor: "lightgrey", fontWeight: "bold", fontSize: "20px" }} className="card-btn">Registration closed</button> : null}
                {!cl.StudentEmail && isStudent && cl.active ?
                  <button className="card-btn" data-dismiss="modal" onClick={() => this.bookClass(cl)}>{date}   <span className="book">Book</span></button> : null}
                {(isStudent && cl.StudentEmail) ? <span className="tag tag-registered"><i className="fa fa-id-badge" /> &nbsp;Registered</span> : null}
                {(((cl.StudentEmail && isStudent) || !isStudent) && cl.active) ? <Countdown
                  date={window.addMinutes(window.getUserLocalDate(cl.Date), -10)}
                  renderer={renderer}
                /> : null}
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Card);
