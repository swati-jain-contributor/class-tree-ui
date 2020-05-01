import React, { Component } from 'react';
import axios from 'axios';
import './VideoRoomComponent.less';
import { OpenVidu } from 'openvidu-browser';
import StreamComponent from './stream/StreamComponent';
import DialogExtensionComponent from './dialog-extension/DialogExtension';
import ChatComponent from './chat/ChatComponent';

import OpenViduLayout from '../layout/openvidu-layout';
import UserModel from '../models/user-model';
import ToolbarComponent from './toolbar/ToolbarComponent';
import { MapsTransferWithinAStation } from 'material-ui/svg-icons';

var localUser = new UserModel();
var screenShareUser = new UserModel();

class VideoRoomComponent extends Component {
  constructor(props) {
    super(props);
    this.OPENVIDU_SERVER_URL = this.props.openviduServerUrl
      ? this.props.openviduServerUrl
      : 'https://' + window.location.hostname + ':4443';
    this.OPENVIDU_SERVER_SECRET = this.props.openviduSecret ? this.props.openviduSecret : 'MY_SECRET';
    this.hasBeenUpdated = false;
    this.layout = new OpenViduLayout();
    let sessionName = this.props.userdata.className ? this.props.userdata.className : 'SessionA';
    let userName = this.props.userdata.username ? this.props.userdata.username : 'OpenVidu_User' + Math.floor(Math.random() * 100);
    this.state = {
      mySessionId: sessionName,
      myUserName: userName,
      session: undefined,
      localUser: undefined,
      screenShareUser: undefined,
      subscribers: [],
      chatDisplay: 'none',
    };

    this.joinSession = this.joinSession.bind(this);
    this.leaveSession = this.leaveSession.bind(this);
    this.onbeforeunload = this.onbeforeunload.bind(this);
    this.updateLayout = this.updateLayout.bind(this);
    this.camStatusChanged = this.camStatusChanged.bind(this);
    this.micStatusChanged = this.micStatusChanged.bind(this);
    this.nicknameChanged = this.nicknameChanged.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.screenShare = this.screenShare.bind(this);
    this.stopScreenShare = this.stopScreenShare.bind(this);
    this.closeDialogExtension = this.closeDialogExtension.bind(this);
    this.toggleChat = this.toggleChat.bind(this);
    this.checkNotification = this.checkNotification.bind(this);
    this.checkSize = this.checkSize.bind(this);
    this.toggleScreen = this.toggleScreen.bind(this);
  }

