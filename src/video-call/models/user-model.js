class UserModel {
    // connectionId;
    // audioActive;
    // videoActive;
    // screenShareActive;
    // nickname;
    // streamManager;
    // type; // 'remote' | 'local'

    constructor() {
        this.connectionId = '';
        this.audioActive = true;
        this.videoActive = true;
        this.screenShareActive = false;
        this.nickname = '';
        this.streamManager = null;
        this.type = 'local';
        this.isTutor ='false';
        this.isFullScreen=false;
        this.hasMike = false;
    }

    isAudioActive() {
        return this.audioActive;
    }

    isVideoActive() {
        return this.videoActive;
    }

    isTutor(){
      return this.isTutor;
    }

    isFullScreenActive(){
      return this.isFullScreen;
    }
    isScreenShareActive() {
        return this.screenShareActive;
    }

    getConnectionId() {
        return this.connectionId;
    }

    getNickname() {
        return this.nickname;
    }

    getStreamManager() {
        return this.streamManager;
    }

    hasMikeActive(){
      return this.hasMike;
    }
    
    isLocal() {
        return this.type === 'local';
    }
    isRemote() {
        return !this.isLocal();
    }
    setAudioActive(isAudioActive) {
        this.audioActive = isAudioActive;
    }
    setVideoActive(isVideoActive) {
        this.videoActive = isVideoActive;
    }
    setScreenShareActive(isScreenShareActive) {
        this.screenShareActive = isScreenShareActive;
    }
    setFullScreenActive(isFullScreen) {
      this.isFullScreen =isFullScreen;
    }
    setStreamManager(streamManager) {
        this.streamManager = streamManager;
    }

    setConnectionId(conecctionId) {
        this.connectionId = conecctionId;
    }
    setNickname(nickname) {
        this.nickname = nickname;
    }
    setType(type) {
        if (type === 'local' |  type === 'remote') {
            this.type = type;
        }
    }
    setIsTutor(isTutor) {
      this.isTutor=isTutor;
    }
    setMike(hasMike){
      this.hasMike = hasMike;
    }
}

export default UserModel;
