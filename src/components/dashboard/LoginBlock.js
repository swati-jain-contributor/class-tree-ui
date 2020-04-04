import React, {PropTypes} from 'react';

const LoginBlock = ({OnCancel}) => {
  return (
    <div className="login-block">
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password"/>
      <button>Login</button>
      <button className="sec" onClick={OnCancel}>Cancel</button>
    </div>
  );
};

LoginBlock.propTypes = {
  OnCancel: React.PropTypes.func.isRequired
};

export default LoginBlock;
