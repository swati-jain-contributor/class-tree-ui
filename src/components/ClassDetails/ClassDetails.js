import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as classActions from '../../actions/classActions';

import { checkELValidity, checkValidity, onChange } from '../Utils';
import Countdown from 'react-countdown-now';
import crypto from 'crypto';
import swal from 'sweetalert2';
class ClassDetails extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.bookClass = this.bookClass.bind(this);
    this.userloginFn = this.userloginFn.bind(this);
    this.state = {
      step: 0,
      imageCode: Math.floor(Math.random() * 3) + 1
    };
    this.makePayment = this.makePayment.bind(this);
  }
  componentDidMount() {
    this.props.actions.getClassDetails({
      id: this.props.id,
      email: (this.props.user ? this.props.user.email : null)
    });
  }

  componentDidUpdate() {
    if (this.state.bookingClass && this.props.user) {
      this.bookClass(this.state.bookingClass);
      this.setState({ bookingClass: null });
    }
  }
  makePayment(cl) {
    let txnId = cl.id + '-' + (new Date).getTime();
    let key = 'ABfWbhJg';
    let salt = '0uBSIFCm3a';
    let cryp = crypto.createHash('sha512');
    let amount = parseInt(cl.Paid);
    let text = key + '|' + txnId + '|' + amount + '|' + cl.Topic + '|' + this.props.user.firstname + '|' + this.props.user.email + '|||||' + 'CLASSDETAILS_BAKEMINDS' + '||||||' + salt;
    cryp.update(text);
    let hash = cryp.digest('hex');
    let data = {
      key: key,
      txnid: txnId,
      hash: hash,
      amount: amount,
      firstname: this.props.user.firstname,
      email: this.props.user.email,
      phone: this.props.user.mobile,
      productinfo: cl.Topic,
      udf5: 'CLASSDETAILS_BAKEMINDS',
      surl: location.href,
      furl: location.href
      // mode: 'mode'// non-mandatory for Customized Response Handling
    };
    let handler = {

      responseHandler: (BOLT) => {
        console.log(BOLT);

        if (BOLT.response.txnStatus == 'SUCCESS') {
          this.props.actions.bookClass({
            "classId": cl.id,
            "email": this.props.user.email,
            "phoneNo": this.props.user.mobile,
            "rating": "5",
            "name": this.props.user.firstname + " " + this.props.user.lastname
          });
          this.props.actions.getClassDetails({
            id: this.props.id,
            email: this.props.user.email
          });
          window.showSuccessToast("Congratulations! Class Registered successfully!"); this.props.actions.bookClass({
            "classId": cl.id,
            "email": this.props.user.email,
            "phoneNo": this.props.user.mobile,
            "rating": "5",
            "name": this.props.user.firstname + " " + this.props.user.lastname
          });
          this.props.actions.getClassDetails({
            id: this.props.id,
            email: this.props.user.email
          });
          window.showSuccessToast("Congratulations! Class Registered successfully!");
        }
        else {
          swal.fire( "Oops" ,  "Your payment failed! Please try again!" ,  "error" );
        }
      },
      catchException: function (BOLT) {
        console.log(BOLT);
        // the code you use to handle the integration errors goes here

      }
    };
    window.bolt.launch(data, handler);
  }
  bookClass(cl) {
    if (this.props.user) {
      if (!cl.Paid || cl.Paid == 0) {
        this.props.actions.bookClass({
          "classId": cl.id,
          "email": this.props.user.email,
          "phoneNo": this.props.user.mobile,
          "rating": "5",
          "name": this.props.user.firstname + " " + this.props.user.lastname
        });
        this.props.actions.getClassDetails({
          id: this.props.id,
          email: this.props.user.email
        });
        window.showSuccessToast("Congratulations! Class Registered successfully!");
      }
      else {
        this.makePayment(cl);
      }
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
  loadClass() {
    let cl = this.props.class;
    if (this.props.user) {
      let meetingToken = btoa(JSON.stringify({
        classId: cl.id.toString(),
        className: cl.Topic.toString(),
        TutorName: cl.TutorName,
        username: this.props.user.firstname + " " + this.props.user.lastname,
        email: this.props.user.email,
        type: cl.TutorEmail == this.props.user.email ? 'P' : 'S'
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
  }
  render() {

    let cl = this.props.class;
    let isStudent = (this.props.user ? (this.props.user.email != cl.email) : null);
    const scrollToTeacher = () => {
      $([document.documentElement, document.body]).animate({
        scrollTop: $("#teacher").offset().top
      }, 2000);
    };

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return <a onClick={() => this.loadClass()}><button className=" join">Join Now</button></a>;
      } else {
        return <button className=" joining" disabled="disabled" >{date}<br /> <span className="counter">Join in {days}d {hours}h {minutes}m {seconds}s</span></button>;
      }
    };

    let date;
    if (cl.Date)
      date = <span className="date">{window.getUserLocalDate(cl.Date).toDateString("en-US").substring(0, 10)} &nbsp;| &nbsp;
    {window.formatAMPM(new Date(Date.parse(cl.Date.replace(/-/g, '/')) - ((new Date().getTimezoneOffset()) * (60000))))}
      </span>;

    let tag;
    if (cl.type == "course")
      tag = <div className="cd-tag">
        {cl.remainingClasses} Classes , {cl.pattern}<br />
        Starting from {window.getUserLocalDate(cl.Date).toDateString("en-US").substring(0, 10)}
      </div>;
    else
      tag = <div className="cd-tag">
        One hour session <br />
        Scheduled on {window.getUserLocalDate(cl.Date).toDateString("en-US").substring(0, 10)}
      </div>;
    return (<div className="class-details-page">
      <span onClick={() => this.context.router.push('/student')}><i className="fa fa-times" /></span>
      <div className="back-box" style={{ backgroundImage: `url(https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/${cl.category.split(" ")[0].toLowerCase()}-${this.state.imageCode}.png)` }} />
      <div className="class-details-content">
        <h3 className="cd-topic">{cl.Topic}</h3>
        {tag}
        {(isStudent && cl.StudentEmail) ? <span className="cd-tag registered"><i className="fa fa-id-badge" /> &nbsp;&nbsp;&nbsp;&nbsp;REGISTERED</span> : null}
        <span>{parseInt(cl.MaxStudents) - parseInt(cl.Attendee)} seats left</span>
        <br />
        <span>{'Shared by - '} <span className="cd-tutor" onClick={scrollToTeacher}>{cl.name}</span></span>
        <br />
        <b>{date}</b>
        <br />

        <b className="paid">{cl.Paid != 0 ? (cl.Paid) : 'FREE'}</b>
        <br />
        <span><i className="fa fa-layer-group" /> &nbsp;&nbsp;&nbsp; Level - <span>{cl.level}</span></span><br />
        <span><i className="fa fa-globe" />&nbsp;&nbsp;&nbsp; Language - English</span><br />
        <span><i className="fa fa-globe" />&nbsp;&nbsp;&nbsp;{cl.type == "course" ? (cl.pattern + " Classes") : " One hour class"} </span>
        <br />
        <br />
        <div className="cd-qbox">
          <b>What you will learn</b><br />
          <span dangerouslySetInnerHTML={{ __html: cl.Description }} />
        </div>
        <br />
        <div className="cd-qbox">
          <b>What you will get</b><br /><br />
          <span className="cd-get"><i className="fa fa-chalkboard-teacher" />Instructor Led Live 1:1 Sessions</span>
          <span className="cd-get"><i className="fa fa-user-md" />Interview call to give jumpstart to your career</span>
          <span className="cd-get"><i className="fa fa-life-ring" />Real-life Case Studies</span>
          <span className="cd-get"><i className="fa fa-book" />Lifetime access to study material</span>
          <span className="cd-get"><i className="fa fa-bread-slice" />Assignments</span>
          <span className="cd-get"><i className="fa fa-certificate" />Certificate - Recognized and valued everywhere</span>
          <span className="cd-get"><i className="fa fa-headset" />24x7 personal assistance</span>
          <span className="cd-get"><i className="fa fa-mobile-alt" />Access on all devices - mobile/laptop/tablet</span>
          <span className="cd-get"><i className="fa fa-book-reader" />Lifelong knowledge</span>
        </div>
        <br />
        <div className="cd-qbox">
          <b>What you should have</b><br />
          <span dangerouslySetInnerHTML={{ __html: cl.prerequisite }} />
        </div>
        <br />
        <div className="cd-qbox" id="teacher">
          <b>Know your tutor</b><br />
          <span dangerouslySetInnerHTML={{ __html: cl.introduction }} />
        </div>
        <br />
        <div className="cd-book-wrapper">
          {!cl.active ? <button style={{ backgroundColor: "lightgrey", fontWeight: "bold", fontSize: "20px" }} className="">Registration closed</button> : null}
          {!cl.StudentEmail && isStudent && cl.active ?
            <button className="" onClick={() => this.bookClass(cl)}><span className="book">Book Now</span></button> : null}
          {(((cl.StudentEmail && isStudent) || !isStudent) && cl.active) ? <Countdown
            date={window.addMinutes(window.getUserLocalDate(cl.Date), -10)}
            renderer={renderer}
          /> : null}
        </div>
      </div>
    </div>);
  }
}



function mapStateToProps(state, ownProps) {

  return {
    class: state.classes.selectedClass || { category: "" },
    user: state.session.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(classActions, dispatch)
  };
}
ClassDetails.contextTypes = {
  router: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(ClassDetails);
