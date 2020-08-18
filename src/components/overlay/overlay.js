import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import AddClass from '../Tutor/AddClass';
import LoginPopup from '../login/login-popup';

class Overlay extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state ={
      popup: false,
      showLogin:false,
      showAddClass:false
    };
    this.login = this.login.bind(this);
    this.addClass = this.addClass.bind(this);
  }

  componentDidMount() {
    window.addEventListener("askLogin", this.login);
    window.addEventListener("addClass", this.addClass);
    if (this.getQueryParams("login", location.href))
      this.setState({ popup: true, showLogin:true, firstLoad: true });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.login == true && !nextProps.user) {
      this.setState({ popup: true, showLogin: true, firstLoad: true });
    }
    else {
      if (!this.state.firstLoad) {
        if (nextProps.user) {
          this.setState({ popup: false, showLogin: false});
        }
      }
      else
        this.setState({ firstLoad: false });
    }
    if(!this.props.user && nextProps.user){
      let evt = new CustomEvent('userloggedin', { nextProps});
      window.dispatchEvent(evt);
    }
    if(!this.props.user && nextProps.user && this.state.addingClass){
      this.addClass();
    }
    if(!this.props.user && nextProps.user){
      this.setState({ popup: false, showLogin:false});
    }
  }
  componentDidUpdate(){
    if (this.state.addingClass && this.props.user) {
      this.setState({ popup: true, showAddClass: true, addingClass: false });
    }
  }
  getQueryParams(params, url) {

    let href = url;
    //this expression is to get the query strings
    let reg = new RegExp('[?&]' + params + '=([^&#]*)', 'i');
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : null;
  }
  addClass() {
    if (!this.props.user) {
      this.setState({ showLogin: true, popup: true, addingClass: true });
    }
    else
      this.setState({ popup: true, showAddClass: true, addingClass:false });
  }
  login() {
    this.setState({ popup: true, showLogin:true});
  }
  render() {
    return (
      <div>
        <div className={(this.state.showLogin|| this.state.showAddClass)? "overlay" : ""} onClick={() => { this.setState({ popup: false, showAddClass: false,  showLogin:false }); }} />
        {this.state.showLogin ? <LoginPopup onClose={()=> this.setState({popup:false, showLogin:false})} /> : null}
        {this.state.showAddClass ? <AddClass onClose={(classNotAdded) => { this.setState({ popup: false, showAddClass: false }); if (!classNotAdded) { window.dispatchEvent(new CustomEvent('classadded', { }));  window.showSuccessToast("Thanks! Your class scheduled successfully!"); } }} /> : null}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

  return {
    user:state.session.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}

Overlay.contextTypes = {
  router: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
