
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VendorRow from './VendorRow';
import '../../styles/vendor.less';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import * as vendorActions from '../../actions/vendorActions';
import AddVendor from '../overlays/AddVendor';
import ValidationService from '../common/Validation';

class VendorBlock extends React.Component {
  componentDidMount() {
    this.props.actions.getAllVendors();
    if (this.props.vendors != undefined && Array.isArray(this.props.vendors)) {
      this.updateVendors(this.props.vendors);
    }
    document.addEventListener("backbutton", this.handleBackButton, false);
  }
  componentWillUnmount() {
    document.removeEventListener("backbutton", this.handleBackButton, false);
  }
  updateVendors(vendors) {
    this.state.allVendors = vendors;
    var lstOfTypes = vendors.map(l => {
      return l.category;
    });
    var lstOfCat = Array.from(new Set([...lstOfTypes]));
    lstOfCat.push("Other");
    lstOfTypes.splice(0, 0, 'All');
    // this.state.selectedType = "All";
    this.state.types = Array.from(new Set(lstOfTypes));

    this.state.categories = lstOfCat;
    if (this.state.selectedType == "All")
      this.setState({
        vendors: this.state.allVendors
      });
    else
      this.setState({
        vendors: this.state.allVendors.filter(l => l.category.toLowerCase() == this.state.selectedType.toLowerCase())
      });

  }
  componentWillReceiveProps(nextProps) {
    this.updateVendors(nextProps.vendors);
  }
  componentDidUpdate() {
    if (this.state.initialiseValidation) {
      var ins = new ValidationService();
      var vendorErrors = ins.addForm("vendor-form");
      this.setState({ errors: vendorErrors });
      this.setState({ initialiseValidation: false });
    }
    if (this.state.addType) {
      (new ValidationService()).addElement(document.getElementById("vType"));
      this.setState({ addType: false });
    }
  }
  constructor(props, context) {
    super(props, context);
    this.addVendor = this.addVendor.bind(this);
    this.setToDefault = this.setToDefault.bind(this);
    this.updateVendorData = this.updateVendorData.bind(this);
    this.saveVendor = this.saveVendor.bind(this);
    this.editVendor = this.editVendor.bind(this);
    this.deleteVendor = this.deleteVendor.bind(this);
    this.likeVendor = this.likeVendor.bind(this);
    this.dislikeVendor = this.dislikeVendor.bind(this);
    this.changeType = this.changeType.bind(this);
    this.toTitleCase = this.toTitleCase.bind(this);
    this.updateErrors = this.updateErrors.bind(this);
    this.updateVendors = this.updateVendors.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
    this.state = {
      vendors: [],
      formNo: 0,
      vendorData: { vendorName: '', vendorPhone: '', category: '' },
      errors: {}
    };

    this.state.allVendors = this.state.vendors;
    var lstOfTypes = this.state.vendors.map(l => {
      return l.category;
    });
    lstOfTypes.splice(0, 0, 'All');
    this.state.selectedType = "All";
    this.state.types = Array.from(new Set(lstOfTypes));
  }
  handleBackButton() {
    this.props.backToHome();
  }
  updateErrors() {
    setTimeout(function () {
      this.setState({
        errors: (new ValidationService()).errors["vendor-form"]
      });
    }.bind(this));
  }
  toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
  }
  changeType(event, index, value) {
    if (value == "All")
      this.setState({
        vendors: this.state.allVendors
      });
    else
      this.setState({
        vendors: this.state.allVendors.filter(l => l.category.toLowerCase() == value.toLowerCase())
      });
    this.setState({
      selectedType: value
    });
  }
  setToDefault() {
    this.setState({ formNo: 0 });
  }
  addVendor(event) {
    this.setState({
      step: 1,
      result: ""
    });
    this.setState({ formNo: 1 });
    this.setState({ initialiseValidation: true });
    this.setState({ vendorData: { vendorName: '', vendorPhone: '', category: this.state.categories[0], othercategory: '' } });
  }
  editVendor(vendor) {
    this.setState({
      step: 1,
      result: ""
    });
    var vendorData = Object.assign({}, vendor);
    vendorData.othercategory = "";
    this.setState({ formNo: 1 });
    this.setState({ initialiseValidation: true });
    this.setState({ vendorData });
  }
  deleteVendor(vendor) {
    if (confirm("Are you sure you want to delete this vendor?"))
      this.props.actions.deleteVendor(vendor._id);
  }
  likeVendor(vendor) {
    this.props.actions.likeVendor(vendor._id);
  }
  dislikeVendor(vendor) {
    this.props.actions.dislikeVendor(vendor._id);
  }
  saveVendor(event) {
    if ((new ValidationService()).validateForm("vendor-form").isValid) {
      var vendorData = Object.assign({}, this.state.vendorData);
      if (vendorData.category == 'Other')
        vendorData.category = vendorData.othercategory;
      vendorData.category = this.toTitleCase(vendorData.category);
      if (this.state.vendorData._id != undefined) {
        this.props.actions.editVendor(vendorData);
        this.setState({
          step: 2,
          result: "Vendor updated successfully!"
        });
      }

      else {
        this.props.actions.addVendor(vendorData);
        this.setState({
          step: 2,
          result: "Vendor added successfully!"
        });
      }


      //this.setState({ formNo: 0 });
    }
    else {
      this.setState({
        errors: (new ValidationService()).errors["vendor-form"]
      });
    }
  }
  updateVendorData(event, index, value) {
    let field = event.target.name;
    if (field == undefined) {
      field = "category";
      event.target.value = value;
      if (value == "Other")
        this.setState({ addType: true });
    }
    let vendorData = this.state.vendorData;
    vendorData[field] = event.target.value;
    return this.setState({ vendorData: vendorData });
  }
  render() {
    return (
      <div className="vendor-block  view-holder">
        {this.state.allVendors.length > 0 ?
          <div>
            <span onClick={this.addVendor} className="fa fa-plus-square"></span>
            <div className="filter-box">
              <SelectField
                value={this.state.selectedType}
                onChange={this.changeType}>
                {this.state.types.map((ty, i) =>
                  <MenuItem value={ty} key={i} primaryText={ty} />
                )}
              </SelectField>
            </div>
            {this.state.vendors.length > 0 ?
              <div>
                {[...this.state.vendors]
                  .sort((a, b) => (a.vendorName.toUpperCase() < b.vendorName.toUpperCase()) ? -1 : (a.vendorName.toUpperCase() > b.vendorName.toUpperCase()) ? 1 : 0)
                  .map(vendor =>
                    <VendorRow key={vendor._id} role={this.props.role} user={this.props.userId} vendor={vendor} onLike={this.likeVendor} onDislike={this.dislikeVendor} onEdit={this.editVendor} onDelete={this.deleteVendor} />
                  )}
              </div>
              :
              <div className="no-records">
                <label>No Vendor found</label>
              </div>}
          </div>
          :
          <div className="no-records">
            <label>Be first to add a vendor</label>
            <button onClick={this.addVendor}>Add Vendor</button>
          </div>}
        {this.state.formNo > 0 ?
          <div className="overlay" onClick={(evt) => this.setToDefault()}>
            <div className="form-box" onClick={(evt) => evt.stopPropagation()}>
              {this.state.formNo == 1 ? <AddVendor step={this.state.step} result={this.state.result} errors={this.state.errors} onBlur={this.updateErrors} vendorTypes={this.state.categories} vendorData={this.state.vendorData} onChange={this.updateVendorData} addVendor={this.saveVendor} cancel={this.setToDefault} /> : null}
            </div>
          </div>
          : null}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  state.vendors.map(v => {
    v.isLikedByYou = v.likeBy.indexOf(',' + state.session.userId + ',') > -1;
    v.isDislikedByYou = v.dislikeBy.indexOf(',' + state.session.userId + ',') > -1;
  });
  return {
    vendors: state.vendors,
    role: state.session.role,
    userId: state.session.userId
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(vendorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VendorBlock);
