import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import InputMask from 'react-input-mask';
const AddExpense = ({ expenseData, onChange, saveExpense, cancel, onBlur, errors ,step,result }) => {
  return (
    <div className="">
      {step==1?
      <div>
      <h3>Add Expense</h3>
      <form id="expense-form">
        <div className="col-xs-6">
          <TextField hintText="Amount" id="expAmt" errorText={errors.expAmt} onBlur={onBlur} value={expenseData.amount} onChange={onChange} >
            <InputMask pattern="^[0-9]*[1-9][0-9]*$" type="tel"  name="amount" mask="999999" maskChar="" required={true} />
          </TextField>
        </div>
        <div className="col-xs-6">
          <TextField hintText="Comments" id="expRemarks" maxLength="20" errorText={errors.expRemarks} onBlur={onBlur} value={expenseData.remarks} onChange={onChange}>
            <input required={true}  name="remarks"  maxLength="20" />
          </TextField>
        </div>
        <div className="col-xs-12">
            <span className="error">{errors.amtError}</span>
          </div>
        <div className="col-xs-12">
          <button type="button" onClick={saveExpense}>Add Expense</button>
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

AddExpense.propTypes = {
  expenseData: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saveExpense: React.PropTypes.func.isRequired,
  cancel: React.PropTypes.func.isRequired,
};

export default AddExpense;
