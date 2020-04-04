import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import InputMask from 'react-input-mask';


const AddMaintainence = ({ maintainTypes, maintainData, onChange,onBlur, addMaintainence, cancel, errors ,step,result }) => {
  return (
    <div className="">
      {step==1?
      <div>
      <h3>Create Maintainence</h3>
      <form id="maintainence-form">
        <div className="col-xs-12 typeSelect">
          <SelectField
            value={maintainData.type}
            name="type" autoWidth={true} style={{ width: '100%' }}
            onChange={onChange}>
            {maintainTypes.map((ty, i) =>
              <MenuItem value={ty} key={i} name="type" primaryText={ty} />
            )}
          </SelectField>
          <span className="error">{errors.typeMonth}</span>
        </div>        
        <div className="col-xs-12 type">
          {maintainData.type == 'Other' ?
            <TextField hintText="Type" id="type" onBlur={onBlur} errorText={errors.type} fullWidth={true} name="othertype" required={true} maxLength="20" value={maintainData.othertype} >
              <input required={true} pattern="^((?![Oo][Tt][Hh][Ee][Rr]).)*$"  maxLength="15"  name="othertype"   onChange={onChange}  value={maintainData.othertype}/>
              </TextField>
            : null}
        </div>
        <div className="col-xs-12">
          <TextField hintText="Amount" id="amount" onBlur={onBlur} errorText={errors.amount} fullWidth={true} min="1" max="50000" required={true} name="amt" value={maintainData.amt} onChange={onChange}>
            <InputMask pattern="^[0-9]*[1-9][0-9]*$"  type="tel" name="amt" mask="999999" maskChar="" required={true}  onChange={onChange}  value={maintainData.amt} />
          </TextField>
        </div>
      </form>
      <div className="col-xs-12">
        <button type="button" onClick={addMaintainence}>Add Maintainence</button>
        <button type="button" className="sec" onClick={cancel}>Cancel</button>
      </div>
      </div>
      :<div className="result-page">
        <label>{result}</label>
        <button type="button" onClick={cancel}>Close</button>
        </div>}
    </div>
  );
};

AddMaintainence.propTypes = {
  maintainData: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  addMaintainence: React.PropTypes.func.isRequired,
  cancel: React.PropTypes.func.isRequired,
};

export default AddMaintainence;
