import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import HighlightOff from '@material-ui/icons/HighlightOff';
import Send from '@material-ui/icons/Send';

import './ChatComponent.less';
import { Tooltip } from '@material-ui/core';

export default class ChatComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
      message: '',
    };
    this.chatScroll = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handlePressKey = this.handlePressKey.bind(this);
    this.close = this.close.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }


  componentDidMount() {
    //.user.getStreamManager().stream
    this.props.session.on('signal:chat', (event) => {
      const data = JSON.parse(event.data);
      let messageList = this.state.messageList;
      messageList.push({ connectionId: event.from.connectionId, nickname: data.nickname, message: data.message });
      console.log(event.from.connectionId);
      console.log(this.props.user.getConnectionId());
      let app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
      if (event.from.connectionId !== this.props.user.getConnectionId() && !app)
        window.notifyMe(data.nickname, data.message);
      // const document = window.document;
      setTimeout(() => {
        // const userImg = document.getElementById('userImg-' + (this.state.messageList.length - 1));
        // const video = document.getElementById('video-' + data.streamId);
        // const avatar = userImg.getContext('2d');
        // avatar.drawImage(video, 200, 120, 285, 285, 0, 0, 60, 60);
        this.props.messageReceived();
      }, 50);
      this.setState({ messageList: messageList });
      this.scrollToBottom();
    });
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handlePressKey(event) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }

  sendMessage() {
    console.log(this.state.message);
    //, streamId: this.props.user.getStreamManager().stream.streamId
    if (this.props.user && this.state.message) {
      let message = this.state.message.replace(/ +(?= )/g, '');
      if (message !== '' && message !== ' ') {
        const data = { message: message, nickname: this.props.user.getNickname() };
        this.props.session.signal({
          data: JSON.stringify(data),
          type: 'chat',
        });
      }
    }
    $('textarea').blur();
    this.setState({ message: '' });
  }

  scrollToBottom() {
    setTimeout(() => {
      try {
        this.chatScroll.current.scrollTop = this.chatScroll.current.scrollHeight;
      } catch (err) {
        console.log("asd");
      }
    }, 20);
  }

  close() {
    this.props.close(undefined);
  }

  render() {
    const styleChat = { display: this.props.chatDisplay };
    return (
      <div id="chatContainer" className={this.state.hasFocus ? "typing" : ""}>
        <div id="chatComponent" style={styleChat}>
          <div id="chatToolbar">
            <span>CHAT</span>
            <IconButton id="closeButton" onClick={this.close}>
              <HighlightOff color="secondary" />
            </IconButton>
          </div>
          <div className="message-wrap" ref={this.chatScroll}>
            {this.state.messageList.map((data, i) => (
              <div
                key={i}
                id="remoteUsers"
                className={
                  'message' + (data.connectionId !== this.props.user.getConnectionId() ? ' left' : ' right')
                }
              >
                <canvas id={'userImg-' + i} width="60" height="60" className="user-img" />
                <div className="msg-detail">
                  <div className="msg-info">
                    <p> {data.nickname}</p>
                  </div>
                  <div className="msg-content">
                    <span className="triangle" />
                    <p className="text">{data.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div id="messageInput">
            <textarea
              placeholder="Send a messge"
              id="chatInput"
              rows="2"
              value={this.state.message}
              onChange={this.handleChange}
              onKeyPress={this.handlePressKey}
              onFocus={() => this.setState({ "hasFocus": true })}
              onBlur={() =>  this.setState({ "hasFocus": false  })}
            />
            <Tooltip title="Send message">
              <Fab size="small" id="sendButton" onClick={this.sendMessage}>
                <Send />
              </Fab>
            </Tooltip>
          </div>
        </div>
      </div>
    );
  }
}
