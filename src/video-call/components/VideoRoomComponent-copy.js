import React, { Component } from 'react';
import axios from 'axios';
import './VideoRoomComponent.less';
import { OpenVidu } from 'openvidu-browser';
import StreamComponent from './stream/StreamComponent';
import DialogExtensionComponent from './dialog-extension/DialogExtension';
import ChatComponent from './chat/ChatComponent';
import UserModel from '../models/user-model';
import ToolbarComponent from './toolbar/ToolbarComponent';

let localUser = new UserModel();
let screenShareUser = new UserModel();

class VideoRoomComponent extends Component {
  constructor(props) {
    super(props);
    this.OPENVIDU_SERVER_URL = this.props.openviduServerUrl
      ? this.props.openviduServerUrl
      : 'https://api.bakemnds.coms';
    this.OPENVIDU_SERVER_SECRET = this.props.openviduSecret ? this.props.openviduSecret : 'MY_SECRET';
    let sessionName = this.props.userdata.className ? this.props.userdata.className : 'SessionA';
    let userName = this.props.userdata.username ? this.props.userdata.username : 'OpenVidu_User' + Math.floor(Math.random() * 100);
    this.state = {
      mySessionId: sessionName,
      myUserName: userName,
      session: undefined,
      sessionscreen: undefined,
      localUser: undefined,
      screenShareUser: undefined,
      subscribers: [],
      chatDisplay: 'none',
    };

    this.joinSession = this.joinSession.bind(this);
    this.leaveSession = this.leaveSession.bind(this);
    this.onbeforeunload = this.onbeforeunload.bind(this);
    this.camStatusChanged = this.camStatusChanged.bind(this);
    this.micStatusChanged = this.micStatusChanged.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.screenShare = this.screenShare.bind(this);
    this.stopScreenShare = this.stopScreenShare.bind(this);
    this.closeDialogExtension = this.closeDialogExtension.bind(this);
    this.toggleChat = this.toggleChat.bind(this);
    this.checkNotification = this.checkNotification.bind(this);
    this.toggleScreen = this.toggleScreen.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.onbeforeunload);
    this.joinSession();
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onbeforeunload);
    this.leaveSession();
  }

  onbeforeunload(event) {
    this.leaveSession();
  }

  joinSession() {
    this.OV = new OpenVidu();
    this.setState(
      {
        session: this.OV.initSession()
      },
      () => {
        this.subscribeToStreamCreated();
        this.connectToSession();
      }
    );
  }
  joinScreenSession() {
    this.OVScreen = new OpenVidu();
    this.setState(
      {
        sessionscreen: this.OVScreen.initSession(),
      },
      () => {
        this.connectToSession(true);
      }
    );
  }

  connectToSession(onlyscreen) {
    if (this.props.userdata.isrecording) {
      this.connect("wss://api.bakeminds.com?sessionId=" + this.props.userdata.classId + '&secret=' + "MY_SECRET" + "&recorder=true");
    }
    else {
      this.getToken().then((token) => {
        if (onlyscreen)
          this.state.sessionscreen.connect(token,
            { clientData: this.state.myUserName, type: this.props.userdata.type }
          );
        else
          this.connect(token);
      }).catch((error) => {
        if (this.props.error) {
          this.props.error({ error: error.error, messgae: error.message, code: error.code, status: error.status });
        }
        console.log('There was an error getting the token:', error.code, error.message);
        alert('There was an error getting the token:', error.message);
      });
    }
  }

  connect(token) {
    this.state.session
      .connect(
        token,
        { clientData: this.state.myUserName, type: this.props.userdata.type }
      )
      .then(() => {
        this.connectWebCam();
      })
      .catch((error) => {
        if (this.props.error) {
          this.props.error({ error: error.error, messgae: error.message, code: error.code, status: error.status });
        }
        alert('There was an error connecting to the session:', error.message);
        console.log('There was an error connecting to the session:', error.code, error.message);
      });
  }

  connectWebCam() {
    // localUser.setAudioActive(this.props.userdata.type == "P" ? true : false);
    localUser.setVideoActive(this.props.userdata.type == "P" ? true : false);
    let publisher = this.OV.initPublisher(undefined, {
      audioSource: undefined,
      videoSource: undefined,
      publishAudio: true,
      publishVideo: localUser.isVideoActive(),
      resolution: (this.props.userdata.type == "P" ? '1920x1080' : '640x480'),
      frameRate: 30,
      insertMode: 'APPEND',
    });

    if (this.state.session.capabilities.publish) {
      this.state.session.publish(publisher).then(() => {
        if (this.props.joinSession) {
          this.props.joinSession();
        }
      });
    }
    localUser.setNickname(this.state.myUserName);
    localUser.setIsTutor(this.props.userdata.type == "P");
    localUser.setConnectionId(this.state.session.connection.connectionId);
    localUser.setScreenShareActive(false);
    localUser.setStreamManager(publisher);
    this.subscribeToUserChanged();
    this.subscribeToStreamDestroyed();
    // this.sendSignalUserChanged({ isScreenShareActive: localUser.isScreenShareActive() });

    this.setState({ localUser: localUser }, () => {
      this.state.localUser.getStreamManager().on('streamPlaying', (e) => {
        // this.updateLayout();
        publisher.videos[0].video.parentElement.classList.remove('custom-class');
      });
    });
  }
  leaveScreenShare() {
    this.OVScreen = null;
    this.deleteUser(screenShareUser.getConnectionId());
    this.setState({
      screenShareUser: undefined
    });

  }
  leaveSession() {
    const mySession = this.state.session;

    if (mySession) {
      mySession.disconnect();
    }

    // Empty all properties...
    this.OV = null;
    this.setState({
      session: undefined,
      subscribers: [],
      mySessionId: 'SessionA',
      myUserName: "User 1",
      localUser: undefined,
      screenShareUser: undefined
    });
    location.href = "/student?thankyou=true";
    if (this.props.leaveSession) {
      this.props.leaveSession();
    }
  }
  camStatusChanged() {
    localUser.setVideoActive(!localUser.isVideoActive());
    localUser.getStreamManager().publishVideo(localUser.isVideoActive());
    this.sendSignalUserChanged({ isVideoActive: localUser.isVideoActive() });
    this.setState({ localUser: localUser });
  }

  micStatusChanged() {
    localUser.setAudioActive(!localUser.isAudioActive());
    localUser.getStreamManager().publishAudio(localUser.isAudioActive());
    this.sendSignalUserChanged({ isAudioActive: localUser.isAudioActive() });
    this.setState({ localUser: localUser });
  }

  toggleScreen() {
    localUser.setFullScreenActive(!localUser.isFullScreen);
    this.sendSignalUserChanged({ isFullScreen: localUser.isFullScreen });
    this.setState({ localUser: localUser });
  }

  deleteSubscriber(stream) {
    const remoteUsers = this.state.subscribers;
    const userStream = remoteUsers.filter((user) => user.getStreamManager().stream === stream)[0];
    let index = remoteUsers.indexOf(userStream, 0);
    if (index > -1) {
      remoteUsers.splice(index, 1);
      this.setState({
        subscribers: remoteUsers,
      });
    }
  }

  subscribeToStreamCreated() {
    this.state.session.on('streamCreated', (event) => {
      const subscriber = this.state.session.subscribe(event.stream, undefined);
      let subscribers = this.state.subscribers;

      const newUser = new UserModel();
      newUser.setStreamManager(subscriber);
      newUser.setConnectionId(event.stream.connection.connectionId);
      newUser.setType('remote');
      const nickname = event.stream.connection.data.split('%')[0];
      newUser.setIsTutor(JSON.parse(nickname).type == "P");
      newUser.setNickname(JSON.parse(nickname).clientData);

      subscriber.on('streamPlaying', (e) => {
        subscriber.videos[0].video.parentElement.classList.remove('custom-class');
      });

      subscribers.push(newUser);
      this.setState(
        {
          subscribers: subscribers,
        },
        () => {
          if (this.state.localUser) {
            this.sendSignalUserChanged({
              isAudioActive: this.state.localUser.isAudioActive(),
              isVideoActive: this.state.localUser.isVideoActive(),
              nickname: this.state.localUser.getNickname(),
              isScreenShareActive: false
            });
          }
          if (this.state.screenShareUser) {
            this.sendScreenSignalUserChanged({
              isAudioActive: false,
              isVideoActive: this.state.screenShareUser.isVideoActive(),
              nickname: this.state.screenShareUser.getNickname(),
              isScreenShareActive: this.state.screenShareUser.isScreenShareActive()
            });
          }
        });
    });
  }

  subscribeToStreamDestroyed() {
    this.state.session.on('streamDestroyed', (event) => {
      this.deleteSubscriber(event.stream);
      event.preventDefault();
    });
  }

  subscribeToUserChanged() {
    this.state.session.on('signal:userChanged', (event) => {
      let remoteUsers = this.state.subscribers;
      remoteUsers.forEach((user) => {
        if (user.getConnectionId() === event.from.connectionId) {
          const data = JSON.parse(event.data);
          console.log('EVENTO REMOTE: ', event.data);
          if (data.isAudioActive !== undefined) {
            user.setAudioActive(data.isAudioActive);
          }
          if (data.isVideoActive !== undefined) {
            user.setVideoActive(data.isVideoActive);
          }
          if (data.nickname !== undefined) {
            user.setNickname(data.nickname);
          }
          if (data.isScreenShareActive !== undefined) {
            user.setScreenShareActive(data.isScreenShareActive);
          }
          if (data.isFullScreen !== undefined) {
            user.setFullScreenActive(data.isFullScreen);
          }
        }
      });
      this.setState(
        {
          subscribers: remoteUsers,
        }
        // ,
        // () => this.checkSomeoneShareScreen(),
      );
    });
  }

  // updateLayout() {
  //   setTimeout(() => {
  //     this.layout.updateLayout();
  //   }, 20);
  // }

  sendSignalUserChanged(data) {
    const signalOptions = {
      data: JSON.stringify(data),
      type: 'userChanged',
    };
    this.state.session.signal(signalOptions);
  }

  sendScreenSignalUserChanged(data) {
    const signalOptions = {
      data: JSON.stringify(data),
      type: 'userChanged',
    };
    this.state.sessionscreen.signal(signalOptions);
  }

  toggleFullscreen() {
    const document = window.document;
    const fs = document.getElementById('container');
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (fs.requestFullscreen) {
        fs.requestFullscreen();
      } else if (fs.msRequestFullscreen) {
        fs.msRequestFullscreen();
      } else if (fs.mozRequestFullScreen) {
        fs.mozRequestFullScreen();
      } else if (fs.webkitRequestFullscreen) {
        fs.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  screenShare() {
    if (!this.checkSomeoneShareScreen()) {
      this.joinScreenSession();
      // this.OVScreen = this.OVScreen || new OpenVidu();
      setTimeout(() => {
        const videoSource = navigator.userAgent.indexOf('Firefox') !== -1 ? 'window' : 'screen';
        const publisher = this.OVScreen.initPublisher(
          undefined,
          {
            videoSource: videoSource,
            publishAudio: false,
            publishVideo: true,
            mirror: false,
          },
          (error) => {
            if (error && error.name === 'SCREEN_EXTENSION_NOT_INSTALLED') {
              this.setState({ showExtensionDialog: true });
            } else if (error && error.name === 'SCREEN_SHARING_NOT_SUPPORTED') {
              alert('Your browser does not support screen sharing');
            } else if (error && error.name === 'SCREEN_EXTENSION_DISABLED') {
              alert('You need to enable screen sharing extension');
            } else if (error && error.name === 'SCREEN_CAPTURE_DENIED') {
              alert('You need to choose a window or application to share');
            }
          }
        );

        publisher.once('accessAllowed', () => {
          screenShareUser.setStreamManager(publisher);
          screenShareUser.setScreenShareActive(true);
          screenShareUser.setConnectionId(this.state.sessionscreen.connection.connectionId);
          this.state.sessionscreen.publish(screenShareUser.getStreamManager()).then(() => {
            screenShareUser.setScreenShareActive(true);
            this.setState({ screenShareUser: screenShareUser, }, () => {
              const signalOptions = {
                data: JSON.stringify({ isScreenShareActive: true }),
                type: 'userChanged',
              };
              this.state.sessionscreen.signal(signalOptions);
            });
          });
        });
        publisher.on('streamPlaying', () => {
          publisher.videos[0].video.parentElement.classList.remove('custom-class');
        });

        this.subscribeToUserChanged();
        this.subscribeToStreamDestroyed();
      });
    }
    else {
      alert("someone else is sharing screen");
    }
  }

  closeDialogExtension() {
    this.setState({ showExtensionDialog: false });
  }

  stopScreenShare() {
    this.state.session.unpublish(screenShareUser.getStreamManager());
    this.leaveScreenShare();
    screenShareUser.setScreenShareActive(false);
  }

  checkSomeoneShareScreen() {
    let isScreenShared;
    isScreenShared = this.state.subscribers.some((user) => user.isScreenShareActive()) || localUser.isScreenShareActive();
    return isScreenShared;
  }

  toggleChat(property) {
    let display = property;

    if (display === undefined) {
      display = this.state.chatDisplay === 'none' ? 'block' : 'none';
    }
    if (display === 'block') {
      this.setState({ chatDisplay: display, messageReceived: false });
    } else {
      console.log('chat', display);
      this.setState({ chatDisplay: display });
    }
    // this.updateLayout();
  }

  checkNotification(event) {
    this.setState({
      messageReceived: this.state.chatDisplay === 'none',
    });
  }

  render() {
    const mySessionId = this.state.mySessionId;
    const localUser = this.state.localUser;
    let chatDisplay = { display: this.state.chatDisplay };
    let tutorUser;
    let subscribers = this.state.subscribers.filter(s => (!s.screenShareActive && !s.isTutor));
    let tutor = this.state.subscribers.find(s => (s.isTutor && !s.screenShareActive));
    if (tutor)
      tutorUser = tutor;
    else if (localUser && localUser.isTutor)
      tutorUser = localUser;
    if (localUser && !localUser.isTutor)
      subscribers.push(localUser);

    let screenShareSubscriber = this.state.subscribers.find(s => s.screenShareActive);

    let canControlSize = !this.checkSomeoneShareScreen() && localUser && localUser.isTutor;
    return (
      <div className="container" id="container">
        <div className="logo"><h1 className="text-light"><a><span>BakeMinds</span></a></h1></div>

        <DialogExtensionComponent showDialog={this.state.showExtensionDialog} cancelClicked={this.closeDialogExtension} />
        <button className="btn btn-primary part-down" type="button" onClick={() => { window.innerWidth > 900 && this.setState({ showParticipants: true }); }}>
          <i className="fa fa-user-friends" />
           <i className="fa fa-angle-down" />
           ({subscribers.length})
        </button>
        {/* <div style={{ position: "relative", width:"650px", visibility: (this.state.showParticipants ? "visible" : "hidden")  }}>
          <div className="participantbox">
            {subscribers.map((sub, i) => (
              <div key={i} className="OT_root OT_publisher custom-class" id="remoteUsers" style={{ position: "static !important" }}>
                <StreamComponent user={sub} streamId={sub.streamManager.stream.streamId} />
              </div>
            ))}
          </div>
          <button className="part-up" onClick={() => { this.setState({ showParticipants: false }); }}>
            <i className="fa fa-angle-up" />
          </button>
        </div> */}
        <div id="layout" className="bounds">
          {tutorUser !== undefined && tutorUser.getStreamManager() !== undefined && (
            <div className={"OT_root OT_publisher custom-class " + ((!this.checkSomeoneShareScreen() && tutorUser.isFullScreen) ? "full" : "")} id="localUser-stream"  style={{ position: "absolute" }}>
              <StreamComponent user={tutorUser} canControlSize={canControlSize} toggleScreen={this.toggleScreen} />
            </div>
          )}
          {subscribers.map(sub=>
            <div className="OT_root OT_publisher custom-class " id="remoteUsers">
              <StreamComponent user={sub} streamId={sub.streamManager.stream.streamId}  />
            </div>
          )}

          {(screenShareSubscriber == undefined || !screenShareSubscriber.getStreamManager()) ?
            <div className="class-bg">
              <div className="overlay" />
              <div className="banner-context">
                <br />
                <br />
                <br />
                <h1 className="b-title">Welcome to BakeMinds</h1>
                <br />
                <br />
                <h3 className="b-tagline">Share your learnings with everyone - Anytime, Anywhere , Anything</h3>
                <br />
                <br />
                <span className="b-appreciate"> BakeMinds appreciates <span>{this.props.userdata.TutorName}</span> for your strenuous efforts in educating the world and helping nation to grow.</span>
                <br />
                <span className="b-topic"> Your class on - <span>{this.props.userdata.className}</span> will start shortly.</span>
                <br />
                <br />
                <span className="b-thankful">
                  We are also thankful to all participants for the commitment they are showing in learning everyday.
                </span>
              </div>
            </div> : null}
          {screenShareSubscriber !== undefined && screenShareSubscriber.getStreamManager() && (
            <div className={"OT_root OT_publisher custom-class " + (this.state.chatDisplay == "none" ? "full" : "half")} id="screenShareUser">
              <StreamComponent user={screenShareSubscriber} />
            </div>
          )}
          
        </div>
        {localUser !== undefined && localUser.getStreamManager() !== undefined && (
          <div className="OT_root OT_publisher custom-class chat-box" style={chatDisplay}>
            <ChatComponent
              user={localUser}
              chatDisplay={this.state.chatDisplay}
              close={this.toggleChat}
              messageReceived={this.checkNotification}
            />
          </div>
        )}
        <ToolbarComponent
          sessionId={mySessionId}
          user={localUser}
          screenuser={screenShareUser}
          showNotification={this.state.messageReceived}
          camStatusChanged={this.camStatusChanged}
          micStatusChanged={this.micStatusChanged}
          screenShare={this.screenShare}
          stopScreenShare={this.stopScreenShare}
          toggleFullscreen={this.toggleFullscreen}
          leaveSession={this.leaveSession}
          toggleChat={this.toggleChat}
        />
      </div>
    );
  }

  /**
   * --------------------------
   * SERVER-SIDE RESPONSIBILITY
   * --------------------------
   * These methods retrieve the mandatory user token from OpenVidu Server.
   * This behaviour MUST BE IN YOUR SERVER-SIDE IN PRODUCTION (by using
   * the API REST, openvidu-java-client or openvidu-node-client):
   *   1) Initialize a session in OpenVidu Server	(POST /api/sessions)
   *   2) Generate a token in OpenVidu Server		(POST /api/tokens)
   *   3) The token must be consumed in Session.connect() method
   */

  getToken() {
    return this.getTokenParam();
  }

  getTokenParam() {
    return new Promise((resolve) => {
      axios
        .post("https://api.bakeminds.com/api/video/generateToken", this.props.userdata)
        .then((response) => {
          console.log('CREATE SESION', response);
          console.log(response.data.response);
          resolve(response.data.response);
        });
    });
  }

  deleteUser(connectionId) {
    return new Promise((resolve, reject) => {
      axios
        .delete(this.OPENVIDU_SERVER_URL + '/api/sessions/' + this.props.userdata.classId + '/connection/' + connectionId, {
          headers: {
            Authorization: 'Basic ' + btoa('OPENVIDUAPP:' + this.OPENVIDU_SERVER_SECRET),
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log('Deleted TOKEN', response);
        })
        .catch((error) => reject(error));
    });
  }
}
export default VideoRoomComponent;
