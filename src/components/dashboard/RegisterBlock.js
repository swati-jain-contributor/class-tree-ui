import React, {PropTypes} from 'react';

const RegisterBlock = ({OnCancel}) => {
  return (
    <div className="login-block">
      <input type="text" placeholder="Email / Mobile number"/>
      <input type="password" placeholder="Password"/>
      <input type="password" placeholder="Confirm password"/>
      <button>Register</button>
      <button className="sec" onClick={OnCancel}>Cancel</button>
    </div>
  );
};

RegisterBlock.propTypes = {
  OnCancel: React.PropTypes.func.isRequired
};

export default RegisterBlock;
