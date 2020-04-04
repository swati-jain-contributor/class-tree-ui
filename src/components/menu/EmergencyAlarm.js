import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import membersApi from '../../api/membersApi';

class EmergencyAlarm extends React.Component {
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
    this.state = {};
    window.raiseAnalyticsEvent("ALARM_RANGED");
    if (window.plugins && Media) {
      var snd =  new Media("file:///android_asset/www/somebody_help_me.mp3");
      snd.play();
    }
  }
  render() {

    return (

      <div className="society-funds">
        <div className="popup-content">
          <i className="fa fa-times" onClick={this.props.onClose} aria-hidden="true"></i>
          <div className="alarm-container">
            <div className="help-box"></div>
            <span className="big">{this.props.memberInNeed.name} needs your help.</span>
            <table>
              <tr>
                <td>Name:</td>
                <td>{this.props.memberInNeed.name}</td>
              </tr>
              <tr>
                <td>Flat:</td>
                <td>{this.props.memberInNeed.flat}</td>
              </tr>
              <tr>
                <td>Block:</td>
                <td>{this.props.memberInNeed.block}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{this.props.memberInNeed.phone}</td>
              </tr>
            </table>
            <span className="fine">Go! Rescue him NOW!</span>
          </div>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmergencyAlarm);