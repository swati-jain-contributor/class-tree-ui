import React, { Component } from 'react';
import './StreamComponent.less';
import OvVideoComponent from './OvVideo';

import MicOff from '@material-ui/icons/MicOff';
import VideocamOff from '@material-ui/icons/VideocamOff';
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeOff from '@material-ui/icons/VolumeOff';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import HighlightOff from '@material-ui/icons/HighlightOff';
import FormHelperText from '@material-ui/core/FormHelperText';


export default class StreamComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { nickname: this.props.user.getNickname(), mutedSound:  this.props.mutedSound};
    this.toggleSound = this.toggleSound.bind(this);
  }

  toggleSound() {
    this.setState({ mutedSound: !this.state.mutedSound });
  }
  render() {
    return (
      <div className="OT_widget-container">
        <div className="pointer nickname">
          <div>
            {window.innerWidth>900 ? <span id="nickname">{this.props.user.getNickname()}</span> : null} 
          </div>
        </div>

        {this.props.user !== undefined && this.props.user.getStreamManager() !== undefined ? (
          <div className="streamComponent">
            <OvVideoComponent user={this.props.user} mutedSound={this.state.mutedSound} />
            <div id="statusIcons">
              {!this.props.user.isVideoActive() ? (
                <div id="camIcon">
                  <VideocamOff id="statusCam" />
                </div>
              ) : null}

              {!this.props.user.isAudioActive() ? (
                <div id="micIcon">
                  <MicOff id="statusMic" />
                </div>
              ) : null}
            </div>
            <div>
              {!this.props.user.isLocal() && (
                <IconButton id="volumeButton" onClick={this.toggleSound}>
                  {this.state.mutedSound ? <VolumeOff color="secondary" /> : <VolumeUp />}
                </IconButton>
              )}
            </div>
            <div>
              {
                this.props.canControlSize ? (
                  <i className={"fa control " + (this.props.user.isFullScreen ? "fa-compress" : "fa-expand")} onClick={this.props.toggleScreen} />
                ) : null
              }
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
