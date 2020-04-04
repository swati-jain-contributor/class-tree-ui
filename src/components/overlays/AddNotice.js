import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
const AddNotice = ({ noticeData, onChange, addNotice, cancel, onBlur, errors ,step,result }) => {
  var action=noticeData._id>0? 'Update':'Add';
  return (
    <div className="">
      {step==1?
      <div>
      <h3>Add Notice</h3>
      <form id="notice-form">
        <div className="col-xs-12">
          <TextField hintText="Title" name="title" id="nAbout" maxLength="15" onBlur={onBlur} errorText={errors.nAbout}  value={noticeData.title} onChange={onChange} >
            <input required name="title"  maxLength="15"   value={noticeData.title} />
            </TextField>
        </div>
        <div className="col-xs-12">
          <TextField hintText="Content" name="msg" id="nMsg"  maxLength="70" onBlur={onBlur}  errorText={errors.nMsg}  value={noticeData.msg} onChange={onChange} >
            <input required name="msg"  maxLength="1000"  value={noticeData.msg}/>
            </TextField>
        </div>
        <div className="col-xs-12">
          <button type="button" onClick={addNotice}>{action} Notice</button>
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

AddNotice.propTypes = {
  noticeData: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  addNotice: React.PropTypes.func.isRequired,
  cancel: React.PropTypes.func.isRequired,
};

export default AddNotice;
