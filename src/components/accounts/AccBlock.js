import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PaymentBlock from './PaymentBlock';
import SocietyFunds from './SocietyFunds';
import FlatFunds from './FlatFunds';
import MaintainFunds from './MaintainFunds';
import '../../styles/account.less';
import * as accountsActions from '../../actions/accountsActions';
import AddMaintainence from '../overlays/AddMaintainence';
import ValidationService from '../common/Validation';

import 'jquery';
// import 'bootstrap';
class AccBlock extends React.Component {

  componentDidMount() {
    this.props.actions.getAllMaintainence();
    this.props.actions.getPendingMaintainence({ id: this.props.id });
    document.addEventListener("backbutton", this.handleBackButton, false);
  }
  componentWillUnmount() {
    document.removeEventListener("backbutton", this.handleBackButton, false);
  }
  constructor(props, context) {
    super(props, context);
    this.load = this.load.bind(this);
    this.createMaintainence = this.createMaintainence.bind(this);
    this.updateMaintainData = this.updateMaintainData.bind(this);
    this.setToDefault = this.setToDefault.bind(this);
    this.saveMaintainence = this.saveMaintainence.bind(this);
    this.payMaintainence = this.payMaintainence.bind(this);
    this.updateErrors = this.updateErrors.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
    this.state = {
      start: false,
      index: 0,
      formNo: 0,
      maintainData: { type: '', amt: '' },
      members: [],
      errors: {}
    };
    this.allMembers = this.state.members;
  }
  handleBackButton() {
    if (this.state.index > 0)
      this.setState({
        index: 0
      });
    else {
      this.props.backToHome();
    }
  }
  createMaintainence() {
    this.setState({
      step: 1,
      result: ""
    });
    this.setState({ formNo: 1 });
    this.setState({ initialiseValidation: true });
    this.setState({ maintainData: { type: this.props.types[0], amt: '', othertype: '' } });
  }
  payMaintainence(ids) {
    console.log(ids);
    this.props.actions.payMaintainence({ ids: ids });
  }
  load(i) {
    this.setState({ index: i });
    this.setState({ start: true });
    this.props.actions.getPendingMaintainence({ id: this.props.id });
  }
  setToDefault() {
    this.setState({ formNo: 0 });
  }
  updateMaintainData(event, index, value) {
    var field = event.target.name;
    if (field == undefined) {
      field = "type";
      event.target.value = value;
      if (value == "Other")
        this.setState({ addType: true });
    }
    let maintainData = this.state.maintainData;
    maintainData[field] = event.target.value;
    return this.setState({ maintainData });
  }
  updateErrors() {
    setTimeout(function () {
      var errors = (new ValidationService()).errors["maintainence-form"];
      this.setState({
        errors
      });
    }.bind(this));
  }
  saveMaintainence(event) {

    if ((new ValidationService()).validateForm("maintainence-form").isValid) {
      var maintainData = Object.assign({}, this.state.maintainData);
      if (maintainData.type == 'Other')
        maintainData.type = maintainData.othertype;
      var s = this.props.accFunds.maintainenceFunds.find(
        t => t.type == maintainData.type && t.month == ((new Date()).getMonth() + 1) && t.year == (new Date()).getFullYear()
      );
      if (s) {
        var errors = Object.assign({}, this.state.errors);
        errors.typeMonth = "Maintainence of " + maintainData.type + " already created in this month";
        this.setState({
          errors: errors
        });
        return;
      }
      this.props.actions.createMaintainence(maintainData);
      this.setState({
        step: 2,
        result: "Maintainence added successfully!"
      });
      // this.setState({ formNo: 0 });
    }
    else {
      this.setState({
        errors: (new ValidationService()).errors["maintainence-form"]
      });
    }
  }
  componentDidUpdate() {
    if (this.state.start) {
      if (this.state.index == 0) {
        if (document.querySelector('.pop.loads') != null)
          document.querySelector('.pop.loads').animate({
            top: ['0', '100vh']
          }, 500);
      }
      else {
        if (document.querySelector('.pop.loads') != null)
          document.querySelector('.pop.loads').animate({
            top: ['100vh', '0']
          }, 1000);
      }
      this.setState({ start: false });
    }
    if (this.state.initialiseValidation) {
      var ins = new ValidationService();
      var maintainenceErrors = ins.addForm("maintainence-form");
      this.setState({ errors: maintainenceErrors });
      this.setState({ initialiseValidation: false });
    }
    if (this.state.addType) {
      (new ValidationService()).addElement(document.getElementById("type"));
      this.setState({ addType: false });
    }

  }
  render() {
    return (
      <div className="account-block  view-holder">
        <div>
          <PaymentBlock dues={this.props.accFunds.pendingMaintainence} pay={this.payMaintainence} />
          <div className="clearfix">
            <div className="fund-box Society col-xs-12" onClick={() => this.load(1)}>
              <div className="inner-fund-box">
                Society Funds
              </div>
            </div>
            <div className="fund-box resi col-xs-12" onClick={() => this.load(2)}>
              <div className="inner-fund-box">
                Resident Account
              </div>
            </div>
            {
              this.props.role == "President" ?
                <div className="fund-box maintain col-xs-12" onClick={() => this.load(3)}>
                  <div className="inner-fund-box">
                    Maintainence Account
                  </div>
                </div>:null
            }
            
            {
              this.props.role == "President" ?
                <button onClick={this.createMaintainence}>Create Maintainence</button>
                : null
            }

          </div>
        </div>

        {this.state.formNo > 0 ?
          <div className="overlay" onClick={(evt) => this.setToDefault()}>
            <div className="form-box" onClick={(evt) => evt.stopPropagation()}>
              {this.state.formNo == 1 ? <AddMaintainence step={this.state.step} result={this.state.result} maintainTypes={this.props.types} errors={this.state.errors} maintainData={this.state.maintainData} onChange={this.updateMaintainData} onBlur={this.updateErrors} addMaintainence={this.saveMaintainence} cancel={this.setToDefault} /> : null}
            </div>
          </div>
          : null}
        {this.state.index == 1 ? <div className={"pop " + (this.state.index == 1 ? "loads" : "")}><SocietyFunds onClose={() => this.load(0)} /></div> : null}
        {this.state.index == 2 ? <div className={"pop " + (this.state.index == 2 ? "loads" : "")}><FlatFunds onClose={() => this.load(0)} /></div> : null}
        {this.state.index == 3 ? <div className={"pop " + (this.state.index == 3 ? "loads" : "")}><MaintainFunds onClose={() => this.load(0)} /></div> : null}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  var lst = state.accounts.maintainenceFunds;
  var lstOfTypes = lst.map(l => {
    return l.type;
  });
  lstOfTypes = Array.from(new Set(lstOfTypes));
  //lstOfTypes.splice(0,0,"Other");
  lstOfTypes.push("Other");
  return {
    accFunds: state.accounts,
    id: state.session.userId,
    types: lstOfTypes,
    role: state.session.role
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccBlock);
