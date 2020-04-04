import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AccountsApi from '../../api/accountsApi';
import * as accountsActions from '../../actions/accountsActions';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import * as ajaxActions from '../../actions/ajaxStatusActions';
class MaintainFunds extends React.Component {
  componentDidMount() {
    var lst = this.props.maintainence;
    if (lst.length > 0) {
      this.setState({
        maintainence: lst,
        selectedMaintainence: lst[lst.length - 1]
      })
      this.getFunds({
        id: lst[lst.length - 1]._id
      });
      var selectedMaintainence = lst[lst.length - 1];
      var lstOfTypes = lst.map(l => {
        return l.type;
      });

      var lstOfMonths = lst.map(l => {
        if (l.type == selectedMaintainence.type)
          return l.month;
      }).filter(y => y != undefined);

      var lstOfYears = lst.map(l => {
        if (l.type == selectedMaintainence.type && l.month == selectedMaintainence.month)
          return l.year;
      }).filter(y => y != undefined);

      this.setState({
        types: Array.from(new Set(lstOfTypes)),
        months: Array.from(new Set(lstOfMonths)),
        years: Array.from(new Set(lstOfYears)),
        month: selectedMaintainence.month,
        year: selectedMaintainence.year,
        type: selectedMaintainence.type
      });
    }
  }
  constructor(props, context) {
    super(props, context);
    this.getFunds = this.getFunds.bind(this);
    this.fromChange = this.fromChange.bind(this);
    this.toChange = this.toChange.bind(this);
    this.back = this.back.bind(this);
    this.history = this.history.bind(this);
    this.cancel = this.cancel.bind(this);
    this.modify = this.modify.bind(this);
    this.memberSelected = this.memberSelected.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.changeType = this.changeType.bind(this);
    this.acceptCash = this.acceptCash.bind(this);
    this.blockItem = this.blockItem.bind(this);
    this.state = {
      maintainence: [],
      maintains: {
        members: []
      },
      types: ['Maintainence', 'Ganesh Pooja', 'Diwali'],
      months: [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
      ],
      monthsName: [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
      ],
      selectedMaintainence: {
        id: 0,
        expected: 0,
        received: 0,
        pending: 0,
        amt: 0,
        title: 'Maintainence',
        type: 'Maintainence',
        months: 11,
        year: 2016,
        members: []
      },
      type: 'Maintainence',
      month: 'Jul',
      year: 2016,
      years: [2016, 2017, 2018, 2019, 2020]
    };
    window.raiseAnalyticsEvent("MAINTAINENCE_CHECKED");
  }
  acceptCash(member) {
    if (confirm("Are you sure you received cash of " + this.state.selectedMaintainence.amt + "INR from " + member.name + "? This action cannot be reverted back.")) {
      this.props.actions.payMaintainence({
        ids: [this.state.selectedMaintainence._id],
        isCash: true,
        memberId: member._id
      }).then(function () {
        this.getFunds({
          id: this.state.selectedMaintainence._id
        });
      }.bind(this));
    }
  };
  blockItem(member, isBlock) {
    var s;
    if (isBlock)
      s = confirm("Are you sure you want to remove " + member.name + " from this maintainence?");
    else
      s = confirm("Are you sure you want to add " + member.name + " to this maintainence?");
    if (s) {
      this.props.actions.blockMaintainence({
        id: this.state.selectedMaintainence._id,
        isBlock: isBlock,
        memberId: member._id
      }).then(function () {
        this.getFunds({
          id: this.state.selectedMaintainence._id
        });
      }.bind(this));
    }
  };
  
  getFunds(obj) {
    this.props.ajaxActions.beginAjaxCall();
    AccountsApi.getMaintainenceDetails({ id: obj.id }).then(function (data) {
      this.props.ajaxActions.ajaxCallError();
      if (data.status == "SUCCESS") {
        var data=data.response;
        var maintainence = data;

        maintainence.title = maintainence.type;
        maintainence.members2 = data.members;
        maintainence.members = this.props.members.map(mem => { return Object.assign({}, mem); });
        var success = 0;
        var block = 0;
        maintainence.members.map(m => m.status = 0);
        data.members.map(m => {
          var s = maintainence.members2.find(d => d.member._id == m._id);
          if (s && s.status.toLowerCase() == "block") {
            m.status = 1;
            block++;
          }
          else if (s) {
            m.status = 2;
            success++;
          }
        });
        maintainence.expected = data.amt * (this.props.members.length - block);
        maintainence.received = data.amt * success;
        maintainence.pending = maintainence.expected - maintainence.received;
        this.setState({ maintains: maintainence });
      }
    }.bind(this),function(error){
      console.log("Error:"+error);
      this.props.ajaxActions.ajaxCallError();
    }.bind(this));
  }
  changeMonth(event, index, value) {
    var lst = this.state.maintainence;
    var lstOfYears = lst.map(l => {
      if (l.month == value && l.type == this.state.type)
        return l.year;
    }).filter(y => y != undefined);
    this.setState({
      month: value,
      years: Array.from(new Set(lstOfYears)),
      year: lstOfYears[0]
    });
  }
  changeYear(event, index, value) {
    this.setState({ year: value });
  }
  changeType(event, index, value) {
    var lst = this.state.maintainence;
    var lstOfMonths = lst.map(l => {
      if (l.type == value)
        return l.month;
    }).filter(y => y != undefined);
    var month = lstOfMonths[0];
    var lstOfYears = lst.map(l => {
      if (l.type == value && l.month == month)
        return l.year;
    }).filter(y => y != undefined);;
    this.setState({
      type: value,
      months: Array.from(new Set(lstOfMonths)),
      years: Array.from(new Set(lstOfYears)),
      month: month,
      year: lstOfYears[0]
    });
  }
  modify() {
    this.setState({
      search: true
    });

  }
  fromChange(evt, date) {
    this.setState({ fromDate: date });
    this.setState({ toMin: date });
    this.setState({ nomax: false });
    if (this.state.fromDate > this.state.toDate)
      this.setState({ toDate: date });
  }
  toChange(evt, date) {
    this.setState({ toDate: date });

  }
  back() {

  }
  history() {
    var sm = this.state.maintainence.filter(m => {
      if (m.type == this.state.type && m.month == this.state.month && m.year == this.state.year)
        return m;
    });
    this.setState({
      search: false,
      selectedMaintainence: sm[0]
    });
    this.getFunds({
      id: sm[0]._id
    });
  }
  cancel() {
    this.setState({
      search: false
    });
  }

