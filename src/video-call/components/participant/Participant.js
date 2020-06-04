import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import HighlightOff from '@material-ui/icons/HighlightOff';
import Send from '@material-ui/icons/Send';

import './Participant.less';
import { Tooltip } from '@material-ui/core';

export default class Participant extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {

  }


  render() {
    const styleParticipant = { display: this.props.participantDisplay };
    let participants = this.props.participants;
    return (
      <div id="participantContainer">
        <div id="participantComponent" style={styleParticipant}>
          <div id="participantToolbar">
            <span>Participants</span>
            {/* <IconButton id="closeButton" onClick={this.close}>
                            <HighlightOff color="secondary" />
                        </IconButton> */}
          </div>
          <div className="message-wrap">
            {this.props.localUser ? <div className="list-item">{this.props.localUser.nickname + '(You)'}</div> : null}
            {this.props.participants.map((p,i)=><div className="list-item">{p.name} </div>)}
            {/* {Object.keys(this.props.participants).map((p, i) => <div className="list-item" key={i}>
              {participants[p].data ? JSON.parse(participants[p].data.split('%')[0]).clientData : (participants[p] + '  (You) ')}
            </div>
            )} */}
          </div>
        </div>
      </div>
    );
  }
}
