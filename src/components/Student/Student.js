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

class Student extends React.Component {
  componentWillReceiveProps(nextProps){
    let classesNP = nextProps.classes;
    if(!classesNP)
      classesNP=[];
   if(this.state.search){
     let classes = classesNP.filter(cl=>
      this.checkParam(cl,'Topic') || this.checkParam(cl,'Description') || this.checkParam(cl,'TutorName') );
     this.setState({classes});
   } 
   else
    this.setState({classes: classesNP});
  }
  constructor(props, context) {
    super(props, context);
    this.state = {
      classData: {
        topic: "",
        description: ""
      },
      step: 0
    };
    this.closeClass = this.closeClass.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getClasses = this.getClasses.bind(this);
    this.addName = this.addName.bind(this);
    this.bookClass=this.bookClass.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidUpdate() {

  }
  onChange(event) {
    const field = event.target.name;
    let classData = this.state.classData;
    classData[field] = event.target.value;
    return this.setState({ classData: classData });
  }
  checkParam(cl,field){
   return cl[field] && cl[field].toLowerCase().indexOf(this.state.search.toLowerCase())>-1;
  }
  search(event){
   let search = event.target.value;
   this.setState({search});
   if(event.target.value){
     let classes = this.props.classes.filter(cl=>
      this.checkParam(cl,'Topic') || this.checkParam(cl,'Description') || this.checkParam(cl,'TutorName') );
     this.setState({classes});
   } 
   else
    this.setState({classes: this.props.classes});
  }
  addName(event) {
    this.props.actions.addStudentData({
      email:this.props.email,
      name: this.state.classData.name,
      phoneNo:this.state.classData.phoneNo
    });
  }
  getClasses() {
    this.props.actions.addStudentData({
      email:this.state.classData.email,
      name: null,
      phoneNo:null
    });
    this.props.actions.getClasses({
      email: this.state.classData.email,
      type:'C'
    });
    this.setState({ step: 0 });
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
  closeClass() {
    this.props.cancel();
  }
  render() {
    return (
      <div className="col-block  view-holder">
        {!this.props.email ?
            <div className="content-box clearfix">
              <div className="banner"><span>Beautiful thing about <b>Learning</b> is that no one can take it away from you...</span></div>
              <div className="thank-note"><span>We appreciate efforts you are making to grow yourself.. &nbsp;&nbsp;   <i className="fa fa-thumbs-up" aria-hidden="true"></i></span></div>
              
              <br/>
              <br/>
              <br/>
              <label className="big-label">Your Email Address</label> &nbsp;&nbsp;&nbsp;&nbsp;<br/>
              <input className="big-input" placeholder="Email" type="text" name="email" value={this.state.classData.email} onChange={this.onChange} /> <br/>
              <button type="submit" className="submit-btn" onClick={this.getClasses}>Submit</button> </div> : null}

              {this.props.email && !this.props.name ?
            <div className="content-box clearfix">
              <div className="banner"><span>Beautiful thing about <b>Learning</b> is that no one can take it away from you...</span></div>
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
              <input className="big-input" maxLength="50" type="text" name="name" value={this.state.classData.name} onChange={this.onChange} /><br/>
              <br/>
              <br/>
              
              <label className="big-label">Phone Number</label><br/>
              <input className="big-input" maxLength="10" type="number" name="phoneNo" value={this.state.classData.phoneNo} onChange={this.onChange} /><br/>
              <br/>
              <br/>
              <button  type="submit" className="submit-btn" onClick={this.addName} >Submit</button>
            </div> : null
          }
        
        {this.props.name && this.props.email ? <div className="content-box clearfix">
        <div className="banner"><span>Beautiful thing about <b>Learning</b> is that no one can take it away from you...</span></div>
              <div className="thank-note"><span>We appreciate efforts you are making to grow yourself.. &nbsp;&nbsp;   <i className="fa fa-thumbs-up" aria-hidden="true"></i></span></div>

          <h1 className="greet-user">Hello {this.props.name}</h1>
          <input className="big-input search-box" placeholder="I'd like to learn about.." type="text" name="search" value={this.state.search} onChange={this.search} /><br/>
          {this.state.classes.map((cl, i) => <div className="card" key={i}>

          <div className="topic" style={!cl.active ? {backgroundColor:'gray'}:{}}>{cl.Topic}</div>
            
            <span className="sublabel"  style={{marginTop:"45px"}}><b>Class Time:</b> &nbsp;&nbsp;{new Date(cl.Date).toDateString("en-US")}</span>
            <span>{cl.StartTime}  to {cl.EndTime}</span>
            <b className="sublabel">About:</b>
            <div className="desc">{cl.Description}</div>
            <br/>
            <div><b>Price:</b> FREE</div>
            <div><b>By:</b> {cl.TutorName}</div>
            {cl.StudentEmail?<span className="tag">Registered</span>:null}
            <br/>
            <br/>
            {cl.StudentEmail?<div className="registered-user-msg"><b>Thank you for registering!</b> <p>We will share class joining details via email soon.</p></div>:null}
            <br/>
            <span>Share it with your friends - </span>
            <div>
            <a style={{marginRight:"8px"}} href="http://www.facebook.com/sharer.php?u=http://www.classtree.in" target="_blank"><img src="https://image.flaticon.com/icons/svg/1384/1384053.svg" alt="Facebook" className="shared-svg"/></a>
            <a href="http://www.linkedin.com/shareArticle?mini=true&url=http://www.classtree.in" target="_blank"><img src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="Linkedin" className="shared-svg"/></a>
            </div>
            {!cl.active ? <button style={{backgroundColor: "lightgrey", fontWeight:"bold", fontSize:"20px" }}className="card-btn">Registration closed</button>:null}
            {!cl.StudentEmail && cl.active?
            <button className="card-btn" onClick={()=>this.bookClass(cl)}>Book Class</button>:null}
          </div>)}
        </div> : null}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

  return {
    classes: state.classes.AllClasses,
    email: state.classes.studentEmail,
    name: state.classes.studentName,
    phoneNo: state.classes.studentPhone
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(classActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Student);
