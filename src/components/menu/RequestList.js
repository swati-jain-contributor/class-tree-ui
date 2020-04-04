import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as memberActions from '../../actions/memberActions';

class RequestList extends React.Component {  
  componentWillReceiveProps(nextProps) {    
    var requests=nextProps.requests.filter(req => req.member != null);
    this.setState({
      requests
    });
    console.log("Requests:"+requests.length);
  }
  componentDidMount() {
    document.addEventListener("backbutton", this.handleBackButton, false);
  }
  componentWillUnmount() {
    document.removeEventListener("backbutton", this.handleBackButton, false);
  }
  handleBackButton() {
    this.props.onClose();
  }
  constructor(props, context) {
    super(props, context);
    var s= this.props.requests.filter(req => req.member != null);
    this.accept=this.accept.bind(this);
    this.reject=this.reject.bind(this);  
    this.handleBackButton = this.handleBackButton.bind(this);  
    this.state={
      requests:s
    };    

  }
  accept(id){
    this.props.actions.updateRequest({
      requestId:id,
      type:"A"
    });    
  }
  reject(id){
    this.props.actions.updateRequest({
      requestId:id,
      type:"R"
    });
  }
  render() {

    return (

      <div className="society-funds">
        <div className="popup-content">
          <i className="fa fa-times" onClick={this.props.onClose} aria-hidden="true"></i>
          <label className="popup-title">Requests</label>
          {this.props.requests.length > 0 ?
            <div>
              {this.state.requests.map(req => <div key={req._id} className="request-div">                
                <span><b>{req.member.name}</b><span className="house"> [{req.member.block}-{req.member.flat}]</span> has requested for access </span>                
                <div>
                <button className="button sec"  onClick={()=>this.reject(req._id)}>Reject</button>
                <button className="button"  onClick={()=>this.accept(req._id)} >Accept</button>
                </div>
              </div>)}
            </div> : <div className="no-records">
              <label>No request found.</label>
              <label>Thank You!</label>
            </div>}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    requests: state.requests,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(memberActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestList);