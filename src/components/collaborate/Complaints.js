import React, { PropTypes } from 'react';
// import { ReactDOM , render} from 'react-dom';
import Tappable from 'react-tappable/lib/Tappable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import groups from '../../api/groups';
import TextField from 'material-ui/TextField';
import * as collaborateActions from '../../actions/collaborateActions';
import AddComplaint from '../overlays/AddComplaint';
import ValidationService from '../common/Validation';

class Complaints extends React.Component {
  componentDidMount() {
    this.props.actions.getComplaints();
    if (this.props.complaints != undefined && Array.isArray(this.props.complaints)) {
      this.updateComplaints(this.props.complaints, this.props.userId, this.props.name);
    }
    document.addEventListener("backbutton", this.handleBackButton, false);
  }
  componentWillUnmount() {
    document.removeEventListener("backbutton", this.handleBackButton, false);
  }
  updateComplaints(complaints, userId, name) {
    var groups = complaints;
    console.log(groups);

    this.setState({
      groups,
      userId: userId,
      name: name
    });
    if (groups.length > 0 && this.state.selectedGroup._id == undefined){
      var dis = Object.assign({},groups[0]);
      this.groupByDate(dis);
      this.setState({
        selectedGroup: dis
      });
    }      
    else if (groups.length > 0 && this.state.selectedGroup._id > 0) {
      let grp=groups.find(gr => gr._id == this.state.selectedGroup._id);
      var dis = Object.assign({},grp);
      this.groupByDate(dis);
      this.setState({
        selectedGroup: dis
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    this.updateComplaints(nextProps.complaints, nextProps.userId, nextProps.name);
  }
  constructor(props, context) {
    super(props, context);
    this.changeState = this.changeState.bind(this);
    this.addMsg = this.addMsg.bind(this);
    this.msgChange = this.msgChange.bind(this);
    this.setToDefault = this.setToDefault.bind(this);
    this.updateComplaintData = this.updateComplaintData.bind(this);
    this.addComplaint = this.addComplaint.bind(this);
    this.deleteComplaint = this.deleteComplaint.bind(this);
    this.saveComplaint = this.saveComplaint.bind(this);
    this.updateErrors = this.updateErrors.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
    this.handleHold = this.handleHold.bind(this);
    this.copyText = this.copyText.bind(this);
    this.deleteText = this.deleteText.bind(this);
    this.getSelectedMsgs = this.getSelectedMsgs.bind(this);
    this.clearSelection = this.clearSelection.bind(this);
    this.state = {
      groups: [],
      selectedGroup: {
        msgs: [],
        msgLst:{} 
      },
      userId: 3,
      txt: '',
      open: false,
      start: false,
      formNo: 0,
      complaintData: { title: '', msg: '' },
      errors: {},
      count: 0
    };
    if(this.props.selectedChat && this.props.selectedChat.discussion && this.props.selectedChat.discussion.type=="C"){
      this.state.open=true;
      this.state.selectedGroup._id=this.props.selectedChat.discussion.id;
    }
      
  }
  handleHold(d, m) {
    console.log("hold");
    var msg = this.state.selectedGroup.msgLst[d].find(s => s._id == m._id);
    if (msg.status == "active") {
      msg.selectMsg = !msg.selectMsg;
      msg.selectMsg ? this.state.count++ : this.state.count--;
      this.setState({ selectedGroup: this.state.selectedGroup, count: this.state.count });
    }
  }

  setToDefault() {
    this.setState({ formNo: 0 });
  }
  copyText() {
    let msgs = this.getSelectedMsgs();
    if (window.plugins && cordova) {
      let text = "";
      msgs.map(m => {
        text += m.msg + " ";
      });
      cordova.plugins.clipboard.copy(text);      
    }
    this.clearSelection();
  }
  deleteText() {
    let msgs = this.getSelectedMsgs();
    let msgIds = [];
    var userId = this.state.userId;
    msgs.map(m => {
      if (m.sendBy == this.state.userId)
        msgIds.push(m._id)
    });
    if (msgIds.length == 0 && msgs.length > 0)
      alert("You can only delete your own messages");
    else
      this.props.actions.deleteMessage({
        ids: msgIds,
        type: 'C',
        groupId: this.state.selectedGroup._id
      })
    console.log(msgIds);
    this.clearSelection();
  }
  getSelectedMsgs() {
    let msgList = [];
    Object.keys(this.state.selectedGroup.msgLst).map(sg => {
      var m = this.state.selectedGroup.msgLst[sg];
      let s = m.filter(s => s.selectMsg == true);
      msgList = msgList.concat(s);
    });
    return msgList;
  }
  addComplaint(event) {
    this.setState({
      step: 1,
      result: ""
    });
    this.setState({ formNo: 1 });

    this.setState({ initialiseValidation: true });
    this.setState({ complaintData: { title: '', msg: '' } });
  }
  updateErrors() {
    setTimeout(function () {
      this.setState({
        errors: (new ValidationService()).errors["complaint-form"]
      });
    }.bind(this));
  }
  groupByDate(dis) {
    let msgLst = {

    };
    dis.msgs.map((msg) => {
      var d = new Date(parseInt(msg.sendAt));
      d.setHours(0, 0, 0, 0);
      var s = d.getTime();
      if (msgLst.hasOwnProperty(s)) {
        msgLst[s].push(Object.assign({}, msg));
      }
      else {
        msgLst[s] = [Object.assign({}, msg)];
      }
    });
    dis.msgLst = msgLst;
  } 
  clearSelection() {
    this.groupByDate(this.state.selectedGroup);
    this.setState({ selectedGroup: this.state.selectedGroup })
    this.setState({ count: 0 });
  }
  deleteComplaint(evt, complaint) {
    evt.stopPropagation();
    if (confirm("Are you sure you want to close this complaint?"))
      this.props.actions.closeDiscussion(complaint);
    this.setState({
      selectedGroup: {
        msgs: []
      }
    })
  }

  saveComplaint(event) {
    if ((new ValidationService()).validateForm("complaint-form").isValid) {
      window.raiseAnalyticsEvent("COMPLAINT_REGISTERED");
      var s = Object.assign({}, this.state.complaintData);
      s.type = "C";
      s.msg = s.msg;
      this.props.actions.addDiscussion(s);
      this.setState({
        step: 2,
        result: "Issue added successfully!"
      });
      // this.setState({ formNo: 0 });
    }
    else {
      this.setState({
        errors: (new ValidationService()).errors["complaint-form"]
      });
    }
  }
  updateComplaintData(event) {
    const field = event.target.name;
    let complaintData = this.state.complaintData;
    complaintData[field] = event.target.value;
    return this.setState({ complaintData: complaintData });
  }
  changeState(dis) {
    if (dis._id != undefined){
      var dis = Object.assign({},dis);
      this.groupByDate(dis);
      this.setState({ selectedGroup: dis });
    }      
    this.setState({ open: !this.state.open });
    this.setState({ start: true });
  }
  handleBackButton() {
    if (this.state.count > 0) {
      this.clearSelection()
    }
    else if (this.state.open) {
      this.setState({ open: false });
      this.setState({ start: true });
    }
    else
      this.props.backToHome();
  }
  msgChange(evt) {
    this.setState({
      txt: evt.target.value
    });
  }
  addMsg() {
    var s = this.state.txt;
    if (s.trim() != '') {
      this.props.actions.addMessage({
        id: this.state.selectedGroup._id,
        type: "C",
        msg: this.state.txt
      });
      this.setState({
        txt: ''
      });
    }
  }
  componentDidUpdate() {
    //document.querySelector(".msg-box").scrollTop=document.querySelector(".msg-box").scrollHeight();
    // const node = this.refs;
    // console.log(node);
    if (this.state.start) {
      if (this.state.open) {
        document.querySelector('.chat-panel').animate({
          left: ['500px', '0px']
        }, 1000);
      } else {
        document.querySelector('.chat-panel').animate({
          left: ['0', '500px']
        }, 1000);
      }
      this.setState({
        start: false
      });
    }
    this.messageList.scrollTop = this.messageList.scrollHeight;
    //const scrollHeight = this.messageList.scrollHeight;
    if (this.state.initialiseValidation) {
      var ins = new ValidationService();
      var complaintErrors = ins.addForm("complaint-form");
      this.setState({ errors: complaintErrors });
      this.setState({ initialiseValidation: false });
    }
    //node.scrollIntoView({behavior: "smooth"});     
  }
  render() {
    var monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];
    var formatTime = function (d) {
      var date = new Date(parseInt(d));      
      return (date.getHours()<10?'0':'') + date.getHours()+":"+(date.getMinutes()<10?'0':'') + date.getMinutes();
    };
    var formatDate = function (d) {
      var today=new Date();
      today.setHours(0, 0, 0, 0);            
      var date = new Date(parseInt(d));  
      if(today.getTime()==date.getTime())
        return "Today";
      today.setDate(today.getDate() - 1);    
      if(today.getTime()==date.getTime())
        return "Yesterday";
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
      return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }
    return (
      <div className="col-block  view-holder">
      <div>
        {this.state.groups.length > 0 ?
          <div>
            {this.props.role != "President" ?
              <span onClick={this.addComplaint} className="fa fa-plus-square"></span>
              : null
            }
            <div>
              {this.state.groups.map(dis =>
                <div key={dis._id} className="group-title" onClick={() => this.changeState(dis)}>
                  <div className="thick">
                    <label>{dis.title}</label>

                    <span>{dis.msgs[dis.msgs.length - 1].msg.length > 20 ? dis.msgs[dis.msgs.length - 1].msg.substring(0, 19) + '...' : dis.msgs[dis.msgs.length - 1].msg}</span>
                    {this.props.role == "President" ?
                      <i className="fa fa-trash" onClick={(evt) => this.deleteComplaint(evt, dis)} ></i>
                      : null}
                    {this.props.role == "President" ? <span className="createdBy">-{dis.creator}</span> : null}
                  </div>
                </div>)}
            </div>
          </div>
          :
          <div className="no-records">
            {this.props.role != "President" ? <div>
              <label>Facing Issues? Need help? We are there.</label>
              <button onClick={this.addComplaint}>Request Help</button>
            </div> :
              <div>
                <label>All Residents are happy.No complaints found.</label>
              </div>}
          </div>
        }
        <div className={'chat-panel ' + (this.state.open ? '' : 'hide-panel')}>
          <div className="title-box"><span onClick={this.changeState}><i className="fa fa-arrow-left"></i></span>&nbsp;&nbsp;{this.state.selectedGroup.title}</div>
          <div className="msg-box"
            ref={(div) => {
              this.messageList = div;
            }}>
            {Object.keys(this.state.selectedGroup.msgLst).map(d =>
              <div key={d}>
                <div className="date">{formatDate(d)}</div>
                {this.state.selectedGroup.msgLst[d].map((m ,index)=>
                <Tappable onPress={() => this.handleHold(d, m)} key={m._id}>
                  <div key={m._id} className="outer-msg clearfix">
                    <div className={'msg ' + (m.status == "inactive" ? " inactive " : "")  + (m.sendBy == this.state.userId ? 'me tri-right right-top' : ' tri-right left-top')}>    
                      { m.showName=(m.sendBy != this.state.userId && (index==0 || m.sendBy != this.state.selectedGroup.msgLst[d][index-1].sendBy))}                                         
                      {m.showName ? <label>{m.sender}</label> : ''}
                      <span className={""+(m.showName?"":"hideName")+""}>{m.msg}</span>
                      <span className="msg-time">{formatTime(m.sendAt)}</span>
                    </div>
                    {m.selectMsg ? <div className="overlay-msg"></div> : null}
                  </div>
                  </Tappable>
                )}
              </div>
            )}            
          </div>
          {/*<div className="form-box">
            <TextField hintText="Type a message" className="chat-input" value={this.state.txt} onChange={this.msgChange} />
            <button onClick={this.addMsg}><i className="fa fa-paper-plane"></i></button>
          </div>*/}
          <div className={"form-box " + (this.state.count > 0 ? "option" : "")}>
            {this.state.count > 0 ?
              <div className="option-div">
                <div className="col-xs-6" onClick={this.copyText}>
                  <i className="fa fa-clone"></i>
                  <span>Copy</span>
                </div>
                <div className="col-xs-6" onClick={this.deleteText}>
                  <i className="fa fa-trash"></i>
                  <span>Delete</span>
                </div>
              </div> :
              <div>
                <TextField hintText="Type a message" className="chat-input" value={this.state.txt} onChange={this.msgChange} />
                <button onClick={this.addMsg}><i className="fa fa-paper-plane"></i></button>
              </div>}
          </div>
        </div>
        {this.state.formNo > 0 ?
          <div className="overlay" onClick={(evt) => this.setToDefault()}>
            <div className="form-box" onClick={(evt) => evt.stopPropagation()}>
              {this.state.formNo == 1 ? <AddComplaint step={this.state.step} result={this.state.result} errors={this.state.errors} onBlur={this.updateErrors} complaintData={this.state.complaintData} onChange={this.updateComplaintData} addComplaint={this.saveComplaint} cancel={this.setToDefault} /> : null}
            </div>
          </div>
          : null}
      </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    complaints: state.collaborate.complaints,
    userId: state.session.memberid,
    name: state.session.name,
    role: state.session.role
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(collaborateActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Complaints);