import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { bindActionCreators } from 'redux';
import members from '../../api/members';
import AutoComplete from 'material-ui/AutoComplete';
import AccountsApi from '../../api/accountsApi';
import * as accountsActions from '../../actions/accountsActions';
import * as ajaxActions from '../../actions/ajaxStatusActions';


class FlatFunds extends React.Component {
  componentWillReceiveProps(nextProps) {
    var lst = [];
    var memberLst = [...nextProps.members].sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : 0);
    memberLst.map((item) => lst.push({ text: item.name + '  ' + '[' + item.block + '-' + item.flat + ']', value: item.name + '  ' + '[' + item.block + '-' + item.flat + ']' }));
    this.setState({
      dataSource: lst
    });

  }
  componentDidMount() {
    var sm = {
      name: this.props.user.name,
      block: 'A2',
      flat: '403'
    };
    this.setState({
      selectedMember: sm
    });
    this.setState({
      selectedMemberTemp: sm
    });
    this.getFunds({
      year: (new Date()).getFullYear()
    });
  }
  constructor(props, context) {
    super(props, context);
    this.lowercase = this.lowercase.bind(this);
    this.back = this.back.bind(this);
    this.history = this.history.bind(this);
    this.cancel = this.cancel.bind(this);
    this.modify = this.modify.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.memberSelected = this.memberSelected.bind(this);
    this.getFunds = this.getFunds.bind(this);
    var years = [];
    var year = (new Date()).getFullYear();
    window.raiseAnalyticsEvent("RESIDENT_FUNDS_CHECKED");
    for (var i = 0; i < 10; i++) {
      years.push(year - i);
    }
    this.state = {
      members,
      selectedMember: members[0],
      search: false,
      years,
      year,
      trans: [],
      yearTemp: year
    };
    var lst = [];
    this.state.members.map((item) => lst.push({ text: item.name + '  ' + '[' + item.block + '-' + item.flat + ']', value: item.name + '  ' + '[' + item.block + '-' + item.flat + ']' }));

    this.state.dataSource = lst;
    let transactions = {

    };
    this.state.trans.map((tr) => {
      var d = new Date(parseInt(tr.date));
      d.setHours(0, 0, 0, 0);
      var s = d.getTime();
      if (transactions.hasOwnProperty(s)) {
        transactions[s].push(tr);
      }
      else {
        transactions[s] = [tr];
      }
    });
    this.state.transactions = transactions;
    // <input type="date" className="col-xs-6" placeholder="From"/>
  }
  lowercase(searchText, key) {
    return key.toLowerCase().includes(searchText.toLowerCase());
  }
  getFunds(obj) {
    obj.startDate = new Date(obj.year, 0, 1, 0, 0, 0);
    obj.endDate = new Date(obj.year + 1, 0, 1, 0, 0, 0);
    if (obj.selectedMember)
      var sm = obj.selectedMember;
    else
      var sm = this.state.selectedMember;
    this.props.ajaxActions.beginAjaxCall();
    AccountsApi.getMemberStmt({ id: sm._id, startDate: obj.startDate, endDate: obj.endDate }).then(function (data) {
      this.props.ajaxActions.ajaxCallError();
      if (data.status == "SUCCESS") {
        var data = data.response;
        var trans = data.map(tr => {
          tr._id = tr._id;
          tr.amt = tr.amount;
          tr.date = (new Date(tr.createdOn)).getTime();
          return tr;
        });
        var transactions = [];
        trans.map((tr) => {
          var d = new Date(parseInt(tr.date));
          d.setHours(0, 0, 0, 0);
          var s = d.getTime();
          if (transactions.hasOwnProperty(s)) {
            transactions[s].push(tr);
          }
          else {
            transactions[s] = [tr];
          }
        });
        this.setState({
          transactions: transactions
        });
        $(".account-block .society-funds .line").height($(".account-block .society-funds .transactions ").height() - 80 + 'px');
      }
      else {
        
        console.log("Request Failed");
      }
    }.bind(this),function(error){
      console.log("Error:"+error);
      this.props.ajaxActions.ajaxCallError();
    }.bind(this));
  }
  modify() {
    this.setState({
      search: true
    });
  }
  // fromChange(evt, date) {
  //   this.setState({ fromDate: date });
  //   this.setState({ toMin: date });
  //   this.setState({ nomax: false });
  //   if (this.state.fromDate > this.state.toDate)
  //     this.setState({ toDate: date });

  // }
  // toChange(evt, date) {
  //   this.setState({ toDate: date });

  // }
  changeYear(event, index, value) {
    this.setState({ yearTemp: value });
  }
  back() {

  }
  history() {
    this.setState({
      search: false,
      year: this.state.yearTemp,
      selectedMember: this.state.selectedMemberTemp
    });
    this.getFunds({
      year: this.state.yearTemp,
      selectedMember: this.state.selectedMemberTemp
    })
  }
  cancel() {
    this.setState({
      search: false
    });
  }

  memberSelected(str, index) {
    if (index > -1) {
      this.setState({
        selectedMemberTemp: this.props.members[index]
      })
    }
    else {
      alert("select a member");
    }

  }

  render() {
    var monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];
    var format = function (d) {
      var date = new Date(parseInt(d));
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
      return day + ' ' + monthNames[monthIndex] + ' ' + year;
    };
    var today = new Date();
    return (

      <div className="society-funds flat-funds">
        <div className="popup-content">
          <i className="fa fa-times" onClick={this.props.onClose} aria-hidden="true"></i>
          <label className="popup-title">Resident Funds</label>
          {this.state.search ?
            <div className="search-details clearfix form-div">
              {this.props.user.role =='President'?
              <AutoComplete
                filter={this.lowercase}
                hintText="Type to search a member"
                searchText={this.state.selectedMember.name + '  [' + this.state.selectedMember.block + '-' + this.state.selectedMember.flat + ']'}
                onNewRequest={this.memberSelected}
                dataSource={this.props.dataSource}
              />:null}
              
              <SelectField
                value={this.state.yearTemp}
                onChange={this.changeYear}
              >
                {this.state.years.map((y, i) =>
                  <MenuItem value={y} key={i} primaryText={y} />
                )}

              </SelectField>
              <button onClick={this.history} className="col-xs-5 search-btn">Search</button>
              <button onClick={this.cancel} className="col-xs-5 cancel-btn">Cancel</button>
            </div>
            :
            <div className="search-details clearfix">
              <div className="member-details">
                {this.state.selectedMember.name}-[{this.state.selectedMember.block}-{this.state.selectedMember.flat}]
              </div>
              <div className="col-xs-8">

                <span>Showing transactions for year-{this.state.year}</span>
              </div>
              <div className="col-xs-4 btn-div">
                <span onClick={this.modify}>| Modify</span>
              </div>
            </div>
          }
          <div>
            {Object.keys(this.state.transactions).length > 0 ?
              <div className="transactions">
                <div className="line"></div>

                {Object.keys(this.state.transactions).map(d =>
                  <div key={d} className="set">
                    <div className="circle"><i className="fa fa-calendar" aria-hidden="true"></i></div>
                    <div className="date">{format(d)}</div>
                    {this.state.transactions[d].map(tr =>
                      <div key={tr._id} className="tran clearfix">
                        <div className="col-xs-8 remark">{tr.remarks}</div>
                        <div className={"col-xs-4 amt " + (tr.type == 'cr' ? "credit" : "debit")}><i className="fa fa-inr"></i>{tr.type == "db" ? "-(" + tr.amt + ")" : tr.amt}</div>
                      </div>
                    )}
                  </div>
                )}

              </div>
              :
              <div className="no-records">
                <label>No amount is paid by {this.state.selectedMember.name} in {this.state.year}</label>
                <label>Thank You!</label>
              </div>}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  var lst = [];
  var members = [...state.members];
  members.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : 0);
  members.map((item) => lst.push({ text: item.name + '  ' + '[' + item.block + '-' + item.flat + ']', value: item.name + '  ' + '[' + item.block + '-' + item.flat + ']' }));
  console.log(lst.length);
  return {
    dataSource: lst,
    members: members,
    user: state.session
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountsActions, dispatch),
    ajaxActions: bindActionCreators(ajaxActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatFunds);