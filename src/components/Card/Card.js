import PropTypes from 'prop-types';
import React from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as classActions from '../../actions/classActions';
import ValidationService from '../common/Validation';
import { checkELValidity, checkValidity, onChange } from '../Utils';
import Countdown from 'react-countdown-now';

let cordova;
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
  loadClass() {
    let cl = this.props.class;
    let meetingToken = btoa(JSON.stringify({
      classId: cl.id.toString(),
      className: cl.Topic.toString(),
      TutorName: cl.TutorName,
      username: this.props.name,
      email: this.props.email,
      type: cl.TutorEmail == this.props.email ? 'P' : 'S'
    }));
    let meetingUrl = "/joinclass?token=" + meetingToken;
    let app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
    if (app) {
      meetingUrl = location.pathname + "#" + meetingUrl;
      location.href = meetingUrl;
    }
    else
      this.context.router.push(meetingUrl);
  }
  render() {
    let cl = this.props.class;
    let isStudent = this.props.type == 'C';
    // let isClassGoingOn = (new Date().getTime() > window.addMinutes(window.getUserLocalDate(cl.Date), -10).getTime()) && (new Date().getTime() < window.addMinutes(window.getUserLocalDate(cl.Date), 40).getTime());
    // let allowJoinClass = ((cl.StudentEmail) || !isStudent) && isClassGoingOn;
    let date = (<span className="date">{window.getUserLocalDate(cl.Date).toDateString("en-US").substring(0, 10)} &nbsp;| &nbsp;
    {window.formatAMPM(new Date(Date.parse(cl.Date.replace(/-/g, '/')) - ((new Date().getTimezoneOffset()) * (60000))))}
    </span>);

    let tag;
    if (cl.type == "course")
      tag = <div className="tag-card">
        {cl.remainingClasses} Classes , {cl.pattern}<br />
        Starting from {window.getUserLocalDate(cl.Date).toDateString("en-US").substring(0, 10)}
      </div>;
    else
      tag = <div className="tag-card">
        One hour session <br />
        Scheduled on {window.getUserLocalDate(cl.Date).toDateString("en-US").substring(0, 10)}
      </div>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return <a onClick={() => this.loadClass()}><button className="card-btn join">Join Now</button></a>;
      } else {
        return <button className="card-btn joining" disabled="disabled" >{date}<br /> <span className="counter">Join in {days}d {hours}h {minutes}m {seconds}s</span></button>;
      }
    };
    return (
      <div className="card-mobile">
        <div className="back-box" style={{ backgroundImage: `url(https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/${cl.category.split(" ")[0].toLowerCase()}-${this.state.imageCode}.png)` }} >
          {tag}
        </div>
        <div className="card-details">
          <div onClick={() => this.context.router.push('/class/' + cl.id)}>
            <h3 className="card-details-header">{cl.Topic.length > 25 ? cl.Topic.substring(0, 25) + ".." : cl.Topic}</h3>
            <div className="desc" dangerouslySetInnerHTML={{ __html: (cl.Description.length > 200 ? cl.Description.substring(0, 200) + "..." : cl.Description) }} />
            <span className="tutor">-{cl.TutorName}</span><br />
            <span className="helper-info"><span>{(cl.id == 98) ? "3Hr class" :  "60 Minutes"}</span> &nbsp;&nbsp;&nbsp;
                {isStudent ? <span>{cl.Paid > 0 ? (cl.Paid + " INR") : 'FREE'}</span> : <span>{cl.Attendee + ' / ' + cl.MaxStudents}</span>}
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

        {/* <div id={"modal-" + cl.id} className="modal fade" role="dialog" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content" style={{ background: "transparent" }}>
              <div className="modal-body card-details" style={{ marginTop: "0px", height: "auto" }}>
                <h3 className="card-details-header">{cl.Topic}</h3>
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
        </div> */}
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
Card.contextTypes = {
  router: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
