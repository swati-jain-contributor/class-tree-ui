import PropTypes from 'prop-types';
import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as classActions from '../../actions/classActions';
const VideoRoomComponent = lazy(() => import('../../video-call/components/VideoRoomComponent'));
import '../../video-call/index.css';
// import registerServiceWorker from '../../video-call/registerServiceWorker';
// registerServiceWorker();
class VideoClass extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      token: null
    };
  }
  getQueryParams(params, url) {
    let href = url;
    //this expression is to get the query strings
    let reg = new RegExp('[?&]' + params + '=([^&#]*)', 'i');
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : null;
  }
  render() {
    return (
      <div className="class-panel">
        {(this.props.user) ? <Suspense fallback={<h1>Loading profile...</h1>}>
          <VideoRoomComponent userdata={JSON.parse(atob(this.getQueryParams("token", location.href)))} />
        </Suspense>: null}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

  return {
    email: state.session.user ? state.session.user.email : null,
    name: state.session.user ? state.session.user.firstname + " " + state.session.user.lastname : null,
    phoneNo: state.session.user ? state.session.user.mobile : null,
    user: state.session.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(classActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoClass);
