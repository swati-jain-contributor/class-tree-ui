//import PropTypes from 'prop-types';
import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../../actions/sessionActions';
import  Login from './login.js';
import  Register from './register';
import './loginpopup.less';

class LoginPopup extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      showLogin: true
    };

  }

  componentDidMount() {

  }

  render() {
    let islogin = this.state.showLogin;
    return (
      <div className="popup">
        <i className="fa fa-times" onClick={()=>this.props.onClose()}/>
        <div className="row">
          <a className={"register " + (islogin ? "" : "active")} onClick={()=>this.setState({showLogin:false})}><div>Sign up</div></a>
          <a className={"login " + (islogin ? "active" : "")}  onClick={()=>this.setState({showLogin:true})}><div>Login</div></a>
        </div>
        <div className="form-content">
          {islogin ? <Login/> : <Register/>}
        </div>
      </div>

    );
  }
}

function mapStateToProps(state, ownProps) {

  return {
    
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopup);
