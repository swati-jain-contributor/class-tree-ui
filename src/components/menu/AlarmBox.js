import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import membersApi from '../../api/membersApi';
import * as ajaxActions from '../../actions/ajaxStatusActions';

class AlarmBox extends React.Component {
  componentWillReceiveProps(nextProps) {

  }
  componentDidMount() {
    document.addEventListener("backbutton", this.handleBackButton, false);
  }
  componentWillUnmount() {
    document.removeEventListener("backbutton", this.handleBackButton, false);
  }
  handleBackButton() {
    this.props.onClose();
  }
  constructor(props, context) {
    super(props, context);
    this.handleBackButton = this.handleBackButton.bind(this);
    this.ringAlarm = this.ringAlarm.bind(this);
    this.state={};
    window.raiseAnalyticsEvent("HELP_CHECKED");
  }
  ringAlarm() {
    this.props.ajaxActions.beginAjaxCall();
    membersApi.ringAlarm().then(function () {
      this.props.ajaxActions.ajaxCallError();
      this.setState({
        alarmSent: true
      });
    }.bind(this)).catch(function () {
      this.props.ajaxActions.ajaxCallError();
      alert("Please check your internet connection");
    });
  }
  render() {

    return (

      <div className="society-funds">
        <div className="popup-content">
          <i className="fa fa-times" onClick={this.props.onClose} aria-hidden="true"></i>
          {!this.state.alarmSent ?
            <div className="alarm-container">
              <label>Emergency???</label>
              <span>In case of emergency</span>
              <span className="big">KEEP CALM</span>
              <span>and</span>
              <span className="big">PRESS</span>
              <div onClick={this.ringAlarm} className="alarm-btn">
                <div  className="inner-round">
                  <span>ALERT</span>
                </div>
              </div>
            </div> : null}
          {this.state.alarmSent ?
            <div  className="alarm-container">
              <div className="help-box"></div>
              <span className="info">We have informed your neighbours</span>
              <span className="info">They are coming to rescue you</span>
              <span className="big">STAY CALM</span>
              <span>and</span>
              <span className="big">RELAX</span>
              <span className="fine">Everything will be fine!</span>
            </div> : null}
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
    ajaxActions: bindActionCreators(ajaxActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AlarmBox);