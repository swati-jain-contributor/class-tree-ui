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
import TimePicker from 'react-time-picker';
// import 'bootstrap-material-datetimepicker/dist/index';
// // import {
// //   MuiPickersUtilsProvider,
// //   KeyboardTimePicker,
// //   KeyboardDatePicker
// // } from '@material-ui/pickers';
// import TimeInput from 'material-ui-time-picker';


class Tutor extends React.Component {
  componentDidMount() {
    
    // this.$el = $(this.el);
    // this.$el.timepicker({
    //         uiLibrary: 'bootstrap4'
    //     });
  }
  componentWillUnmount() {
    // this.$el.timepicker('destroy');
  }


  constructor(props, context) {
    super(props, context);
    this.state = {
      classData: {
        topic: "",
        description: ""
      },
      step: 1
    };
    this.addClass = this.addClass.bind(this);
    this.closeClass = this.closeClass.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getClasses = this.getClasses.bind(this);
    this.addName = this.addName.bind(this);
    // this.initiateDatepicker=this.initiateDatepicker.bind(window);
    // this.addTimepicker=this.addTimepicker.bind(this);
    
  }

  
  componentDidUpdate() {
    window.initiateDatepicker(this);
    // console.log("kashd");
    // setTimeout(()=>{
    //   if($('[name="startTime"]').length>0){
    //     $('[name="startTime"]').timepicker({
    //       uiLibrary: 'bootstrap4'
    //   });
    // }
    //   if($('[name="endTime"]').length>0){
    //     $('[name="endTime"]').timepicker({
    //       uiLibrary: 'bootstrap4'
    //   });
    //   }
    // },0);
    
  }
    
  
  onChange(event) {
    const field = event.target.name;
    let classData = this.state.classData;
    classData[field] = event.target.value;
    return this.setState({ classData: classData });
  }
  addClass(event) {
    this.state.classData.date = new Date(this.state.classData.date );
    this.props.actions.addClass(this.state.classData);
    this.setState({ classData: {
      email:this.props.email,
      name: this.state.classData.name,
      phoneNo:this.state.classData.phoneNo
    } });
    this.getClasses();
  }
  addName(event) {
    this.props.actions.addTeacherData({
      email:this.props.email,
      name: this.state.classData.name,
      phoneNo:this.state.classData.phoneNo
    });
  }
  getClasses() {
    this.props.actions.addTeacherData({
      email:this.state.classData.email,
      name: null,
      phoneNo:null
    });
    this.props.actions.getClasses({
      email: this.state.classData.email,
      type: "T"
    });
    this.setState({ step: 1 });
  }
  closeClass() {
    this.props.cancel();
  }
  
