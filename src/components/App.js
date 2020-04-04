// This component handles the App template used on every page.
import React, { PropTypes } from 'react';
import Header from './common/Header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as loginActions from '../actions/loginActions';
import Snackbar from 'material-ui/Snackbar';
import Tutor from '../components/Tutor/Tutor';
import Student from '../components/Student/Student';

class App extends React.Component {
  // componentWillReceiveProps(nextProps) {
    
  //   if (nextProps.errorMsg && nextProps.errorMsg !="") {
  //     console.log("Props Updated");
  //     this.setState({
  //       open: true,
  //       errorMsg:nextProps.errorMsg
  //     });
  //     setTimeout(function () {
  //       this.props.actions.resetErrorMessage("");
  //       this.setState({
  //         open: false,
  //         errorMsg:""
  //       });
  //     }.bind(this), 5000);
  //   }
  // }
  componentDidUpdate() {
    //document.querySelector(".msg-box").scrollTop=document.querySelector(".msg-box").scrollHeight();
    // const node = this.refs;
    // console.log(node);
    if (this.state.start) {
      if (this.state.step>=1) {
        document.querySelector('.col-block').animate({
          top: ['1000px', '40px']
        }, 1000);

        //objDiv.scrollTop = objDiv.scrollHeight;
      } else {
        document.querySelector('.chat-panel').animate({
          left: ['40', '1000px']
        }, 1000);
      }
      this.setState({
        start: false
      });
      
    }
  }
  constructor(context) {
    super(context);
    this.state={
      step:0,
      imageCode: Math.floor(Math.random()*9) + 1
    };
    
  }
  render() {
    return (
      <div className="ss-root">
        <div className="ss-header">By Learning you will teach, By teaching you will learn..</div>
        <img className="bg-image" src={`https://raw.githubusercontent.com/swati-jain-contributor/privacy-policy/master/${this.state.imageCode}.jpg`}></img>
        <div className="overlay"></div>
        <div className="btn-box">
          <button className="main-primary" onClick={()=>this.setState({ step: 2, start:true })}>STUDENT<span>I want to learn</span></button>
          <button className="main-secondary" onClick={()=>this.setState({ step: 1 , start:true})}>TEACHER<span>I want to teach</span></button>
        </div>
        {this.state.step==1?<Tutor onCancel={()=>this.setState({ step: 0, start:true })}/>:null}
        {this.state.step==2?<Student/>:null}
        <p className="disclaimer">ClassTree is a knowledge sharing platform, open to people to share their knowledge with people who are interested in learning. It’s a social platform and meant only for learning and sharing..</p>
      </div>

    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};
App.contextTypes = {
  router: React.PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) { 
  console.log(state.ajaxCallsInProgress); 
  return {
    loading:  state.ajaxCallsInProgress > 0,
    isAuthenticated: state.session.authenticationStatus,
    username: state.session.aptId + "-" + state.session.userId,
    errorMsg: state.session.errorMsg,
    open: state.session.open
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
