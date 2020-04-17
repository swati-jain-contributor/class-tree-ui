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
    this.state={
      step:0,
      imageCode: Math.floor(Math.random()*3) + 1
    };
  }

  bookClass(cl){
    this.props.bookClass(cl);
    console.log(cl);
}
  render() {
    var cl = this.props.class;
    var isStudent = this.props.type=='C';
    var isClassGoingOn = (new Date().getTime() > window.addMinutes(window.getUserLocalDate(cl.Date),-10).getTime()) && (new Date().getTime() < window.addMinutes(window.getUserLocalDate(cl.Date),40).getTime()) ;
    var allowJoinClass = ( ( cl.StudentEmail)|| !isStudent) && cl.MeetingLink && isClassGoingOn;
    return (
      <div className="card-mobile">
        <div className="back-box" style={{backgroundImage:`url(https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/finance-${this.state.imageCode}.jpg)`}}></div>
        <div className="card-details">
          <h3 className="card-details-header">{cl.Topic.length>18? cl.Topic.substring(0,18)+"..": cl.Topic}</h3>
                 <span>{window.getUserLocalDate(cl.Date).toDateString("en-US")} &nbsp;&nbsp;
               {window.formatAMPM(new Date( Date.parse(cl.Date.replace(/-/g, '/')) - ((new Date().getTimezoneOffset())*(60000))))}
                </span>
                <div className="desc">{cl.Description.length>150? cl.Description.substring(0,150)+"...": cl.Description}</div>
                <span className="tutor">-{cl.TutorName}</span><br/>
                <span className="helper-info"><span>40 Minutes</span> &nbsp;&nbsp;&nbsp;
                {isStudent?<span>FREE</span>:<span>{cl.Attendee + ' / ' + cl.MaxStudents}</span>}
                </span> 
                <div className="line"/>
                 
                {!cl.active ? <button style={{ backgroundColor: "lightgrey", fontWeight: "bold", fontSize: "20px" }} className="card-btn">Registration closed</button> : null}
              {!cl.StudentEmail && isStudent && cl.active?
            <button className="card-btn" onClick={()=>this.bookClass(cl)}>Book Class</button>:null}
            {(isStudent &&  cl.StudentEmail) ? <span className="tag tag-registered"><i className="fa fa-id-badge"></i> &nbsp;Registered</span>:null}
            {((cl.StudentEmail && isStudent)|| !isStudent)?<a target="_blank" href={cl.MeetingLink}><button className="card-btn" disabled={!allowJoinClass} onClick={()=>this.bookClass(cl)}>Join Class</button></a>:null}
        </div>
        
      </div>
      
      //  
      // <div className="card">
      //       <div className="topic" style={!cl.active ? {backgroundColor:'gray'}:{}}>{cl.Topic}</div>
      //       <span className="sublabel" style={{ marginTop: "10px", textAlign: "center" }}>
      //         <b>{window.getUserLocalDate(cl.Date).toDateString("en-US")} <br /> 
      //         {window.formatAMPM(new Date( Date.parse(cl.Date.replace(/-/g, '/')) - ((new Date().getTimezoneOffset())*(60000))))}
      //           </b>
      //       </span>
      //       <b className="sublabel" >About:</b>
      //       <div className="desc">{cl.Description}</div>
      //       <br />
      //       <div><b>Duration:</b> 40 Minutes</div><br />
      //       {isStudent ? <div><b>Price:</b> FREE<br/></div> : ''}
      //       <div><b>By:</b> {cl.TutorName}</div>
      //       {(isStudent &&  cl.StudentEmail) ? <span className="tag">Registered</span>:null}
      //       {!isStudent ? <span className="tag">{cl.Attendee + ' / ' + cl.MaxStudents}</span> :''}
      //       {isStudent && cl.active && cl.StudentEmail?<div className="registered-user-msg"><br/><br/><b>Thank you for registering!</b> <p>We will share class joining details via email soon.</p></div>:null}
      //       <br />
      //       <br />
      //       {cl.active && !isStudent ? <div className="registered-user-msg"><b>Thank you for teaching!</b> <p>We will share class joining details via email soon.</p></div> : null}
      //       <br />
      //       <span>Share it with your friends - </span>
      //       <div>
      //         <a style={{ marginRight: "8px" }} href="http://www.facebook.com/sharer.php?u=http://www.classtree.in" target="_blank"><img src="https://image.flaticon.com/icons/svg/1384/1384053.svg" alt="Facebook" className="shared-svg" /></a>
      //         <a href="http://www.linkedin.com/shareArticle?mini=true&url=http://www.classtree.in" target="_blank"><img src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="Linkedin" className="shared-svg" /></a>
      //       </div>
      //       {!cl.active ? <button style={{ backgroundColor: "lightgrey", fontWeight: "bold", fontSize: "20px" }} className="card-btn">Registration closed</button> : null}
      //       {!cl.StudentEmail && isStudent && cl.active?
      //       <button className="card-btn" onClick={()=>this.bookClass(cl)}>Book Class</button>:null}
      //       {(cl.StudentEmail|| !isStudent) && cl.MeetingLink && isClassGoingOn ?
      //       <a target="_blank" href={cl.MeetingLink}><button className="card-btn" onClick={()=>this.bookClass(cl)}>Join Class</button></a>:null}
      //     </div>

    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    classes: state.classes.TeacherClasses,
    email:  state.classes.userEmail,
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
