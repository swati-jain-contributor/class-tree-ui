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
import LoginEmail from '../LoginEmail/LoginEmail';
import LoginName from '../LoginName/LoginName';
import Card from '../Card/Card';

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
    let banner = (<div><div className="banner"><span>Beautiful thing about <b>Learning</b> is that no one can take it away from you...</span></div>
    <div className="thank-note"><span>We appreciate efforts you are making to grow yourself.. &nbsp;&nbsp;   <i className="fa fa-thumbs-up" aria-hidden="true"></i></span></div></div>);
    return (
      <div className="col-block  view-holder">
        {!this.props.email ?
            <div className="content-box clearfix">
              {banner}
              <LoginEmail type="C"/>
              </div> : null}

              {this.props.email && !this.props.name ?
            <div className="content-box clearfix">
              {banner}
              <LoginName type="C"/>
            </div> : null
          }
        
        {this.props.name && this.props.email ? <div className="content-box clearfix">
          {banner}

          <h1 className="greet-user">Hello {this.props.name}</h1>
          <input className="big-input search-box" placeholder="I'd like to learn about.." type="text" name="search" value={this.state.search} onChange={this.search} /><br/>
          {this.state.classes.map((cl, i) => <Card type="C" key={i} class={cl}/>)}

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
