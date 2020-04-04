import React, { PropTypes } from 'react';
import DatePicker from 'material-ui/DatePicker';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as accountsActions from '../../actions/accountsActions';
import AccountsApi from '../../api/accountsApi';
import AddExpense from '../overlays/AddExpense';
import ValidationService from '../common/Validation';
import * as ajaxActions from '../../actions/ajaxStatusActions';
class SocietyFunds extends React.Component {
  componentDidMount() {
    var obj = {};
    obj.startDate = new Date();
    obj.endDate = new Date();
    obj.startDate.setYear(obj.startDate.getFullYear() - 1);
    this.setState({
      from: obj.startDate.getTime(),
      fromDate: obj.startDate,
      to: obj.endDate.getTime(),
      toDate: obj.endDate,
      toMin: obj.startDate
    });
    this.getFunds(obj);
  }

  constructor(props, context) {
    super(props, context);
    this.checked = this.checked.bind(this);
    this.fromChange = this.fromChange.bind(this);
    this.toChange = this.toChange.bind(this);
    this.back = this.back.bind(this);
    this.history = this.history.bind(this);
    this.cancel = this.cancel.bind(this);
    this.modify = this.modify.bind(this);
    this.getFunds = this.getFunds.bind(this);
    this.addExpense = this.addExpense.bind(this);
    this.saveExpense = this.saveExpense.bind(this);
    this.setToDefault = this.setToDefault.bind(this);
    this.updateExpenseData = this.updateExpenseData.bind(this);
    this.updateErrors = this.updateErrors.bind(this);
    this.checkAmount = this.checkAmount.bind(this);
    window.raiseAnalyticsEvent("APT_FUNDS_CHECKED");
    // {
    //       id: 1,
    //       type: "cr",
    //       amt: 100,
    //       remarks: "Maintainence",
    //       date: '1486382252233'
    //     },
    //     {
    //       id: 2,
    //       type: "cr",
    //       amt: 100,
    //       remarks: "Ganesh Pooja",
    //       date: '1486382252233'
    //     }, {
    //       id: 3,
    //       type: "db",
    //       amt: 100,
    //       remarks: "Lift repair",
    //       date: '1486382252233'
    //     }, {
    //       id: 4,
    //       type: "cr",
    //       amt: 200,
    //       remarks: "Renovation",
    //       date: '1486665000000'
    //     }, {
    //       id: 5,
    //       type: "db",
    //       amt: 100,
    //       remarks: "Renovation spent",
    //       date: '1486665000000'
    //     }
    this.state = {
      from: 1486382252233,
      fromDate: new Date(1486382252233),
      toDate: new Date(1486665000000),
      to: 1486665000000,
      oldBalance: 25000,
      newBalance: 30000,
      currentBalance: 45000,
      search: false,
      nomax: true,
      toMin: new Date(),
      trans: [
      ],
      errors: {}
    };
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
  }
  updateErrors() {
    setTimeout(function () {
      var errors = (new ValidationService()).errors["expense-form"];
      if (errors.expAmt)
        errors.amtError = "";
      this.setState({
        errors
      });
    }.bind(this));
  }
  getFunds(obj) {
    this.props.ajaxActions.beginAjaxCall();
    AccountsApi.getSocietyFunds(obj).then(function (data) {
      this.props.ajaxActions.ajaxCallError();
      //this.state.transactions=data.transactions;
      if (data.status == "SUCCESS") {
        data = data.response;
        var oldBalance = data.currentBalance;

        var trans = trans = data.transactions.map(tr => {
          tr._id = tr._id;
          tr.amt = tr.amount;
          tr.date = (new Date(tr.createdOn)).getTime();
          if (tr.type == 'cr')
            oldBalance -= tr.amount;
          else
            oldBalance += tr.amount;
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
          transactions: transactions,
          newBalance: data.currentBalance,
          oldBalance
        });
        $(".account-block .society-funds .line").height($(".account-block .society-funds .transactions .outer-set").height() - 32 + 'px');
      }
    }.bind(this), function (error) {
      console.log("Error:" + error);
      this.props.ajaxActions.ajaxCallError();
    }.bind(this));
  };
  addExpense() {
    this.setState({
      step: 1,
      result: ""
    });
    this.setState({ initialiseValidation: true });
    this.setState({ formNo: 1 });
    this.setState({ expenseData: { remarks: '', amount: '' } });

  };
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
  setToDefault() {
    this.setState({ formNo: 0 });
  }
  checkAmount() {
    if (this.state.expenseData.amount > this.state.newBalance) {
      var errors = this.state.errors;
      errors.amtError = "Insufficient Funds";
      this.setState({ errors });
      return false;
    }
    else {
      var errors = this.state.errors;
      errors.amtError = "";
      this.setState({ errors });
      return true;
    }
  }
  saveExpense(event) {
    var errors = this.state.errors;
    errors.amtError = "";
    this.setState({ errors });
    if ((new ValidationService()).validateForm("expense-form").isValid) {
      window.raiseAnalyticsEvent("EXPENSE_ADDED");
      if (this.checkAmount()) {
        this.props.actions.addExpense(this.state.expenseData).then(function () {
          var curr = new Date();
          this.getFunds({
            startDate: this.state.fromDate,
            endDate: this.state.toDate
          });
          this.setState({
            step: 2,
            result: "Expense debited successfully!"
          });
        }.bind(this));
      }
    }
    else {
      this.setState({
        errors: (new ValidationService()).errors["expense-form"]
      });
    }
  }
  updateExpenseData(event) {
    const field = event.target.name;
    let expenseData = this.state.expenseData;
    expenseData[field] = event.target.value;
    return this.setState({ expenseData: expenseData });
  }
  history() {
    this.setState({
      search: false,
      from: this.state.fromDate.getTime(),
      to: this.state.toDate.getTime(),
    });
    this.getFunds({
      startDate: this.state.fromDate,
      endDate: this.state.toDate
    })
  }
  cancel() {
    this.setState({
      search: false
    });
  }
  checked(evt, id) {
  }
  componentDidUpdate() {
    if (this.state.initialiseValidation) {
      var ins = new ValidationService();
      var expenseErrors = ins.addForm("expense-form");
      this.setState({ errors: expenseErrors });
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
    var format = function (d) {
      var date = new Date(parseInt(d));
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
      return day + ' ' + monthNames[monthIndex] + ' ' + year;
    };
    var today = new Date();
    return (

      <div className="society-funds">
        <div className="popup-content">
          <i className="fa fa-times" onClick={this.props.onClose} aria-hidden="true"></i>
          <label className="popup-title">Society Funds</label>
          {
            this.props.role == "President" ?
              <span onClick={this.addExpense} className="fa fa-plus-square"></span> : null
          }
          {this.state.search ?
            <div className="search-details clearfix form-div">
              <div className="col-xs-6 date-box">
                <DatePicker hintText="From" maxDate={today} onChange={this.fromChange} autoOk={true} value={this.state.fromDate} />
              </div>
              <div className="col-xs-6 date-box">
                <DatePicker hintText="To" minDate={this.state.toMin} maxDate={today} onChange={this.toChange} autoOk={true} value={this.state.toDate} />
              </div>
              <button onClick={this.history} className="col-xs-5 search-btn">Search</button>
              <button onClick={this.cancel} className="col-xs-5 cancel-btn">Cancel</button>
            </div>
            :
            <div className="search-details clearfix">
              <div className="col-xs-8">
                <span> Showing transactions </span>
                {format(this.state.from)} to {format(this.state.to)}
              </div>
              <div className="col-xs-4 btn-div">
                <span onClick={this.modify}>| Modify</span>
              </div>
              <span className="max-msg">Max. 100 Transactions</span>
            </div>
          }
          <div>
            {Object.keys(this.state.transactions).length > 0 ?
              <div className="transactions">
                <div className="line"></div>
                <div className="outer-set">
                  <div className="tran clearfix">
                    <div className="col-xs-8 remark">New Balance</div>
                    <div className="col-xs-4 amt"><i className="fa fa-inr"></i>  {this.state.newBalance}</div>
                  </div>
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
                  <div className="tran clearfix">
                    <div className="col-xs-8 remark">Old Balance</div>
                    <div className="col-xs-4 amt"><i className="fa fa-inr"></i>  {this.state.oldBalance}</div>
                  </div>
                </div>
              </div>
              :
              <div className="no-records">
                <label>No transactions were made during this period.</label>
                <label>Thank You!</label>
              </div>
            }
          </div>
        </div>
        {this.state.formNo > 0 ?
          <div className="overlay" onClick={(evt) => this.setToDefault()}>
            <div className="form-box" onClick={(evt) => evt.stopPropagation()}>
              {this.state.formNo == 1 ? <AddExpense step={this.state.step} result={this.state.result} expenseData={this.state.expenseData} onBlur={this.updateErrors} errors={this.state.errors} onChange={this.updateExpenseData} saveExpense={this.saveExpense} cancel={this.setToDefault} /> : null}
            </div>
          </div>
          : null}
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    role: state.session.role
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountsActions, dispatch),
    ajaxActions: bindActionCreators(ajaxActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SocietyFunds);