import React, { Component } from 'react';
import './ToolbarComponent.less';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Mic from '@material-ui/icons/Mic';
import MicOff from '@material-ui/icons/MicOff';
import Videocam from '@material-ui/icons/Videocam';
import VideocamOff from '@material-ui/icons/VideocamOff';
import Fullscreen from '@material-ui/icons/Fullscreen';
import FullscreenExit from '@material-ui/icons/FullscreenExit';
import PictureInPicture from '@material-ui/icons/PictureInPicture';
import ScreenShare from '@material-ui/icons/ScreenShare';
import StopScreenShare from '@material-ui/icons/StopScreenShare';
import Tooltip from '@material-ui/core/Tooltip';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';

import IconButton from '@material-ui/core/IconButton';

export default class ToolbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { fullscreen: window.innerWidth < 900 ? true : false };
    this.camStatusChanged = this.camStatusChanged.bind(this);
    this.micStatusChanged = this.micStatusChanged.bind(this);
    this.screenShare = this.screenShare.bind(this);
    this.stopScreenShare = this.stopScreenShare.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.leaveSession = this.leaveSession.bind(this);
    this.toggleChat = this.toggleChat.bind(this);
  }


  micStatusChanged() {
    this.props.micStatusChanged();
  }

  camStatusChanged() {
    this.props.camStatusChanged();
  }

  screenShare() {
    this.props.screenShare();
  }

  stopScreenShare() {
    this.props.stopScreenShare();
  }

  toggleFullscreen() {
    this.setState({ fullscreen: !this.state.fullscreen });
    this.props.toggleFullscreen();
  }

  leaveSession() {
    this.props.leaveSession();
  }

  toggleChat() {
    this.props.toggleChat();
  }

  render() {
    const mySessionId = this.props.sessionId;
    const localUser = this.props.user;
    const screenUser = this.props.screenuser;
    let isTutor = localUser !== undefined && localUser.isTutor;

    let app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
    let color = !this.props.isMikeFree ? "white" : (localUser.hasMikeActive() ? "green" : "red");
    console.log(this.props.isMikeFree);
    let micSVG = <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 411.546 411.546"
      version="1.1"
      viewBox="0 0 411.546 411.546"
      xmlSpace="preserve"
      fill={color}
    >
      <path d="M338.96 28.886C320.333 10.259 295.566 0 269.222 0c-20.138 0-39.495 6.018-55.979 17.403-2.912 2.011-4.514 4.396-4.758 7.088-.214 2.353.698 4.678 2.569 6.549l125.752 125.752c1.581 1.58 3.54 2.416 5.666 2.416h.002c3.752 0 6.59-2.628 7.677-4.183 27.389-39.217 22.682-92.266-11.191-126.139zM201.24 45.987c-3.003-3.003-6.037-3.633-8.054-3.633-5.96 0-9.863 5.056-11.265 7.23-12.024 18.649-17.412 41.145-15.171 63.345 2.272 22.518 12.354 43.749 28.386 59.781 18.627 18.627 43.395 28.887 69.741 28.887h.002c19.573 0 38.481-5.713 54.679-16.521 2.013-1.344 5.544-4.87 6.006-9.559.302-3.056-.804-6.01-3.112-8.319L201.24 45.987zM228.797 386.546h-50.916V256.248l38.21-29.667c4.579-3.555 6.81-8.2 6.118-12.743-.692-4.543-4.203-8.313-9.629-10.344-.174-.065-17.558-6.688-29.55-18.68-11.993-11.992-18.617-29.376-18.681-29.546-2.286-6.109-6.766-9.756-11.985-9.756-4.035 0-7.979 2.217-11.104 6.242L48.067 271.789c-6.564 8.454-5.747 21.488 1.821 29.057l17.111 17.111c3.997 3.996 9.7 6.288 15.649 6.289 4.935 0 9.696-1.587 13.407-4.468l56.826-44.12v110.888h-50.916c-6.903 0-12.5 5.597-12.5 12.5s5.597 12.5 12.5 12.5h126.831c6.903 0 12.5-5.597 12.5-12.5s-5.596-12.5-12.499-12.5z" />
    </svg>;

    return (
      <AppBar className="toolbar" id="header">
        <Toolbar className="toolbar">
          <div>
            {
              !isTutor ?
                <IconButton color="inherit" className="micButton"  id="navMicButton" onClick={this.props.studentMikeChange} >
                  {micSVG} <span> {(this.props.isMikeFree && this.props.isMikeFree.nickname) ? "("+ this.props.isMikeFree.nickname  +" is talking)" :""} </span>
                </IconButton> : null
            }
          </div>
          <div className="buttonsContent">
            {isTutor ? <IconButton color="inherit" className="navButton" id="navMicButton" onClick={this.micStatusChanged}>
              {localUser !== undefined && localUser.isTutor && localUser.isAudioActive() ? <Mic /> : <MicOff color="secondary" />}
            </IconButton> : null}

            {isTutor ?
              <IconButton color="inherit" className="navButton" id="navCamButton" onClick={this.camStatusChanged}>
                {localUser !== undefined && localUser.isTutor && localUser.isVideoActive() ? (
                  <Videocam />
                ) : (
                    <VideocamOff color="secondary" />
                  )}
              </IconButton> : null}
            {window.innerWidth > 900 ?
              (!screenUser || !screenUser.isScreenShareActive()) && (
                <IconButton color="inherit" className="navButton is-screen-btn" onClick={this.screenShare}>
                  <ScreenShare />
                </IconButton>
              ) : null}
            {/* <IconButton color="inherit" className="navButton" onClick={this.screenShare}>
              {screenUser !== undefined && screenUser.isScreenShareActive() ? <PictureInPicture /> : <ScreenShare />}
            </IconButton> */}

            {screenUser !== undefined &&
              screenUser.isScreenShareActive() && (
                <IconButton onClick={this.stopScreenShare} id="navScreenButton">
                  <StopScreenShare color="secondary" />
                </IconButton>
              )}

            {!app && <IconButton color="inherit" className="navButton" onClick={this.toggleFullscreen}>
              {localUser !== undefined && this.state.fullscreen ? <FullscreenExit /> : <Fullscreen />}
            </IconButton>}

            <IconButton color="secondary" className="navButton" onClick={this.leaveSession} id="navLeaveButton">
              <PowerSettingsNew />
            </IconButton>
            <IconButton color="inherit" onClick={this.toggleChat} id="navChatButton">
              {this.props.showNotification && <div id="point" className="" />}
              <QuestionAnswer />
            </IconButton>
            <IconButton color="inherit" onClick={() => this.props.toggleParticipant()} id="navParticipantButton">
              <i className="fa fa-user-friends" />&nbsp; ({this.props.count})
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
