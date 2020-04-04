import React, { PropTypes } from 'react';
import InputMask from 'react-input-mask';
import TextField from 'material-ui/TextField';

const LoginBlock = ({ OnCancel, OnLogin, onChange, loginForm, onBlur, sendOTP, back, resendOTP }) => {
  return (
    <div className="login-block">      
      {loginForm.step == 1 ?
        <div>
          <form id="login-form-1">
            <InputMask id="aptId" onBlur={onBlur} type="tel" className="apt-id" placeholder="A-Id" maskChar="" pattern="\d{1,6}" mask="999999" required name="aptId" maxLength="6" value={loginForm.aptId} onChange={onChange} />
            <span>-</span>
            <InputMask type="tel" id="phone" required className="phone" onBlur={onBlur} placeholder="Phone Number" name="phone" maskChar="" pattern="\d{10}" mask="9999999999" value={loginForm.phone} onChange={onChange} />
            {loginForm.errors.aptId && loginForm.errors.aptId.length > 0 ?
              <span className="error">Please Enter Apartment Id</span> : null}
            {loginForm.errors.phone && loginForm.errors.phone.length > 0 ?
              <span className="error">Please Enter Registered Phone Number</span> : null}
            <button type="button" onClick={sendOTP}>Login</button>
            <button  type="button" className="sec" onClick={OnCancel}>Cancel</button>
          </form>
        </div>
        :
        <div>
          <form id="login-form-2">
            <label><span className="back-arrow" onClick={() => back(1)}>
              <i className="fa fa-arrow-left"></i>
            </span> Enter OTP</label>
            <span className="otp-txt">To login, Please enter the OTP that has been sent your mobile number <b>{loginForm.phone}</b></span>
            <InputMask id="otp" type="tel" onBlur={onBlur} required name="otp" maskChar="" placeholder="OTP" pattern="\d{4}" mask="9999" value={loginForm.otp} onChange={onChange} />
            <span className="error">{loginForm.errors.otp}</span>
            {loginForm.resend ? <span className="resend-txt">OTP sent successfully</span> :
              <span className="resend" onClick={resendOTP}>Resend OTP?</span>}
            <button onClick={OnLogin}>I AM DONE</button>
          </form>
        </div>
      }      
    </div>
  );
};

LoginBlock.propTypes = {
  OnCancel: React.PropTypes.func.isRequired,
  loginForm: React.PropTypes.object.isRequired,
  OnLogin: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object
};

export default LoginBlock;
