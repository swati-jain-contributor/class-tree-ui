import PropTypes from 'prop-types';
import React from 'react';

import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as classActions from '../../actions/classActions';
import ValidationService from '../common/Validation';
import LoginEmail from '../LoginEmail/LoginEmail';
import LoginName from '../LoginName/LoginName';
import Card from '../Card/Card';


class Registered extends React.Component {

  componentWillReceiveProps(nextProps) {
    let classesNP = nextProps.classes;
    if (!classesNP)
      classesNP = [];
    if (nextProps.search) {
      let classes = classesNP.filter(cl =>
        this.checkParam(cl, 'Topic', nextProps.search) || this.checkParam(cl, 'Description', nextProps.search) || this.checkParam(cl, 'RegisteredName', nextProps.search));
      this.setState({ classes });
    }
    else
      this.setState({ classes: classesNP });
    if ((nextProps.email && nextProps.name) || (!nextProps.email && !nextProps.name))
      this.setState({ popup: false, showEmail: false, showName: false });
    else
      this.setState({ popup: true, showEmail: false, showName: true });
  }
  checkParam(cl,field,search){
    return cl[field] && cl[field].toLowerCase().indexOf(search.toLowerCase())>-1;
   }
  constructor(props, context) {
    super(props, context);
    this.state = {
      classes:[]
    };
  }
  
  componentDidMount(){
    this.props.actions.getClasses({
      email: this.props.email,
      type:'R'
    });
  }
  render() {
    let banner = (<div><div className="banner"><span>Beautiful thing about <b>Learning</b> is that no one can take it away from you...</span></div>
    <div className="thank-note"><span>We appreciate efforts you are making to grow yourself.. &nbsp;&nbsp;   <i className="fa fa-thumbs-up" aria-hidden="true"></i></span></div></div>);
    return (
      <div className="col-block  view-holder">
        {(!this.props.email || !this.props.name ) ? 
        <div>
          {banner}
          <br />
          <br />

          <span>Please login/signup, so we can get your details</span>
          <br />
          <button className="submit-btn secondary" onClick={() =>
            !this.props.email ?
              this.setState({ showEmail: true, showName: false, popup: true }) :
              this.setState({ showEmail: false, showName: true, popup: true })} >Login / Signup</button>
        </div> :
          <div className="content-box">
            {( this.state.classes.length == 0) ?
              <div>
                {this.props.classes.length==0?
                <span>
                  You have not registered for any class yet. 
                  <br/>
                   Register your first class now.
                </span>:<span>
                  No registered classes are found. Change your search criteria or book a class now
                  </span>}
                  <br />
                  <br />
                  <button className="submit-btn" onClick={()=> this.context.router.push('/student')}>Book class</button>
              </div> :
              
                this.state.classes.map((cl, i) => <Card type="C" key={i} class={cl} />)}
          </div>}
        <div className={this.state.popup ? "overlay" : ""} onClick={()=>{!this.state.showName && this.setState({ popup: false, showAddClass: false , showEmail:false});}}></div>
        {this.state.showEmail ? <LoginEmail type="R" /> : null}
        {this.state.showName ? <LoginName type="R" /> : null}
      </div>
    );
  }
}
Registered.contextTypes = {
  router: PropTypes.func.isRequired
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Registered);
