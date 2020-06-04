import PropTypes from 'prop-types';
import React from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as classActions from '../../actions/classActions';
import ValidationService from '../common/Validation';
import { checkELValidity, checkValidity, onChange } from '../Utils';
import VideoRoomComponent from '../../video-call/components/VideoRoomComponent';
import '../../video-call/index.css';
import axios from 'axios';
// import registerServiceWorker from '../../video-call/registerServiceWorker';
// registerServiceWorker();
class VideoClass extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      token: null
    };
  }
  getQueryParams(params, url) {
    let href = url;
    //this expression is to get the query strings
    let reg = new RegExp('[?&]' + params + '=([^&#]*)', 'i');
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : null;
  }
  render() {
    return (
      <div className="class-panel">
        <VideoRoomComponent userdata={JSON.parse(atob(this.getQueryParams("token",location.href)))}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

  return {
    email: ownProps.type == "T" ? state.classes.userEmail : state.classes.userEmail,
    name: ownProps.type == "T" ? state.classes.userName : state.classes.userName,
    phoneNo: ownProps.type == "T" ? state.classes.userPhone : state.classes.userPhone
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(classActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoClass);
