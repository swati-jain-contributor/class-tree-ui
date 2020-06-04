import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory, Route, IndexRoute, Switch } from 'react-router';
import Snackbar from 'material-ui/Snackbar';
import ValidationService from '../common/Validation';
import LoginEmail from '../LoginEmail/LoginEmail';
import LoginName from '../LoginName/LoginName';
import AddClass from '../Tutor/AddClass';

class Overlay extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state ={
      popup: false,
      showEmail:false,
      showName:false,
      showAddClass:false
    };
    this.login = this.login.bind(this);
    this.addClass = this.addClass.bind(this);
  }

  componentDidMount() {
    window.addEventListener("askLogin", this.login);
    window.addEventListener("addClass", this.addClass);
    if (this.getQueryParams("login", location.href))
      this.setState({ popup: true, showEmail: true, showName: false, firstLoad: true });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.login == true && !nextProps.email) {
      this.setState({ popup: true, showEmail: true, showName: false, firstLoad: true });
    }
    else {
      if (!this.state.firstLoad) {
        if ((nextProps.email && nextProps.name) || (!nextProps.email && !nextProps.name)) {
          this.setState({ popup: false, showEmail: false, showName: false });
        }
        else
          this.setState({ popup: true, showEmail: false, showName: true });
      }
      else
        this.setState({ firstLoad: false });
    }
    if(nextProps.email && !nextProps.name){
      this.setState({ showEmail: false, showName: true, popup: true });
    }
    if(nextProps.email && nextProps.name){
      let evt = new CustomEvent('userloggedin', { nextProps});
      window.dispatchEvent(evt);
    }
    if(nextProps.email && nextProps.name && this.state.addingClass){
      this.addClass();
    }
  }
  componentDidUpdate(){
    if (this.state.addingClass && this.props.email && this.props.name) {
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
    if (!this.props.email) {
      this.setState({ showEmail: true, showName: false, popup: true, addingClass: true });
    }
    else
      this.setState({ popup: true, showAddClass: true, addingClass:false });
  }
  login() {
    this.setState({ showEmail: true, showName: false, popup: true});
  }
  render() {
    return (
      <div>
        <div className={this.state.popup ? "overlay" : ""} onClick={() => { !this.state.showName && this.setState({ popup: false, showAddClass: false, showEmail: false }); }} />
        {this.state.showEmail ? <LoginEmail type="C" /> : null}
        {this.state.showName ? <LoginName type="C" /> : null}
        {this.state.showAddClass ? <AddClass onClose={(classNotAdded) => { this.setState({ popup: false, showAddClass: false }); if (!classNotAdded) { window.dispatchEvent(new CustomEvent('classadded', { }));  window.showSuccessToast("Thanks! Your class scheduled successfully!"); } }} /> : null}
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
  };
}

Overlay.contextTypes = {
  router: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
