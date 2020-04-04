import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
const AddDiscussion = ({ discussionData, onChange, addDiscussion, cancel, onBlur, errors ,step,result }) => {
  return (
    <div className="">
      {step==1?
      <div>
      <h3>Add Group</h3>
      <form id="group-form">
        <div className="col-xs-6">
          <TextField hintText="Group Name" name="title" id="dAbout" onBlur={onBlur}  errorText={errors.dAbout}  value={discussionData.title} onChange={onChange} >
            <input required name="title"  maxLength="15"/>
          </TextField>
        </div>
        <div className="col-xs-6">
          <TextField hintText="Purpose" name="msg" id="dMsg" onBlur={onBlur}  errorText={errors.dMsg}  value={discussionData.msg} onChange={onChange} >
            <input required name="msg"  maxLength="30" />
          </TextField>
        </div>
        <div className="col-xs-12">
          <button type="button" onClick={addDiscussion}>Add Group</button>
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

AddDiscussion.propTypes = {
  discussionData: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  addDiscussion: React.PropTypes.func.isRequired,
  cancel: React.PropTypes.func.isRequired,
};

export default AddDiscussion;