  memberSelected(str, index) {
    // if (index > -1) {
    //   this.setState({
    //     selectedMember: this.state.members[index]
    //   })
    // }
    // else {
    //   alert("select a member");
    // }

  }

  render() {

    return (

      <div className="society-funds">
        <div className="popup-content">
          <i className="fa fa-times" onClick={this.props.onClose} aria-hidden="true"></i>
          <label className="popup-title">Maintainence Funds</label>
          {this.state.maintainence.length > 0 ?
            <div>
              {this.state.search ?
                <div className="search-details clearfix form-div">
                  <SelectField
                    hideText="Type"
                    value={this.state.type}
                    onChange={this.changeType}
                  >
                    {this.state.types.map((ty, i) =>
                      <MenuItem value={ty} key={i} primaryText={ty} />
                    )}

                  </SelectField>
                  <div className="col-xs-6">
                    <SelectField
                      hideText="Months"
                      value={this.state.month}
                      onChange={this.changeMonth}
                    >
                      {this.state.months.map((mon, i) =>
                        <MenuItem value={mon} key={i} primaryText={this.state.monthsName[mon - 1]} />
                      )}

                    </SelectField>
                  </div>
                  <div className="col-xs-6">
                    <SelectField
                      hideText="Year"
                      value={this.state.year}
                      onChange={this.changeYear}
                    >
                      {this.state.years.map((y, i) =>
                        <MenuItem value={y} key={i} primaryText={y} />
                      )}

                    </SelectField>
                  </div>
                  <button onClick={this.history} className="col-xs-5 search-btn">Search</button>
                  <button onClick={this.cancel} className="col-xs-5 cancel-btn">Cancel</button>
                </div>
                :
                <div className="search-details clearfix">
                  <div className="col-xs-8 tran-label">
                    {this.state.selectedMaintainence.type} {this.state.monthsName[this.state.selectedMaintainence.month - 1]} {this.state.selectedMaintainence.year}
                  </div>
                  <div className="col-xs-4 btn-div">
                    <span onClick={this.modify}>| Modify</span>
                  </div>
                </div>
              }
              <div>
                <div className="flat-lst">
                  <div className="summary">
                    <div><span>Expected Funds</span><span className="val"><i className="fa fa-inr"></i> {this.state.maintains.expected}</span></div>
                    <div><span>Received Funds</span><span className="val"><i className="fa fa-inr"></i> {this.state.maintains.received}</span></div>
                    <div><span>Pending Funds</span><span className="val"><i className="fa fa-inr"></i> {this.state.maintains.pending}</span></div>
                  </div>
                  {[...this.state.maintains.members]
                  .sort((a,b)=> (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : 0).map(member =>
                    <div className="member-blk" key={member._id}>
                      <span>{member.name}&nbsp; &nbsp; <span className="house">{member.block}-{member.flat}</span></span>
                      {member.status == 2 ? <span className="status approve"><i className="fa fa-thumbs-up" aria-hidden="true"></i></span> : null}
                      {member.status == 1 ? <span className="status reject"><i className="fa fa-ban" aria-hidden="true"></i>
                        {this.props.role == "President" ?
                          <div className="icon-menu">
                            <IconMenu
                              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                              onItemTouchTap={() => this.blockItem(member, false)}
                            >
                              <MenuItem primaryText="Unblock" value="1" />
                            </IconMenu>
                          </div> : null}
                      </span> : null}

                      {member.status == 0 ?
                        <span className="status pending"><span><i className="fa fa-close" aria-hidden="true"></i></span>
                          {this.props.role == "President" ?
                            <span>
                              <span onClick={() => this.acceptCash(member)}><i className="fa fa-money" aria-hidden="true"></i>
                              </span>
                              <div className="icon-menu">
                                <IconMenu
                                  iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                  anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                                  targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                                  onItemTouchTap={() => this.blockItem(member, true)}>
                                  <MenuItem primaryText="Block" value="1" />
                                </IconMenu>
                              </div>
                            </span> : null}


                        </span> : null}
                    </div>
                  )}
                </div>
              </div>
            </div> : <div className="no-records">
              <label>No maintainence added to your apartment yet.</label>
              <label>Thank You!</label>
            </div>}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    members: state.members,
    maintainence: state.accounts.maintainenceFunds,
    role: state.session.role
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountsActions, dispatch),
    ajaxActions: bindActionCreators(ajaxActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MaintainFunds);