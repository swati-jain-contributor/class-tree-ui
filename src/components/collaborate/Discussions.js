import React, { PropTypes } from 'react';
// import { ReactDOM , render} from 'react-dom';
// import { Holdable } from 'react-touch';
import Tappable from 'react-tappable/lib/Tappable';
import groups from '../../api/groups';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as collaborateActions from '../../actions/collaborateActions';
import AddDiscussion from '../overlays/AddDiscussion';
import ValidationService from '../common/Validation'

class Discussions extends React.Component {
  componentDidMount() {
    this.props.actions.getDiscussions();
    if (this.props.discussions != undefined && Array.isArray(this.props.discussions)) {
      this.updateDiscussions(this.props.discussions, this.props.userId, this.props.name);
    }
    document.addEventListener("backbutton", this.handleBackButton, false);
  }
  componentWillUnmount() {
    document.removeEventListener("backbutton", this.handleBackButton, false);
  }
  updateDiscussions(discussions, userId, name) {
    var groups = discussions;
    console.log(groups);
    this.setState({
      groups,
      userId: userId,
      name: name
    });
    if (groups.length > 0 && this.state.selectedGroup._id == undefined) {
      var dis = Object.assign({}, groups[0]);
      this.groupByDate(dis);
      this.setState({
        selectedGroup: dis
      });
    }

    else if (groups.length > 0 && this.state.selectedGroup._id > 0) {
      let grp = groups.find(gr => gr._id == this.state.selectedGroup._id);
      var dis = Object.assign({}, grp);
      this.groupByDate(dis);
      this.setState({
        selectedGroup: dis
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    this.updateDiscussions(nextProps.discussions, nextProps.userId, nextProps.name)
  }

  constructor(props, context) {
    super(props, context);
    this.changeState = this.changeState.bind(this);
    this.addMsg = this.addMsg.bind(this);
    this.msgChange = this.msgChange.bind(this);
    this.setToDefault = this.setToDefault.bind(this);
    this.updateDiscussionData = this.updateDiscussionData.bind(this);
    this.addDiscussion = this.addDiscussion.bind(this);
    this.deleteDiscussion = this.deleteDiscussion.bind(this);
    this.saveDiscussion = this.saveDiscussion.bind(this);
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
        msgLst: {}
      },
      userId: 3,
      txt: '',
      open: false,
      start: false,
      formNo: 0,
      discussionData: { title: '', msg: '' },
      errors: {},
      count: 0
    };
    if (this.props.selectedChat && this.props.selectedChat.discussion && this.props.selectedChat.discussion.type == "D") {
      this.state.open = true;
      this.state.selectedGroup._id = this.props.selectedChat.discussion.id
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
  setToDefault() {
    this.setState({ formNo: 0 });
  }
  copyText() {
    let msgs = this.getSelectedMsgs();
    if (cordova) {
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
        type: 'D',
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
  addDiscussion(event) {
    this.setState({
      step: 1,
      result: ""
    });
    this.setState({ formNo: 1 });
    this.setState({ initialiseValidation: true });
    this.setState({ discussionData: { title: '', msg: '' } });
  }
  updateErrors() {
    setTimeout(function () {
      this.setState({
        errors: (new ValidationService()).errors["group-form"]
      });
    }.bind(this));
  }
  deleteDiscussion(evt, discussion) {
    evt.stopPropagation();
    if (confirm("Are you sure you want to delete this Group?"))
      this.props.actions.closeDiscussion(discussion);
  }
  saveDiscussion(event) {
    if ((new ValidationService()).validateForm("group-form").isValid) {
      var s = Object.assign({}, this.state.discussionData);
      s.type = "D";
      s.msg = "This group is created for \"" + s.msg + "\"";
      this.props.actions.addDiscussion(s);
      // this.setState({ formNo: 0 });
      this.setState({
        step: 2,
        result: "Group added successfully!"
      });
    }
    else {
      this.setState({
        errors: (new ValidationService()).errors["group-form"]
      });
    }
  }
  updateDiscussionData(event) {
    const field = event.target.name;
    let discussionData = this.state.discussionData;
    discussionData[field] = event.target.value;
    return this.setState({ discussionData: discussionData });
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
  changeState(dis) {
    var dis = Object.assign({}, dis);
    if (dis._id != undefined) {
      this.groupByDate(dis);
      this.setState({ selectedGroup: dis });
    }

    this.setState({ open: !this.state.open, count: 0 });
    this.setState({ start: true });
  }
  msgChange(evt) {
    this.setState({
      txt: evt.target.value
    });
  }
  addMsg() {
    var s = this.state.txt;
    if (s.trim() != '') {
      window.raiseAnalyticsEvent("MSG_SENT");
      this.props.actions.addMessage({
        id: this.state.selectedGroup._id,
        type: "D",
        msg: this.state.txt
      });
      this.setState({
        txt: ''
      });
      this.setState({msgAdded:true});
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

        //objDiv.scrollTop = objDiv.scrollHeight;
      } else {
        document.querySelector('.chat-panel').animate({
          left: ['0', '500px']
        }, 1000);
      }
      this.setState({
        start: false
      });
      //this.messageList.scrollTop = this.messageList.scrollHeight;
    }
    this.messageList.scrollTop = this.messageList.scrollHeight;
    // if(this.state.msgAdded){
    //   this.messageList.scrollTop = this.messageList.scrollHeight;
    //   this.setState({msgAdded:false});
    // }
    if (this.state.initialiseValidation) {
      var ins = new ValidationService();
      var groupErrors = ins.addForm("group-form");
      this.setState({ errors: groupErrors });
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
      return (date.getHours() < 10 ? '0' : '') + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    };
    var formatDate = function (d) {
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      var date = new Date(parseInt(d));
      if (today.getTime() == date.getTime())
        return "Today";
      today.setDate(today.getDate() - 1);
      if (today.getTime() == date.getTime())
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
            <span onClick={this.addDiscussion} className="fa fa-plus-square"></span>
            <div>
              {this.state.groups.map(dis =>
                <div key={dis._id} className="group-title" onClick={() => this.changeState(dis)}>
                  <div className="thick">
                    <label>{dis.title}</label>
                    <span>{dis.msgs[dis.msgs.length - 1].msg}</span>
                    <i className="fa fa-trash" onClick={(evt) => this.deleteDiscussion(evt, dis)} ></i>
                  </div>
                </div>)}
            </div>
          </div>
          :
          <div className="no-records">
            < label>Be first to form a group</label>
            <button onClick={this.addDiscussion}>Add Group</button>
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
                {this.state.selectedGroup.msgLst[d].map((m, index) =>
                  <Tappable onPress={() => this.handleHold(d, m)} key={m._id}>
                    <div key={m._id} className="outer-msg clearfix">
                      <div className={'msg ' + (m.status == "inactive" ? " inactive " : "") + (m.sendBy == this.state.userId ? 'me tri-right right-top' : ' tri-right left-top')}>
                        {m.showName = (m.sendBy != this.state.userId && (index == 0 || m.sendBy != this.state.selectedGroup.msgLst[d][index - 1].sendBy))}
                        {m.showName ? <label>{m.sender}</label> : ''}
                        <span className={"" + (m.showName ? "" : "hideName") + ""}>{m.msg}</span>
                        <span className="msg-time">{formatTime(m.sendAt)}</span>
                      </div>
                      {m.selectMsg ? <div className="overlay-msg"></div> : null}
                    </div>
                  </Tappable>
                )}
              </div>
            )}

          </div>
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
              {this.state.formNo == 1 ? <AddDiscussion step={this.state.step} result={this.state.result} errors={this.state.errors} onBlur={this.updateErrors} discussionData={this.state.discussionData} onChange={this.updateDiscussionData} addDiscussion={this.saveDiscussion} cancel={this.setToDefault} /> : null}
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
    discussions: state.collaborate.discussions,
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

export default connect(mapStateToProps, mapDispatchToProps)(Discussions);