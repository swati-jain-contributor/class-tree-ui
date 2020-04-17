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
import AddClass from '../Tutor/AddClass';
import Card from '../Card/Card';

class Student extends React.Component {
  componentWillReceiveProps(nextProps){
    
    let classesNP = nextProps.classes;
    if(!classesNP)
      classesNP=[];
   if(nextProps.search){
     let classes = classesNP.filter(cl=>
      this.checkParam(cl,'Topic',nextProps.search) || this.checkParam(cl,'Description',nextProps.search) || this.checkParam(cl,'TutorName',nextProps.search) );
     this.setState({classes});
   } 
   else
    this.setState({classes: classesNP});
    if((nextProps.email && nextProps.name) || (!nextProps.email && !nextProps.name))
      this.setState({popup:false, showEmail:false,showName:false});
    else
    this.setState({popup:true, showEmail:false,showName:true});
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
    this.getClasses = this.getClasses.bind(this);
    this.bookClass=this.bookClass.bind(this);
    this.search = this.search.bind(this);
    
  }

  getClasses(){
    this.props.actions.getClasses({
      email: this.props.email,
      type:'C'
    });
  }
  componentDidMount(){
    this.getClasses();
  }
  componentDidUpdate() {

  }
  
  checkParam(cl,field,search){
   return cl[field] && cl[field].toLowerCase().indexOf(search.toLowerCase())>-1;
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
 
  bookClass(cl){
    if(this.props.email && this.props.name){
      this.props.actions.bookClass({
        "classId" : cl.id,
        "email":this.props.email,
        "phoneNo":this.props.phoneNo,
        "rating":"5",
        "name":this.props.name
      });
      window.showSuccessToast("Congratulations! Class Registered successfully!");
    }
    else
      !this.props.email ? this.setState({showEmail:true,showName:false, popup:true}) : this.setState({showEmail:false,showName:true,popup:true});
  }
  closeClass() {
    this.props.cancel();
  }
  render() {
    return (
      <div className="col-block  view-holder">
        <div className="content-box clearfix">
          {this.state.classes ? this.state.classes.map((cl, i) => <Card type="C" key={i} class={cl} bookClass={this.bookClass}/>) : null}
          {(this.props.name && this.props.email) ? 
          <button className="add-class-btn" onClick={() => this.setState({ popup: true, showAddClass: true })}><span>{window.innerWidth>700?'Add Class' : '+'}</span></button> :null}
          
          <div className={this.state.popup ? "overlay" :""}></div>
          {this.state.showEmail? <LoginEmail type="C"/> :null}
        {this.state.showName? <LoginName type="C"/> :null}
        {this.state.showAddClass ? <AddClass onClose={() => { this.setState({ popup: false, showAddClass: false }); this.getClasses(); window.showSuccessToast("Thanks! Your class scheduled successfully!"); }} /> : null}
        </div> 
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

  return {
    classes: state.classes.AllClasses,
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

export default connect(mapStateToProps, mapDispatchToProps)(Student);