  render() {
    return (
      <div className="col-block  view-holder">
        
        
        <div>
          {!this.props.email ?
            <div className="content-box">
              <div className="banner"><span>A <b>Teacher</b> plants a seed of knowledge to produce <b>Tomorrow's Dreams</b></span></div>
              <div className="thank-note"><span>We appreciate efforts you are making to make people learn.. &nbsp;&nbsp;   <i className="fa fa-thumbs-up" aria-hidden="true"></i></span></div>
              
              <br/>
              <br/>
              <br/>
              <label className="big-label">Your Email Address</label> &nbsp;&nbsp;&nbsp;&nbsp;<br/>
              <input className="big-input" placeholder="Email" type="text" name="email" value={this.state.classData.email} onChange={this.onChange} /> <br/>
              <button type="submit" className="submit-btn" onClick={this.getClasses}>Submit</button> </div> : null}

          {this.props.classes && this.props.classes.length == 0 && this.props.email && !this.props.name ?
            <div className="content-box">
              <div className="banner"><span>A <b>Teacher</b> plants a seed of knowledge to produce <b>Tomorrow's Dreams</b></span></div>
              <div className="thank-note"><span>We appreciate efforts you are making to make people learn.. &nbsp;&nbsp;   <i className="fa fa-thumbs-up" aria-hidden="true"></i></span></div>
              <br/>
              <br/>
              <span style={{fontSize:"18px"}} >Hey! Welcome to <b>ClassTree!!</b></span>
              <br/>
              <br/>
              <span>You are a <b>new member</b>, please help us with your name and phone number to create an account for you!</span>

              <br/>
              <br/>
              <label className="big-label">Name</label><br/>
              <input className="big-input" placeholder="name" maxLength="50" type="text" name="name" value={this.state.classData.name} onChange={this.onChange} /><br/>
              <br/>
              <br/>
              
              <label className="big-label">Phone Number</label><br/>
              <input className="big-input" placeholder="Phone Number" maxLength="10" type="text" name="phoneNo" value={this.state.classData.phoneNo} onChange={this.onChange} /><br/>
              <br/>
              <br/>
              <button  type="submit" className="submit-btn" onClick={this.addName} >Submit</button>
            </div> : null
          }
        </div>
        {this.props.name && this.props.email ? <div className="content-box">
        <div className="banner"><span>A <b>Teacher</b> plants a seed of knowledge to produce <b>Tomorrow's Dreams</b></span></div>
              <div className="thank-note"><span>We appreciate efforts you are making to make people learn.. &nbsp;&nbsp;   <i className="fa fa-thumbs-up" aria-hidden="true"></i></span></div>  
          <h1>Hello {this.props.name}</h1>
          <div className="card">
            {/* {this.state.step == 0 ? <div className=" add-more"><span>Do you want to Want to teach ?? </span>
              <button className="submit-btn" onClick={() => { this.setState({ step: 1 }); }}>Add Class</button></div> : null} */}
            {this.state.step == 1 ? <div>
              <div>
                <label>Topic</label><br />
                <input type="text" name="topic" value={this.state.classData.topic} onChange={this.onChange} />
              </div>
              <div>
                <label>Description</label><br />
                <textarea type="text" maxLength="200" placeholder="Type about your experience and topics you are going to cover in your class" rows="4" name="description" value={this.state.classData.description} onChange={this.onChange} />
              </div>
              <div><label>Date</label>
                <input type="text" name="date" value={this.state.classData.date} onChange={this.onChange} /></div>
              <div className="time-row">
        
                <input type="text" style={{width:"100px", float:"left"}} name="startTime" value={this.state.classData.startTime} onChange={this.onChange} />
                <span>to</span>
              
                <input style={{width:"100px", float:"right"}} type="text" name="endTime" value={this.state.classData.endTime} onChange={this.onChange} />
                </div>
              <div><label>Max Students</label>
                <input type="number" min="1" max="40" name="maxStudents" value={this.state.classData.maxStudents} onChange={this.onChange} /></div>
                <button className="card-btn" onClick={this.addClass}>Add Class</button>
            </div>
              
            : null}
{/* 
            {this.state.step == 3 ?
              <div>
                <span>Class Added Successfully</span>
                <i className="fa fa-times" aria-hidden="true" onClick={this.getClasses}></i>
              </div> : null
            } */}

          </div>
          {this.props.classes.map((cl, i) => <div className="card" key={i}>

            <div className="topic">{cl.Topic}</div>
            <b className="sublabel" style={{marginTop:"18px"}}>About:</b>
            <div className="desc">{cl.Description}</div>
            <span className="sublabel"><b>Class Time:</b> &nbsp;&nbsp;{new Date(cl.Date).toDateString("en-US")}</span>
            <span>{cl.StartTime}  to {cl.EndTime}</span>
            <br/>
            <div><b>By:</b> {cl.TutorName}</div>
            <span className="tag">{cl.Attendee + ' / ' + cl.MaxStudents}</span>
            <br/>
            {cl.Attendee + ' Students Registered So far'}
            <br/>
            <br/>
            <span>Share it with your friends - </span>
            <div>
            <a style={{marginRight:"8px"}} href="http://www.facebook.com/sharer.php?u=http://www.classtree.in" target="_blank"><img src="https://image.flaticon.com/icons/svg/1384/1384053.svg" alt="Facebook" className="shared-svg"/></a>
            <a href="http://www.linkedin.com/shareArticle?mini=true&url=http://www.classtree.in" target="_blank"><img src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="Linkedin" className="shared-svg"/></a>
            </div>
            {/* <button className="card-btn"></button> */}
          </div>)}
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


// <i className="fa fa-times" aria-hidden="true" onClick={this.props.onCancel}></i>
// <h1>Thank you for putting time in this noble cause <i className="fa fa-thumbs-up" aria-hidden="true"></i></h1>
// {!this.state.classAdded ? 
// <form id="group-form">
// <div className="col-xs-6">
//   <TextField hintText="Topic" name="topic"  value={this.state.classData.topic} onChange={this.onChange} >
//     <input required name="topic"  maxLength="100"/>
//   </TextField>
//   </div>
//   <div className="col-xs-6">
//   <TextField hintText="Maximum number Of students" name="maxStudents"  value={this.state.classData.maxStudents} onChange={this.onChange} >
//     <input required name="maxStudents"  maxLength="100"/>
//   </TextField>
//   </div>
//   <div className="col-xs-12">
//   <TextField
//   id="standard-multiline-static"
//   label="Multiline"
//   hintText="Description"
//   name="description"
//   onChange={this.onChange} 
// />

//   </div>
//   <div className="col-xs-6">
//   <TextField hintText="Start Time" name="startTime"  value={this.state.classData.startTime} onChange={this.onChange} >
//     <input required name="startTime"  maxLength="100"/>
//   </TextField>
//   </div>
//   <div className="col-xs-6">
//   <TextField hintText="End Time" name="endTime"  value={this.state.classData.endTime} onChange={this.onChange} >
//     <input required name="endTime"  maxLength="100"/>
//   </TextField>
//   </div>
//   <div className="col-xs-6">
//   <TextField hintText="Date" name="date"  value={this.state.classData.date} onChange={this.onChange} >
//     <input required name="date"  maxLength="100"/>
//   </TextField>
//   </div>
// <div className="col-xs-12">
//   <button type="button"  className=" sec-button" onClick={this.addClass}>Register Class</button>
//   <button type="button" className="sec sec-button" onClick={this.props.onCancel}>Cancel</button>
// </div>
// </form>
// :null}
// {this.state.classAdded?<div>Class added successfully. You will get an email shortly.
//   You can share your class to people.

// <a href="http://www.facebook.com/sharer.php?u=http://www.example.com" target="_blank">Share to FaceBook</a>


// <a href="http://twitter.com/share?url=http://www.example.com&text=Simple Share Buttons&hashtags=simplesharebuttons" target="_blank">Twitter</a>


// <a href="https://plus.google.com/share?url=http://www.example.com" target="_blank">Google+</a>


// <a href="http://www.digg.com/submit?url=http://www.example.com" target="_blank">Digg</a>


// <a href="http://reddit.com/submit?url=http://www.example.com&title=Simple Share Buttons" target="_blank">Reddit</a>


// <a href="http://www.linkedin.com/shareArticle?mini=true&url=http://www.example.com" target="_blank">LinkedIn</a>


// <a href="javascript:void((function()%7Bvar%20e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','http://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)%7D)());">Pinterest</a>


// <a href="http://www.stumbleupon.com/submit?url=http://www.example.com&title=Simple Share Buttons" target="_blank">StumbleUpon</a>


// <a href="mailto:?Subject=Simple Share Buttons&Body=I%20saw%20this%20and%20thought%20of%20you!%20 http://www.example.com">Email</a>
// </div>:null}