  componentDidMount() {
    const openViduLayoutOptions = {
      maxRatio: 3 / 2, // The narrowest ratio that will be used (default 2x3)
      minRatio: 9 / 16, // The widest ratio that will be used (default 16x9)
      fixedRatio: false, // If this is true then the aspect ratio of the video is maintained and minRatio and maxRatio are ignored (default false)
      bigClass: 'OV_big', // The class to add to elements that should be sized bigger
      bigPercentage: 0.8, // The maximum percentage of space the big ones should take up
      bigFixedRatio: false, // fixedRatio for the big ones
      bigMaxRatio: 3 / 2, // The narrowest ratio to use for the big elements (default 2x3)
      bigMinRatio: 9 / 16, // The widest ratio to use for the big elements (default 16x9)
      bigFirst: true, // Whether to place the big one in the top left (true) or bottom right
      animate: true, // Whether you want to animate the transitions
    };

    this.layout.initLayoutContainer(document.getElementById('layout'), openViduLayoutOptions);
    window.addEventListener('beforeunload', this.onbeforeunload);
    window.addEventListener('resize', this.updateLayout);
    window.addEventListener('resize', this.checkSize);
    this.joinSession();
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onbeforeunload);
    window.removeEventListener('resize', this.updateLayout);
    window.removeEventListener('resize', this.checkSize);
    this.leaveSession();
  }

  onbeforeunload(event) {
    this.leaveSession();
  }

  joinSession() {
    this.OV = new OpenVidu();

    this.setState(
      {
        session: this.OV.initSession(),
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
        session: this.OVScreen.initSession(),
      },
      () => {
        this.connectToSession(true);
      }
    );
  }

  connectToSession(onlyscreen) {
    // if (this.props.token !== undefined) {
    //     console.log('token received: ', this.props.token);
    //     this.connect(this.props.token);

    // } else {
    if (this.props.userdata.isrecording) {
      this.connect("wss://api.classtree.in?sessionId=" + this.props.userdata.classId + '&secret=' + "MY_SECRET" + "&recorder=true")
    }
    else {
      this.getToken().then((token) => {
        console.log(token);
        this.connect(token, onlyscreen);
      }).catch((error) => {
        if (this.props.error) {
          this.props.error({ error: error.error, messgae: error.message, code: error.code, status: error.status });
        }
        console.log('There was an error getting the token:', error.code, error.message);
        alert('There was an error getting the token:', error.message);
      });
    }
    // }
  }

  connect(token, onlyscreen) {
    this.state.session
      .connect(
        token,
        { clientData: this.state.myUserName, type: this.props.userdata.type },
      )
      .then(() => {
        if (!onlyscreen)
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
    let publisher = this.OV.initPublisher(undefined, {
      audioSource: undefined,
      videoSource: undefined,
      publishAudio: localUser.isAudioActive(),
      publishVideo: localUser.isVideoActive(),
      resolution: (this.props.userdata.type == "P" ? '1920x1080' :'640x480'),
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
    localUser.setIsTutor(this.props.userdata.type == "P")
    localUser.setConnectionId(this.state.session.connection.connectionId);
    localUser.setScreenShareActive(false);
    localUser.setStreamManager(publisher);
    this.subscribeToUserChanged();
    this.subscribeToStreamDestroyed();
    this.sendSignalUserChanged({ isScreenShareActive: localUser.isScreenShareActive() });

    this.setState({ localUser: localUser }, () => {
      this.state.localUser.getStreamManager().on('streamPlaying', (e) => {
        this.updateLayout();
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
    location.href="/student?thankyou=true"
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

  nicknameChanged(nickname) {
    let localUser = this.state.localUser;
    localUser.setNickname(nickname);
    this.setState({ localUser: localUser });
    this.sendSignalUserChanged({ nickname: this.state.localUser.getNickname() });
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
      var subscribers = this.state.subscribers;
      subscriber.on('streamPlaying', (e) => {
        this.checkSomeoneShareScreen();
        subscriber.videos[0].video.parentElement.classList.remove('custom-class');
      });
      const newUser = new UserModel();
      newUser.setStreamManager(subscriber);
      newUser.setConnectionId(event.stream.connection.connectionId);
      newUser.setType('remote');
      const nickname = event.stream.connection.data.split('%')[0];
      newUser.setIsTutor(JSON.parse(nickname).type == "P")
      newUser.setNickname(JSON.parse(nickname).clientData);
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
              isScreenShareActive: this.state.screenShareUser ? this.state.screenShareUser.isScreenShareActive() : false,
            });
          }
          this.updateLayout();
        },
      );
    });
  }

  subscribeToStreamDestroyed() {
    // On every Stream destroyed...
    this.state.session.on('streamDestroyed', (event) => {
      // Remove the stream from 'subscribers' array
      this.deleteSubscriber(event.stream);
      setTimeout(() => {
        this.checkSomeoneShareScreen();
      }, 20);
      event.preventDefault();
      this.updateLayout();
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
        },
        () => this.checkSomeoneShareScreen(),
      );
    });
  }

  updateLayout() {
    setTimeout(() => {
      this.layout.updateLayout();
    }, 20);
  }

  sendSignalUserChanged(data) {
    const signalOptions = {
      data: JSON.stringify(data),
      type: 'userChanged',
    };
    this.state.session.signal(signalOptions);
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
            publishAudio: false,//localUser.isAudioActive(),
            publishVideo: true,//localUser.isVideoActive(),
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
          },
        );

        publisher.once('accessAllowed', () => {
          // this.state.session.unpublish(localUser.getStreamManager());
          screenShareUser.setStreamManager(publisher);
          screenShareUser.setConnectionId(this.state.session.connection.connectionId);
          this.state.session.publish(screenShareUser.getStreamManager()).then(() => {
            screenShareUser.setScreenShareActive(true);
            this.setState({ screenShareUser: screenShareUser, }, () => {
              this.sendSignalUserChanged({ isScreenShareActive: true });
            });
            // this.state.session.publish(localUser.getStreamManager())
          });
        });
        publisher.on('streamPlaying', () => {
          this.updateLayout();
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
    // this.connectWebCam();
  }

  checkSomeoneShareScreen() {
    let isScreenShared;
    // return true if at least one passes the test
    isScreenShared = this.state.subscribers.some((user) => user.isScreenShareActive()) || localUser.isScreenShareActive();
    const openviduLayoutOptions = {
      maxRatio: 3 / 2,
      minRatio: 9 / 16,
      fixedRatio: isScreenShared,
      bigClass: 'OV_big',
      bigPercentage: 0.8,
      bigFixedRatio: false,
      bigMaxRatio: 3 / 2,
      bigMinRatio: 9 / 16,
      bigFirst: true,
      animate: true,
    };
    this.layout.setLayoutOptions(openviduLayoutOptions);
    this.updateLayout();
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
    this.updateLayout();
  }

  checkNotification(event) {
    this.setState({
      messageReceived: this.state.chatDisplay === 'none',
    });
  }
  checkSize() {
    if (document.getElementById('layout').offsetWidth <= 700 && !this.hasBeenUpdated) {
      this.toggleChat('none');
      this.hasBeenUpdated = true;
    }
    if (document.getElementById('layout').offsetWidth > 700 && this.hasBeenUpdated) {
      this.hasBeenUpdated = false;
    }
  }

  render() {
    const mySessionId = this.state.mySessionId;
    const localUser = this.state.localUser;
    var chatDisplay = { display: this.state.chatDisplay };
    let participantRow = [];
    let tutorUser;
    let subscribers = this.state.subscribers.filter(s => (!s.screenShareActive && !s.isTutor));
    console.log(subscribers);

    let tutor = this.state.subscribers.find(s => s.isTutor);
    if (tutor)
      tutorUser = tutor;
    else if (localUser && localUser.isTutor)
      tutorUser = localUser;
    if (localUser && !localUser.isTutor)
      subscribers.push(localUser);

    let screenShareSubscriber = this.state.subscribers.find(s => s.screenShareActive);
    console.log("ScreenUser");
    console.log(screenShareSubscriber);
    console.log(subscribers);
    // if (subscribers.length > 0)
    //   subscribers = [subscribers[0], subscribers[0], subscribers[0], subscribers[0], subscribers[0], subscribers[0]];
    if (window.innerWidth < 700) {
      // for (let i = 0; i < subscribers.length; i++)
      //   participantRow.push(
      //     <div class="row">
      //       <div class="col">
      //         <div className="OT_root OT_publisher custom-class" id="localUser-stream">
      //           <StreamComponent user={subscribers[i]} streamId={subscribers[i].streamManager.stream.streamId} />
      //         </div>
      //       </div>
      //     </div>
      //   );
    }
    else {
      for (let i = 0; i < subscribers.length; i = i + 3)
        participantRow.push(
          <div class="row">
            <div class="col">
              <div className="OT_root OT_publisher custom-class" id="localUser-stream">
                <StreamComponent user={subscribers[i]} streamId={subscribers[i].streamManager.stream.streamId} />
              </div>
            </div>
            <div class="col">
              {(i + 1) < subscribers.length ?
                <div className="OT_root OT_publisher custom-class" id="localUser-stream">
                  <StreamComponent user={subscribers[i + 1]} streamId={subscribers[i + 1].streamManager.stream.streamId} />
                </div> : null}
            </div>
            <div class="col">
              {(i + 2) < subscribers.length ?
                <div className="OT_root OT_publisher custom-class" id="localUser-stream">
                  <StreamComponent user={subscribers[i + 2]} streamId={subscribers[i + 2].streamManager.stream.streamId} />
                </div> : null}
            </div>
          </div>
        )
    }

    var canControlSize = !this.checkSomeoneShareScreen() && localUser && localUser.isTutor;
    return (
      <div className="container" id="container">
        <div class="logo"><h1 class="text-light"><a><span>ClassTree</span></a></h1></div>

        <DialogExtensionComponent showDialog={this.state.showExtensionDialog} cancelClicked={this.closeDialogExtension} />
        {/* data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" */}
        <button className="btn btn-primary part-down" type="button" onClick={() => { window.innerWidth > 700 && this.setState({ showParticipants: true }) }}>
          <i class="fa fa-user-friends"></i> <i className="fa fa-angle-down" /> ({subscribers.length})
        </button>
        <div className={"collapse " + (this.state.showParticipants ? "show" : "")} id="collapseExample">
          <div class="carousel slide" id="participantcarousel" data-interval="false">
            <button className="part-up" onClick={() => { this.setState({ showParticipants: false }) }}>
              <i className="fa fa-angle-up" />
            </button>
            <div class="carousel-inner">
              {participantRow.map((row, i) => <div className={"carousel-item " + ((i == 0) ? "active" : "")}> {row}</div>)}
            </div>
            <a class="carousel-control-prev" href="#participantcarousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#participantcarousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div id="layout" className="bounds">
          {tutorUser !== undefined && tutorUser.getStreamManager() !== undefined && (
            <div className={"OT_root OT_publisher custom-class " + ((!this.checkSomeoneShareScreen() && tutorUser.isFullScreen) ? "full" : "")} id="localUser-stream">
              <StreamComponent user={tutorUser} handleNickname={this.nicknameChanged} canControlSize={canControlSize} toggleScreen={this.toggleScreen} />
            </div>
          )}

          {(screenShareSubscriber == undefined || !screenShareSubscriber.getStreamManager()) ?
            <div className="class-bg">
              <div class="overlay"></div>
              <div className="banner-context">
                <br />
                <br />
                <br />
                <h1 className="b-title">Welcome to ClassTree</h1>
                <br />
                <br />
                <h3 className="b-tagline">Share your learnings with everyone - Anytime, Anywhere , Anything</h3>
                <br />
                <br />
                <span className="b-appreciate"> ClassTree appreciates <span>{this.props.userdata.TutorName}</span> for your strenuous efforts in educating the world and helping nation to grow.</span>
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
              <StreamComponent user={screenShareSubscriber} handleNickname={this.nicknameChanged} />
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
    // axios.post()
    return this.getTokenParam();
    // return this.createSession(this.state.mySessionId).then((sessionId) => this.createToken(sessionId));
  }

  getTokenParam() {
    return new Promise((resolve) => {
      axios
        .post("https://api.classtree.in/api/video/generateToken", this.props.userdata)
        .then((response) => {
          console.log('CREATE SESION', response);
          console.log(response.data.response)
          resolve(response.data.response);
        })
    });
  }

  createSession(sessionId) {
    return new Promise((resolve, reject) => {
      var data = JSON.stringify({ customSessionId: sessionId });
      axios
        .post(this.OPENVIDU_SERVER_URL + '/api/sessions', data, {
          headers: {
            Authorization: 'Basic ' + btoa('OPENVIDUAPP:' + this.OPENVIDU_SERVER_SECRET),
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log('CREATE SESION', response);
          resolve(response.data.id);
        })
        .catch((response) => {
          var error = Object.assign({}, response);
          if (error.response && error.response.status === 409) {
            resolve(sessionId);
          } else {
            console.log(error);
            console.warn(
              'No connection to OpenVidu Server. This may be a certificate error at ' + this.OPENVIDU_SERVER_URL,
            );
            if (
              window.confirm(
                'No connection to OpenVidu Server. This may be a certificate error at "' +
                this.OPENVIDU_SERVER_URL +
                '"\n\nClick OK to navigate and accept it. ' +
                'If no certificate warning is shown, then check that your OpenVidu Server is up and running at "' +
                this.OPENVIDU_SERVER_URL +
                '"',
              )
            ) {
              window.location.assign(this.OPENVIDU_SERVER_URL + '/accept-certificate');
            }
          }
        });
    });
  }

  createToken(sessionId) {
    return new Promise((resolve, reject) => {
      var data = JSON.stringify({ session: sessionId });
      axios
        .post(this.OPENVIDU_SERVER_URL + '/api/tokens', data, {
          headers: {
            Authorization: 'Basic ' + btoa('OPENVIDUAPP:' + this.OPENVIDU_SERVER_SECRET),
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log('TOKEN', response);
          resolve(response.data.token);
        })
        .catch((error) => reject(error));
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
