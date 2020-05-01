import PropTypes from 'prop-types';
import React from 'react';
import InputMask from 'react-input-mask';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
const RegisterBlock = ({ OnCancel, getAddress, OnRegister, registerForm, onChange, next, prev, sendOTP, resendOTP, back, onBlur,share }) => {
  const styles = {
    block: {
      maxWidth: 250,
    },
    toggle: {
      marginBottom: 16,
    },
    thumbOff: {
      // backgroundColor: '#ffcccc',
      backgroundColor: 'red',
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
    <div>
      <div className="circle-box">
        {registerForm.step == 1 ? <div className="circle active"></div> : <div className="circle"></div>}
        {registerForm.step == 2 || registerForm.step == 3 ? <div className="circle active"></div> : <div className="circle"></div>}
        {registerForm.step == 4 ? <div className="circle active"></div> : <div className="circle"></div>}
        {registerForm.step == 5 || registerForm.step == 6 ? <div className="circle active"></div> : <div className="circle"></div>}
      </div>
      <div className="login-block register">
        {registerForm.step == 1 ? <div className="step-1">
          <form id="register-form-1">
            <label>Enter Your Details</label>

            <input type="text" required placeholder="Name" id="name" name="name" value={registerForm.name}
              onChange={onChange} onBlur={onBlur} />
            <span className="error">{registerForm.errors.name}</span>


            <InputMask type="tel" required maskChar="" pattern="\d{10}" mask="9999999999" type="text" placeholder="Mobile Number" id="phone" maxLength="10" name="phone" value={registerForm.phone}
              onChange={onChange} onBlur={onBlur} />
            <span className="error">{registerForm.errors.phone}</span>


            <InputMask  type="tel"  required type="text" mask="99999" maxLength="5" maskChar="" placeholder="Flat" name="flat" id="flat" value={registerForm.flat}
              onChange={onChange} onBlur={onBlur} />
            <span className="error">{registerForm.errors.flat}</span>


            <input maxLength="5" required type="text" placeholder="Block" name="block" id="block" value={registerForm.block}
              onChange={onChange} onBlur={onBlur} />
            <span className="error">{registerForm.errors.block}</span>


            <InputMask  type="tel"  maxLength="2" maskChar="" pattern="[1-9][0-9]*" mask="99" required type="text" placeholder="Family Members" id="family" name="family" value={registerForm.family}
              onChange={onChange} onBlur={onBlur} />
            <span className="error">{registerForm.errors.family}</span>

            {registerForm.isPresident ? <span>Register as Resident</span> : <span className="highlight">Register as Resident</span>}
            <div className="toggle-box">
              <Toggle
                toggled={registerForm.isPresident} onToggle={onChange}
                thumbStyle={styles.thumbOff}
                trackStyle={styles.trackOff}
                thumbSwitchedStyle={styles.thumbSwitched}
                trackSwitchedStyle={styles.trackSwitched}
                labelStyle={styles.labelStyle}
                elementStyle={styles.elementStyle}
              />
            </div>
            {registerForm.isPresident ? <span className="highlight pull-right">Register as Secretary</span> : <span className="pull-right">Register as Secretary</span>}

            <button type="button" onClick={next}>Continue</button>
            <button type="button" className="sec" onClick={OnCancel}>Cancel</button>
          </form>
        </div> : null}
        {registerForm.step == 2 ? <div className="step-2">
          <form id="register-form-2">
            <label><span className="back-arrow" onClick={() => back(1)}>
              <i className="fa fa-arrow-left"></i>
            </span> Enter Apartment Id</label>

            <InputMask  type="tel"  maskChar="" pattern="\d{1,6}" mask="999999" required placeholder="Apartment Id" id="aptId" name="aptId" value={registerForm.aptId}
              onChange={onChange} onBlur={onBlur} />
            <span className="error">{registerForm.errors.aptId}</span>

            <button type="button" onClick={getAddress}>Get Apartment Details</button>
            {registerForm.addressHTML != "" ? <div className="apt-block">
              <label>Apartment Details</label>
              <span dangerouslySetInnerHTML={{ __html: registerForm.addressHTML }}></span>
              <button type="button" onClick={next}>Continue</button>
            </div> : null}
          </form>
        </div> : null}
        {registerForm.step == 3 ? <div className="step-3">
          <form id="register-form-3">

            <label><span className="back-arrow" onClick={() => back(1)}>
              <i className="fa fa-arrow-left"></i>
            </span> Apartment Details</label>

            <input type="text" maxLength="20" required placeholder="Apartment Name" id="aptname" name="aptname" value={registerForm.aptname}
              onChange={onChange} onBlur={onBlur} />
            <span className="error">{registerForm.errors.aptname}</span>


            <input type="text" maxLength="20" required placeholder="Address" id="address" name="address" value={registerForm.address}
              onChange={onChange} onBlur={onBlur} />
            <span className="error">{registerForm.errors.address}</span>


            <input type="text" maxLength="20" required placeholder="City" id="city" name="city" value={registerForm.city}
              onChange={onChange} onBlur={onBlur} />
            <span className="error">{registerForm.errors.city}</span>


            <input type="text" maxLength="20" required placeholder="State" id="state" name="state" value={registerForm.state}
              onChange={onChange} onBlur={onBlur} />
            <span className="error">{registerForm.errors.state}</span>


            <input type="text" maxLength="20" required placeholder="Country" id="country" name="country" value={registerForm.country}
              onChange={onChange} onBlur={onBlur} />
            <span className="error">{registerForm.errors.country}</span>


            <InputMask type="tel" maxLength="6" maskChar="" pattern="\d{6}" mask="999999" required placeholder="Zip" id="zip" name="zip" value={registerForm.zip}
              onChange={onChange} onBlur={onBlur} />
            <span className="error">{registerForm.errors.zip}</span>


            <InputMask type="tel" maxLength="6" maskChar="" pattern="\d{0,6}" mask="999999" required placeholder="Initial Balance" id="initialBalance" name="initialBalance" value={registerForm.initialBalance}
              onChange={onChange} onBlur={onBlur} />
            <span className="error">{registerForm.errors.initialBalance}</span>

            <button type="button" onClick={next}>Register</button>
            <button type="button" className="sec" onClick={OnCancel}>Cancel</button>
          </form>
        </div> : null}
        {registerForm.step == 4 ? <div className="step-4">
          <form id="register-form-4">
            <label className="halfway">Halfway through already!</label>
            <span className="otp-txt">To register, Please enter the OTP that has been sent your mobile number <b>{registerForm.phone}</b></span>

            <InputMask type="tel" required id="otp" name="otp" onBlur={onBlur} maskChar="" placeholder="OTP" pattern="\d{4}" mask="9999" value={registerForm.otp} onChange={onChange} />
            <span className="error">{registerForm.errors.otp}</span>

            {registerForm.resend ? <span className="resend-txt">OTP sent successfully</span> :
              <span className="resend" onClick={resendOTP}>Resend OTP?</span>}
            <button type="button" onClick={next}>Continue</button>
            <button type="button" className="sec" onClick={OnCancel}>Cancel</button>
          </form>
        </div> : null}
        {registerForm.step == 5 ? <div className="step-5">
          <label className="congrats">Congratulations!!</label>
          <br />
          <span>You have successfully requested for registration in your apartment.</span>
          <div className="apt-details">
            <span>Apartment Id : <b>{registerForm.aptId}</b></span>
          </div>
          <br />
          <span>Accounting, Chatting, Security were never that easy before</span>
          <span className="enjoy">Time to enjoy main perks we offer: reliability, speed and comfort.</span>
          <span>Your request is under review.</span><span> You will be automatically redirected to your account after approval..</span>
        </div> : null}
        {registerForm.step == 6 ? <div className="step-6">
          <label className="congrats">Congratulations!!</label>
          <br />
          <span>You have successfully registered your apartment.</span>
          <br />
          <div className="apt-details">
            <span>Apartment Id : <b>{registerForm.aptId}</b></span>
          </div>
          <br />
          <span>Accounting, Chatting, Security were never that easy before</span>
          <span className="enjoy">Time to enjoy main perks we offer: reliability, speed and comfort.</span>
          <span>Residents are already waiting to get acccustomed with this platform</span>
          <button type="button" onClick={share} className="share">Share with Residents</button>
          <button type="button" onClick={next}>Not right now</button>
        </div> : null}
      </div>
    </div>
  );
};

RegisterBlock.propTypes = {
  OnCancel: PropTypes.func.isRequired,
  OnRegister: PropTypes.func.isRequired,
  registerForm: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default RegisterBlock;
