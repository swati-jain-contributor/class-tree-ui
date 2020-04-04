import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
const AddComplaint = ({ complaintData, onChange, addComplaint, cancel, onBlur, errors, step, result }) => {
  return (
    <div className="">
      {step==1?
      <div>
        <h3>Add Complaint</h3>
        <form id="complaint-form">
          <div className="col-xs-6">
            <TextField hintText="About" id="cAbout" onBlur={onBlur} errorText={errors.cAbout} value={complaintData.title} onChange={onChange}>
              <input required name="title" maxLength="15" />
            </TextField>
          </div>
          <div className="col-xs-6">
            <TextField hintText="Message" id="cMsg" onBlur={onBlur} errorText={errors.cMsg} value={complaintData.msg} onChange={onChange} >
              <input required name="msg" maxLength="30" />
            </TextField>
          </div>
          <div className="col-xs-12">
            <button type="button" onClick={addComplaint}>Add Issue</button>
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

AddComplaint.propTypes = {
  complaintData: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  addComplaint: React.PropTypes.func.isRequired,
  cancel: React.PropTypes.func.isRequired,
};

export default AddComplaint;
