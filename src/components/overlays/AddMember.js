import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import InputMask from 'react-input-mask';
const AddMember = ({ memberData, onChange, addMember, cancel, onBlur, errors, step, result }) => {
  var action = memberData._id > 0 ? 'Update' : 'Add';
  const styles = {
    block: {
      maxWidth: 250,
    },
    toggle: {
      marginBottom: 16,
    },
    thumbOff: {
       backgroundColor: '#ffcccc',
      //backgroundColor: 'red',
    },
    trackOff: {
      backgroundColor: '#ff9d9d',
    },
    thumbSwitched: {
      backgroundColor: 'red',
    },
    trackSwitched: {
      backgroundColor: '#ff9d9d',
    },
    elementStyle: {
      width: '100px',
    },
    labelStyle: {
      color: 'red',
    },
  };

  return (
    <div className="">
      {step == 1 ?
        <div>
          <h3>Add Member</h3>
          <form id="member-form">
            <div className="col-xs-6">
              <TextField hintText="Member Name" id="memName" maxLength="20" errorText={errors.memName} onBlur={onBlur} value={memberData.name} onChange={onChange} >
                <input required name="name" maxLength="20" value={memberData.name} />
              </TextField>
            </div>
            <div className="col-xs-6">
              <TextField hintText="Phone" id="memPhone" maxLength="10" errorText={errors.memPhone} onBlur={onBlur} >
                {action == "Add" ?
                  <InputMask required name="phone" type="tel" onChange={onChange} maskChar="" pattern="\d{10}" mask="9999999999" value={memberData.phone} /> :
                  <InputMask required name="phone" readOnly={true} maskChar="" pattern="\d{10}" mask="9999999999" value={memberData.phone} />}
              </TextField>
            </div>
            <div className="col-xs-12">
              <span className="error">{errors.phoneError}</span>
            </div>
            <div className="col-xs-6">
              <TextField hintText="Flat Number" id="memFlat" maxLength="5" errorText={errors.memFlat} onBlur={onBlur} value={memberData.flat} onChange={onChange} >
                <InputMask required name="flat" mask="99999" maxLength="5" maskChar="" value={memberData.flat} />
              </TextField>
            </div>
            <div className="col-xs-6">
              <TextField hintText="Block Number" id="memBlock" maxLength="5" errorText={errors.memBlock} onBlur={onBlur} value={memberData.block} onChange={onChange} >
                <input required name="block" maxLength="5" value={memberData.block} />
              </TextField>
            </div>
            <div className="col-xs-12">
              <span className="error">{errors.flatError}</span>
            </div>
            <div className="col-xs-6">
              <TextField hintText="Family Members" id="memFamily" maxLength="2" errorText={errors.memFamily} onBlur={onBlur} onChange={onChange} >
                <InputMask required name="family" maxLength="2" maskChar="" pattern="[1-9][0-9]*" value={memberData.family} mask="99" />
              </TextField>
            </div>
            <div className="col-xs-6">
              Is Secretary
              <Toggle
                toggled={memberData.isPresident} onToggle={
                  onChange
                }
                thumbStyle={styles.thumbOff}
                trackStyle={styles.trackOff}
                thumbSwitchedStyle={styles.thumbSwitched}
                trackSwitchedStyle={styles.trackSwitched}
                labelStyle={styles.labelStyle}
                elementStyle={styles.elementStyle}
              />
            </div>
            <div className="col-xs-12">
              <button type="button" onClick={addMember}>{action} Member</button>
              <button type="button" className="sec" onClick={cancel}>Cancel</button>
            </div>
          </form>
        </div>
        : <div className="result-page">
          <label>{result}</label>
          <button type="button" onClick={cancel}>Close</button>
        </div>}
    </div>
  );
};

AddMember.propTypes = {
  memberData: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  addMember: React.PropTypes.func.isRequired,
  cancel: React.PropTypes.func.isRequired,
};

export default AddMember;

