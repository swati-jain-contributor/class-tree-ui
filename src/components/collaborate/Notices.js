import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as collaborateActions from '../../actions/collaborateActions';
import AddNotice from '../overlays/AddNotice';
import ValidationService from '../common/Validation';
class Notices extends React.Component {
  componentDidMount() {

    this.props.actions.getNotices();
    if (this.props.notices != undefined && Array.isArray(this.props.notices)) {
      this.updateNotices(this.props.notices, this.props.userId, this.props.name);
    }
    document.addEventListener("backbutton", this.handleBackButton, false);
  }
  componentWillUnmount() {
    document.removeEventListener("backbutton", this.handleBackButton, false);
  }
  updateNotices(notices, userId, name) {
    var notices = notices.map(d => {
      var s = Object.assign({}, d);
      s.open = false;
      return s
    });
    notices.sort((a,b)=>{
      if(new Date(a.createdOn)>new Date(b.createdOn))
        return -1;
      else if(new Date(a.createdOn)<new Date(b.createdOn))
        return 1;
      return 0;
    });
    this.setState({
      notices,
      userId: userId,
      name: name
    });    
  }
  componentWillReceiveProps(nextProps) {
    this.updateNotices(nextProps.notices, nextProps.userId, nextProps.name);
  }
  constructor(props, context) {
    super(props, context);
    this.changeState = this.changeState.bind(this);
    this.state = {
      notices: [],
      formNo: 0,
      noticeData: { title: '', msg: '' },
      errors: {}
    };
    this.setToDefault = this.setToDefault.bind(this);
    this.updateNoticeData = this.updateNoticeData.bind(this);
    this.editNotice = this.editNotice.bind(this);
    this.addNotice = this.addNotice.bind(this);
    this.deleteNotice = this.deleteNotice.bind(this);
    this.saveNotice = this.saveNotice.bind(this);
    this.updateErrors = this.updateErrors.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);

  }
  updateErrors() {
    setTimeout(function () {
      this.setState({
        errors: (new ValidationService()).errors["notice-form"]
      });
    }.bind(this));
  }
  setToDefault() {
    this.setState({ formNo: 0 });
  }
  addNotice(event) {
    this.setState({
      step: 1,
      result: ""
    });
    this.setState({ formNo: 1 });
    this.setState({ initialiseValidation: true });
    this.setState({ noticeData: { title: '', msg: '' } });
  }
  editNotice(evt, notice) {
    evt.stopPropagation();
    this.setState({
      step: 1,
      result: ""
    });
    this.setState({ formNo: 1 });
    this.setState({ initialiseValidation: true });
    this.setState({ noticeData: { title: notice.title, msg: notice.msgs[0].msg, _id: notice._id } });
  }
  deleteNotice(evt, notice) {
    evt.stopPropagation();
    if (confirm("Are you sure you want to delete this Notice?"))
      this.props.actions.closeDiscussion(notice);
  }
  saveNotice(event) {
    if ((new ValidationService()).validateForm("notice-form").isValid) {
      var s = Object.assign({}, this.state.noticeData);
      if (s._id != undefined) {
        s.type = "N";
        s.msg = s.msg;
        this.props.actions.editNotice(s);
        this.setState({
          step: 2,
          result: "Notice updated successfully!"
        });
      }
      else {
        s.type = "N";
        s.msg = s.msg;
        this.props.actions.addDiscussion(s);
        this.setState({
          step: 2,
          result: "Notice added successfully!"
        });
      }
      //this.setState({ formNo: 0 });
    } else {
      this.setState({
        errors: (new ValidationService()).errors["notice-form"]
      });
    }
  }
  updateNoticeData(event) {
    const field = event.target.name;
    let noticeData = this.state.noticeData;
    noticeData[field] = event.target.value;
    return this.setState({ noticeData: noticeData });
  }
  changeState(not) {
    if(!not.open)
      window.raiseAnalyticsEvent("NOTICE_READ");
    let notice = this.state.notices.find(notice => notice._id == not._id);
    notice.open = !notice.open;
    this.setState({
      notices: this.state.notices
    });
  }
  handleBackButton() {
    let notice = this.state.notices.find(notice => notice.open);
    if (notice) {
      notice.open = !notice.open;
      this.setState({
        notices: this.state.notices
      });
    }
    else
      this.props.backToHome();
  }
  componentDidUpdate() {
    if (this.state.initialiseValidation) {
      var ins = new ValidationService();
      var noticeErrors = ins.addForm("notice-form");
      this.setState({ errors: noticeErrors });
      this.setState({ initialiseValidation: false });
    }
  }

  render() {
    var monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];
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
        {this.state.notices.length > 0 ?
          <div>
            {this.props.role == "President" ?
              <span onClick={this.addNotice} className="fa fa-plus-square"></span>
              : null}
            {this.state.notices.map(not =>
              <div key={not._id} className="group-title">
                <div className="notice-row thick" onClick={() => this.changeState(not)}>
                  <FontIcon className="material-icons"><i className="fa fa-bullhorn" aria-hidden="true"></i></FontIcon>                  
                  <label>{not.title}<span className={"notice-date "+(this.props.role=="President"?"isPresi":"")}>-{formatDate(not.msgs[0].sendAt)}</span></label>
                  {this.props.role == "President" ? <span className="actions">
                    <i className="fa fa-trash" onClick={(evt) => this.deleteNotice(evt, not)} ></i>
                    <i className="fa fa-pencil-square-o" onClick={(evt) => this.editNotice(evt, not)}></i>
                  </span> : null}

                </div>
                <Dialog
                  title={<h3><span className="pin"></span><span>{not.title}</span><span className="notice-dialog-date">{formatDate(not.msgs[0].sendAt)}</span></h3>}
                  open={not.open}
                  titleClassName="title"
                  className="root"
                  bodyClassName="body"
                  actionsContainerClassName="action"
                  contentClassName="content-container"
                  autoScrollBodyContent={true}
                  onRequestClose={() => this.changeState(not)}>
                  <label>Dear Residents,</label>
                  {not.msgs[0].msg}
                </Dialog>
              </div>
            )}
          </div>
          :
          <div className="no-records">
            {this.props.role == "President" ? <div>
              <label>Add first message for your apartment!</label>
              <button onClick={this.addNotice}>Add Message</button></div> : <div>
                <label>No messages added for your apartment yet!</label>
              </div>}

          </div>}
        {this.state.formNo > 0 ?
          <div className="overlay" onClick={(evt) => this.setToDefault()}>
            <div className="form-box" onClick={(evt) => evt.stopPropagation()}>
              {this.state.formNo == 1 ? <AddNotice step={this.state.step} result={this.state.result} errors={this.state.errors} onBlur={this.updateErrors} noticeData={this.state.noticeData} onChange={this.updateNoticeData} addNotice={this.saveNotice} cancel={this.setToDefault} /> : null}
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
    notices: state.collaborate.notices,
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

export default connect(mapStateToProps, mapDispatchToProps)(Notices);

// {
//         id: 10,
//         title: 'Pay maintainence',
//         open:false,
//         date: '1486382252233',
//         content: 'Hello Residents, ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsdksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd.ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsdksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd.ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsdksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd'
//       }, {
//           id: 11,
//           title: 'Lift Not working',
//           date: '1486382252233',
//           open:false,
//           content: 'Hello Left, ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsdksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd'
//         }, {
//           id: 12,
//           title: 'Clean Premises',
//           open:false,
//           date: '1486382252233',
//           content: 'Hello Clean, ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd ksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsdksajd asdkass dakssjddlkasd ass,djasdd,aklsd assdj akljsd'
//         }