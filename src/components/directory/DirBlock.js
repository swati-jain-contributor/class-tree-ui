import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MemberRow from './MemberRow';
import members from '../../api/members';
import '../../styles/directory.less';
import * as memberActions from '../../actions/memberActions';
import AddMember from '../overlays/AddMember';
import ValidationService from '../common/Validation';

class DirBlock extends React.Component {
  componentDidMount() {
    this.props.actions.getAllMembers();
    document.addEventListener("backbutton", this.handleBackButton, false);
  }
  componentWillUnmount() {
    document.removeEventListener("backbutton", this.handleBackButton, false);
  }
  componentWillReceiveProps(nextProps) {
    this.state.members = nextProps.members;
    this.state.allMembers = nextProps.members;
  }
  constructor(props, context) {
    super(props, context);
    this.searchMembers = this.searchMembers.bind(this);
    this.addMember = this.addMember.bind(this);
    this.setToDefault = this.setToDefault.bind(this);
    this.updateMemberData = this.updateMemberData.bind(this);
    this.saveMember = this.saveMember.bind(this);
    this.editMember = this.editMember.bind(this);
    this.deleteMember = this.deleteMember.bind(this);
    this.updateErrors = this.updateErrors.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
    this.state = {
      formNo: 0,
      members: [],
      memberData: { name: '', phone: '', flat: '', block: '', family: '' },
      errors: {}
    };
    if (this.props.members != undefined && Array.isArray(this.props.members)) {
      this.state.members = this.props.members;
      this.state.allMembers = this.props.members;
    }
    window.raiseAnalyticsEvent("DIRECTORY_CHECKED");
  }
  handleBackButton() {
    this.props.backToHome();
  }
  searchMembers(event) {
    let tempMembers = this.state.allMembers.filter(member =>
      (member.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) ||
      (member.phone.indexOf(event.target.value) > -1) ||
      (member.flat.indexOf(event.target.value) > -1) ||
      (member.block.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) ||
      ((member.block + '-' + member.flat).toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
    );
    this.setState({
      members: tempMembers
    });
  }
  setToDefault() {
    this.setState({ formNo: 0 });
  }
  addMember(event) {
    this.setState({
      step: 1,
      result: ""
    });
    this.setState({ formNo: 1 });
    this.setState({ initialiseValidation: true });
    this.setState({ memberData: { name: '', phone: '', flat: '', block: '', family: '',isPresident:false } });
  }
  editMember(member) {
    this.setState({
      step: 1,
      result: ""
    });
    this.setState({ formNo: 1 });
    this.setState({ initialiseValidation: true });
    var mem=Object.assign({}, member);
    mem.isPresident=member.role=="President";
    this.setState({ memberData: Object.assign({}, mem) });
  }

  updateErrors() {
    setTimeout(function () {
      var errors = (new ValidationService()).errors["member-form"];
      if (errors.memPhone)
        errors.phoneError = "";
      if (errors.memFlat || errors.memBlock)
        errors.flatError = "";
      this.setState({
        errors
      });
    }.bind(this));
  }
  deleteMember(member) {
    if (confirm("Are you sure you want to delete this member?"))
      this.props.actions.deleteMember(member._id);
  }
  checkPhone(members, d) {
    var s = members.find(t => t.phone == d.phone);
    if (s) {
      var errors = this.state.errors;
      errors.phoneError = "This phone is already registered";
      this.setState({ errors });
      return false;
    }
    else {
      var errors = this.state.errors;
      errors.phoneError = "";
      this.setState({ errors });
      return true;
    }
  }
  checkAddress(members, d) {
    var s = members.find(t => t.flat == d.flat && t.block == d.block);
    if (s) {
      var errors = this.state.errors;
      errors.flatError = "This flat is already booked by some other member";
      this.setState({ errors });
      return false;
    }
    else {
      var errors = this.state.errors;
      errors.flatError = "";
      this.setState({ errors });
      return true;
    }
  }
  saveMember(event) {
    var errors = this.state.errors;
    errors.flatError = "";
    errors.phoneError = "";
    this.setState({ errors });
    if ((new ValidationService()).validateForm("member-form").isValid) {
      var d = this.state.memberData;
      if (d._id != undefined) {
        var members = this.state.members.filter(m => m._id != d._id);
        var vp = this.checkPhone(members, d);
        var va = this.checkAddress(members, d);
        if (vp && va) {
          // d.role = "Resident";
          this.props.actions.editMember(d);
          //this.setState({ formNo: 0 });
          this.setState({
            step: 2,
            result: "Member updated successfully!"
          });
        }
      }
      else {
        var members = this.state.members;
        var vp = this.checkPhone(members, d);
        var va = this.checkAddress(members, d);
        if (vp && va) {
          // d.role = "Resident";
          this.props.actions.addMember(d);
          //this.setState({ formNo: 0 });
          this.setState({
            step: 2,
            result: "Member added successfully!"
          });

        }
      }
    }
    else {
      this.setState({
        errors: (new ValidationService()).errors["member-form"]
      });
    }
  }
  updateMemberData(event, isInputChecked) {
    const field = event.target.name;
    let memberData = this.state.memberData;
    if (isInputChecked != undefined) {
      memberData.isPresident=isInputChecked;
      isInputChecked ? memberData.role = "President" : memberData.role = "Resident";
    }
    else      
      memberData[field] = event.target.value;
    return this.setState({ memberData: memberData });
  }
  componentDidUpdate() {
    if (this.state.initialiseValidation) {
      var ins = new ValidationService();
      var memberErrors = ins.addForm("member-form");
      this.setState({ errors: memberErrors });
      this.setState({ initialiseValidation: false });
    }
  }
  render() {
    return (
      <div className="dir-block  view-holder">
        <div>
          <h3>Talk to your neighbours</h3>
          {this.props.role == "President" ?
            <span onClick={this.addMember} className="fa fa-plus-square"></span> : null}
          <input type="text" className="form-control" onChange={this.searchMembers} placeholder="Search" />
          {[...this.state.members].sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : 0).map(member =>
            <MemberRow key={member._id} member={member} role={this.props.role} onEdit={this.editMember} onDelete={this.deleteMember} />
          )}
        </div>
        {this.state.formNo > 0 ?
          <div className="overlay" onClick={(evt) => this.setToDefault()}>
            <div className="form-box" onClick={(evt) => evt.stopPropagation()}>
              {this.state.formNo == 1 ? <AddMember step={this.state.step} result={this.state.result} errors={this.state.errors} onBlur={this.updateErrors} memberData={this.state.memberData} onChange={this.updateMemberData} addMember={this.saveMember} cancel={this.setToDefault} /> : null}
            </div>
          </div>
          : null}
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    members: state.members,
    allMembers: state.members,
    role: state.session.role
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(memberActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DirBlock);