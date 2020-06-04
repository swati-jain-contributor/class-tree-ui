import React, { Component } from 'react';
import axios from 'axios';
import './VideoRoomComponent.less';
import { OpenVidu } from 'openvidu-browser';
import StreamComponent from './stream/StreamComponent';
import DialogExtensionComponent from './dialog-extension/DialogExtension';
import ChatComponent from './chat/ChatComponent';
import Participant from './participant/Participant';

import OpenViduLayout from '../layout/openvidu-layout';
import UserModel from '../models/user-model';
import ToolbarComponent from './toolbar/ToolbarComponent';

let localUser = new UserModel();
let screenShareUser = new UserModel();

class VideoRoomComponent extends Component {
  constructor(props) {
    super(props);
    this.OPENVIDU_SERVER_URL = this.props.openviduServerUrl
      ? this.props.openviduServerUrl
      : 'https://api.classtree.in';
    this.OPENVIDU_SERVER_SECRET = this.props.openviduSecret ? this.props.openviduSecret : 'MY_SECRET';
    this.hasBeenUpdated = false;
    this.layout = new OpenViduLayout();
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
      participantDisplay: 'none',
      orientation: (window.innerWidth > window.innerHeight) ? 'landscape' : "portrait"
    };

    this.joinSession = this.joinSession.bind(this);
    this.leaveSession = this.leaveSession.bind(this);
    this.onbeforeunload = this.onbeforeunload.bind(this);
    this.updateLayout = this.updateLayout.bind(this);
    this.camStatusChanged = this.camStatusChanged.bind(this);
    this.micStatusChanged = this.micStatusChanged.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.screenShare = this.screenShare.bind(this);
    this.stopScreenShare = this.stopScreenShare.bind(this);
    this.closeDialogExtension = this.closeDialogExtension.bind(this);
    this.toggleChat = this.toggleChat.bind(this);
    this.toggleParticipant = this.toggleParticipant.bind(this);
    this.checkNotification = this.checkNotification.bind(this);
    this.checkSize = this.checkSize.bind(this);
    this.checkOrientation = this.checkOrientation.bind(this);
    this.toggleScreen = this.toggleScreen.bind(this);
    this.toggleMikeStatus = this.toggleMikeStatus.bind(this);
    this.whoHasMike = this.whoHasMike.bind(this);
    this.sendDestroyConnection = this.sendDestroyConnection.bind(this);
    this.subscribeToDestroy = this.subscribeToDestroy.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.onbeforeunload);
    window.addEventListener('resize', this.updateLayout);
    window.addEventListener('resize', this.checkSize);
    window.addEventListener('resize', this.checkOrientation);
    window.addEventListener('orientationchange', this.checkOrientation);
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
    let app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
    // if (!app)
    //   Notification.requestPermission();
    this.layout.initLayoutContainer(document.getElementById('layout'), openViduLayoutOptions);

    this.joinSession();
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onbeforeunload);
    window.removeEventListener('resize', this.updateLayout);
    window.removeEventListener('resize', this.checkSize);
    this.leaveSession();
  }

  // async checkAndroidPermissions() {
  //   try {
  //     const camera = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
  //       title: 'Camera Permission',
  //       message: 'OpenVidu needs access to your camera',
  //       buttonNeutral: 'Ask Me Later',
  //       buttonNegative: 'Cancel',
  //       buttonPositive: 'OK',
  //     });
  //     const audio = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, {
  //       title: 'Aduio Permission',
  //       message: 'OpenVidu needs access to your microphone',
  //       buttonNeutral: 'Ask Me Later',
  //       buttonNegative: 'Cancel',
  //       buttonPositive: 'OK',
  //     });
  //     const storage = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
  //       title: 'STORAGE',
  //       message: 'OpenVidu  needs access to your storage ',
  //       buttonNeutral: 'Ask Me Later',
  //       buttonNegative: 'Cancel',
  //       buttonPositive: 'OK',
  //     });
  //     if (camera === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('You can use the camera');
  //     } else {
  //       console.log('Camera permission denied');
  //     }
  //     if (audio === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('You can use the audio');
  //     } else {
  //       console.log('audio permission denied');
  //     }
  //     if (storage === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('You can use the storage');
  //     } else {
  //       console.log('storage permission denied');
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // }
  checkOrientation() {
    this.setState({ orientation: ((window.innerWidth > window.innerHeight) ? 'landscape' : "portrait") });
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
        sessionscreen: this.OVScreen.initSession(),
      },
      () => {
        this.connectToSession(true);
      }
    );
  }
  connectToSession(onlyscreen) {
    if (this.props.userdata.isrecording) {
      this.connect("wss://api.classtree.in?sessionId=" + this.props.userdata.classId + '&secret=' + "MY_SECRET" + "&recorder=true");
    }
    else {
      this.getToken().then((token) => {
        if (onlyscreen)
          this.state.sessionscreen.connect(token,
            { clientData: this.state.myUserName, type: "F" }
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
    if (this.props.userdata.type == "P") {
      localUser.setAudioActive(this.props.userdata.type == "P" ? true : false);
      localUser.setVideoActive(this.props.userdata.type == "P" ? true : false);
      let publisher = this.OV.initPublisher(undefined, {
        audioSource: undefined,
        videoSource: undefined,
        publishAudio: localUser.isAudioActive(),
        publishVideo: localUser.isVideoActive(),
        resolution: '320x240',
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
      localUser.setStreamManager(publisher);
    }
    localUser.setNickname(this.state.myUserName);
    localUser.setIsTutor(this.props.userdata.type == "P");
    localUser.setConnectionId(this.state.session.connection.connectionId);
    localUser.setScreenShareActive(false);
    this.setState({ localUser: localUser }, () => {
      // this.state.localUser.getStreamManager().on('streamPlaying', (e) => {
      //   this.updateLayout();
      //   publisher.videos[0].video.parentElement.classList.remove('custom-class');
      // });
    });
    this.sendSignalUserChanged({ isScreenShareActive: localUser.isScreenShareActive() });
    this.subscribeToUserChanged();
    this.subscribeToDestroy();
    this.subscribeToStreamDestroyed();
  }

  leaveScreenShare() {
    this.OVScreen = null;
    this.sendDestroyConnection(this.state.screenShareUser.getConnectionId());
    // this.deleteUser(this.state.screenShareUser.getConnectionId());
    this.setState({
      screenShareUser: undefined
    });
  }

  leaveSession() {
    if (this.state.sessionscreen && this.state.screenShareUser) {
      // this.sendDestroyConnection(this.state.screenShareUser.getConnectionId());
      this.stopScreenShare();
      // this.state.sessionscreen.disconnect();
    }
    const mySession = this.state.session;
    this.sendDestroyConnection(this.state.localUser.getConnectionId());
    if (mySession) {
      mySession.disconnect();
    }


    this.deleteUser(localUser.getConnectionId());

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
    let app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
    let redirectUrl = "/student?thankyou=true";
    if (app)
      redirectUrl = location.pathname + "#" + redirectUrl;
    location.href = redirectUrl;
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

  toggleMikeStatus() {
    if (!this.whoHasMike()) {
      localUser.setMike(!localUser.hasMikeActive());
      localUser.setAudioActive(true);
      localUser.setVideoActive(false);
      let publisher = this.OV.initPublisher(undefined, {
        audioSource: undefined,
        videoSource: false,
        publishAudio: true,
        publishVideo: false,
        resolution: '320x240',
        frameRate: 30,
        insertMode: 'APPEND',
      });
      localUser.setStreamManager(publisher);
      if (this.state.session.capabilities.publish) {
        this.state.session.publish(publisher).then(() => {
          this.sendSignalUserChanged({ hasMikeActive: localUser.hasMikeActive() });
        });
      }
      this.setState({ localUser: localUser });
    }
    else {
      if (localUser.hasMikeActive()) {
        localUser.setMike(false);
        this.state.session.unpublish(localUser.getStreamManager());
        this.sendSignalUserChanged({ hasMikeActive: localUser.hasMikeActive() });
        this.setState({ localUser: localUser });
      }
    }

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
      subscriber.on('streamPlaying', (e) => {
        this.checkSomeoneShareScreen();
        subscriber.videos[0].video.parentElement.classList.remove('custom-class');
      });
      const newUser = new UserModel();
      newUser.setStreamManager(subscriber);
      newUser.setConnectionId(event.stream.connection.connectionId);
      newUser.setType('remote');
      const nickname = event.stream.connection.data.split('%')[0];
      if (subscriber.stream.typeOfVideo == "SCREEN") {
        newUser.setScreenShareActive(true);
      }
      else {
        newUser.setIsTutor(JSON.parse(nickname).type == "P");
      }
      newUser.setIsTutor(JSON.parse(nickname).type == "P");
      // if(JSON.parse(nickname).type != "P"){
      //   newUser.setMike(JSON.parse(nickname).hasMikeActive);
      // }
      // newUser.setScreenShareActive()
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
              isScreenShareActive: false,
              isFullScreen: this.state.localUser.isFullScreen,
              hasMikeActive: this.state.localUser.hasMikeActive()
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
          this.updateLayout();
        }
      );
    });
    this.state.session.on('connectionCreated', (event) => {
      if (this.state.localUser) {
        this.sendSignalUserChanged({
          isAudioActive: this.state.localUser.isAudioActive(),
          isVideoActive: this.state.localUser.isVideoActive(),
          nickname: this.state.localUser.getNickname(),
          isScreenShareActive: false,
          isFullScreen: this.state.localUser.isFullScreen,
          hasMikeActive: this.state.localUser.hasMikeActive()
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
  }

  subscribeToStreamDestroyed() {
    // On every Stream destroyed...
    this.state.session.on('connectionDestroyed', (event) => {
      console.log("Connection Destroyed");
      console.log(event);
    });
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
  subscribeToDestroy() {
    this.state.session.on('signal:connectionKilled', (event) => {
      try {
        // this.state.session.forceDisconnect(this.state.session.remoteConnections[JSON.parse(event.data).cid]);
        console.log(this.state);
        delete this.state.session.remoteConnections[JSON.parse(event.data).cid];
        let subscribers = this.state.subscribers.filter(s => s.connectionId != JSON.parse(event.data).cid);
        this.setState({
          session: this.state.session,
          subscribers: subscribers
        });
      }
      catch (ex) {
        console.log(ex);
      }
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
          if (data.hasMikeActive !== undefined) {
            user.setMike(data.hasMikeActive);
          }
        }
      });
      this.setState(
        {
          subscribers: remoteUsers,
        },
        () => this.checkSomeoneShareScreen()
      );
    });
  }

  updateLayout() {
    setTimeout(() => {
      // this.layout.updateLayout();
    }, 20);
  }

  sendDestroyConnection(connectionId) {
    const signalOptions = {
      data: JSON.stringify({ cid: connectionId }),
      type: 'connectionKilled',
    };
    this.state.session.signal(signalOptions);
  }

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
    if (fs) {
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
            resolution: '320x240'
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
            screenShareUser.getStreamManager().stream.getMediaStream().getVideoTracks()[0].addEventListener('ended', () => this.stopScreenShare());
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
          this.updateLayout();
          publisher.videos[0].video.parentElement.classList.remove('custom-class');
        });

        this.subscribeToUserChanged();
        this.subscribeToDestroy();
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
    this.state.sessionscreen.unpublish(screenShareUser.getStreamManager());
    screenShareUser.setScreenShareActive(false);
    this.leaveScreenShare();
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
  whoHasMike() {
    return this.state.subscribers.find((user) => user.hasMikeActive()) || localUser.hasMikeActive();
  }

  toggleChat(property) {
    let display = property;

    if (display === undefined) {
      display = this.state.chatDisplay === 'none' ? 'block' : 'none';
    }
    if (display === 'block') {
      this.setState({ chatDisplay: display, messageReceived: false, participantDisplay: 'none' });
    } else {
      console.log('chat', display);
      this.setState({ chatDisplay: display });
    }
    this.updateLayout();
  }

  toggleParticipant(property) {
    let display = this.state.participantDisplay === 'none' ? 'block' : 'none';
    this.setState({ chatDisplay: 'none', participantDisplay: display });
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
  changeOrientation() {
    this.setState({ orientation: 'landscape' });
    // setTimeout(() => this.toggleFullscreen(), 100);
    // setTimeout(() => window.screen.orientation.lock('landscape'), 200);
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
        .post("https://api.classtree.in/api/video/generateToken", this.props.userdata)
        .then((response) => {
          console.log('CREATE SESION', response);
          console.log(response.data.response);
          resolve(response.data.response);
        });
    });
  }

  deleteUser(connectionId) {
    // return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", this.OPENVIDU_SERVER_URL + '/api/sessions/' + this.props.userdata.classId + '/connection/' + connectionId, false);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader("Authorization", 'Basic ' + btoa('OPENVIDUAPP:' + this.OPENVIDU_SERVER_SECRET));
    xhr.send(null);
    // axios
    //   .delete(this.OPENVIDU_SERVER_URL + '/api/sessions/' + this.props.userdata.classId + '/connection/' + connectionId, {
    //     headers: {
    //       Authorization: 'Basic ' + btoa('OPENVIDUAPP:' + this.OPENVIDU_SERVER_SECRET),
    //       'Content-Type': 'application/json'
    //     },
    //   })
    //   .then((response) => {
    //     console.log('Deleted TOKEN', response);
    //   })
    //   .catch((error) => reject(error));
    //});
  }

  render() {
    const mySessionId = this.state.mySessionId;
    const localUser = this.state.localUser;
    let chatDisplay = { display: this.state.chatDisplay };
    let participantDisplay = { display: this.state.participantDisplay };
    let tutorUser;

    let subscribers = this.state.subscribers.filter(s => (!s.screenShareActive && !s.isTutor));
    let tutor = this.state.subscribers.find(s => (s.isTutor && !s.screenShareActive));

    let mikeUser = this.state.subscribers.find(s => s.hasMikeActive());
    if (!mikeUser) {
      if (localUser && localUser.hasMikeActive())
        mikeUser = localUser;
    }

    if (tutor)
      tutorUser = tutor;
    else if (localUser && localUser.isTutor)
      tutorUser = localUser;
    if (localUser && !localUser.isTutor)
      subscribers.push(localUser);

    let screenShareSubscriber = this.state.subscribers.find(s => s.screenShareActive);

    let canControlSize = !this.checkSomeoneShareScreen() && localUser && localUser.isTutor;
    let participantCount = this.props.userdata.type == "P" ? 0 : 1;
    let participants = [];


    if (this.state.session) {
      // participantCount = (Object.keys(this.state.session.remoteConnections).length);
      // participants = this.state.session.remoteConnections;
      for (let i in this.state.session.remoteConnections) {
        let data = JSON.parse(this.state.session.remoteConnections[i].data.split('%')[0]);
        if (data.type == "S")
          participants.push({ name: data.clientData });
      }
      participantCount += participants.length;
    }
    return (
      <div className="container" id="container">
        {(window.innerWidth < window.innerHeight) ? <div className="class-panel potrait">
          <div className="logo"><h1 className="text-light"><a><span>ClassTree</span></a></h1></div>
          <h5> Your class is waiting for you to join.</h5>

          {/* {window.screen.orientation ? <button onClick={() => this.changeOrientation()}>JOIN CLASS</button> : */}
          <h5>Please view in landscape mode</h5>
          {/* } */}
        </div> : null}
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
          studentMikeChange={this.toggleMikeStatus}
          leaveSession={this.leaveSession}
          toggleChat={this.toggleChat}
          toggleParticipant={this.toggleParticipant}
          count={participantCount}
          isMikeFree={this.whoHasMike()}
        />

        <div className="logo"><h1 className="text-light"><a><span>ClassTree</span></a></h1></div>

        <DialogExtensionComponent showDialog={this.state.showExtensionDialog} cancelClicked={this.closeDialogExtension} />

        <div id="layout" className="bounds">
          {tutorUser !== undefined && tutorUser.getStreamManager() !== undefined && (
            <div className={"OT_root OT_publisher custom-class " + ((!this.checkSomeoneShareScreen() && tutorUser.isFullScreen) ? "full" : "")} id="localUser-stream">
              <StreamComponent user={tutorUser} canControlSize={canControlSize} toggleScreen={this.toggleScreen} mutedSound={this.state.localUser && this.state.localUser.isTutor} />
            </div>
          )}
          {mikeUser !== undefined && mikeUser.getStreamManager() !== undefined && !localUser.hasMikeActive() && (
            <div style={{ visibility: "hidden" }}>
              <StreamComponent user={mikeUser} canControlSize={canControlSize} toggleScreen={this.toggleScreen} />
            </div>
          )}
        </div>

        {(screenShareSubscriber == undefined || !screenShareSubscriber.getStreamManager()) ?
          <div className="class-bg">
            <div className="overlay" />
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
            {screenShareUser && screenShareUser.isScreenShareActive() ?
              <div className="presenting">You are presenting screen</div> :
              <StreamComponent user={screenShareSubscriber} mutedSound />
            }
          </div>
        )}
        {localUser !== undefined && (
          <div className="OT_root OT_publisher custom-class chat-box" style={chatDisplay}>
            <ChatComponent
              user={localUser}
              chatDisplay={this.state.chatDisplay}
              close={this.toggleChat}
              session={this.state.session}
              messageReceived={this.checkNotification}
            />
          </div>
        )}

        {localUser !== undefined && participantCount > 0 && (
          <div className="OT_root OT_publisher custom-class chat-box" style={participantDisplay}>
            <Participant
              participants={participants}
              participantDisplay={this.state.participantDisplay}
              localUser={((localUser && !localUser.isTutor) ? localUser : null)}
            />
          </div>
        )}
      </div>
    );
  }



}
export default VideoRoomComponent;
