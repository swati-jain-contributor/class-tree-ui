import React, { Component } from 'react';
import './VideoRoomComponent.less';

let JitsiMeetExternalAPI;
class VideoRoomComponent extends Component {
  constructor(props) {
    super(props);
    this.state ={isMobile:false};
  }

  componentDidMount() {
    if (window.innerWidth > 900)
      setTimeout(() => { window.loadJitsi(this.props.userdata.classId, this.props.userdata.className, this.props.userdata.TutorName); }, 100);
    else
        this.setState({isMobile:true});
  }

  componentWillUnmount() {

  }

  render() {
    return <div className="classpanel">
      <div className="logo"><h1 className="text-light"><a><span>ClassTree</span></a></h1></div>
      {this.state.isMobile ? <span className="request-desktop">
        Please enable request desktop site in settings to load ClassTree
      </span>:null}
      <div id="meet" />
    </div>;
  }
}
export default VideoRoomComponent;
