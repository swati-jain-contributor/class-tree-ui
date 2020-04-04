import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import InputMask from 'react-input-mask';
const AddVendor = ({ vendorData, onChange, addVendor, cancel, vendorTypes, onBlur, errors ,step,result }) => {
  var action=vendorData._id>0? 'Update':'Add';
  return (
    <div className="">
      {step==1?
      <div>
      <h3>AddVendor</h3>
      <form id="vendor-form">
        <div className="col-xs-6">
          <TextField hintText="Vendor Name" name="vendorName" id="vName" onBlur={onBlur}  errorText={errors.vName}  value={vendorData.vendorName} onChange={onChange} >
            <input required name="vendorName" maxLength="20" value={vendorData.vendorName}/>
            </TextField>
        </div>
        <div className="col-xs-6">
          <TextField hintText="Phone" name="vendorPhone"  id="vPhone" onBlur={onBlur} errorText={errors.vPhone}  value={vendorData.vendorPhone} onChange={onChange} >
            <InputMask type="tel" required name="vendorPhone"  pattern="\d{10}" maskChar=""  mask="9999999999" value={vendorData.vendorPhone}/>
            </TextField>
        </div>
        <div className="col-xs-6">
          <SelectField
            value={vendorData.category}
            name="category"
            onChange={onChange}>
            {vendorTypes.map((ty, i) =>
              <MenuItem value={ty} key={i} name="category" primaryText={ty} />
            )}
          </SelectField>
        </div>
        <div className="col-xs-6">
          {vendorData.category == 'Other' ?
            <TextField hintText="Category" id="vType" errorText={errors.vType} onBlur={onBlur} name="othercategory" value={vendorData.othercategory} onChange={onChange} >
              <input required name="othercategory"  maxLength="15" value={vendorData.othercategory} />
              </TextField>
            : null}
        </div>
        <div className="col-xs-12">
          <button type="button" onClick={addVendor}>{action} Vendor</button>
          <button type="button" className="sec" onClick={cancel}>Cancel</button>
        </div>
      </form>
      </div>
      :<div className="result-page">
        <label>{result}</label>
        <button type="button" onClick={cancel}>Close</button>
        </div>}
    </div>
  );
};

AddVendor.propTypes = {
  vendorTypes: React.PropTypes.array.isRequired,
  vendorData: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  addVendor: React.PropTypes.func.isRequired,
  cancel: React.PropTypes.func.isRequired,
};

export default AddVendor;
