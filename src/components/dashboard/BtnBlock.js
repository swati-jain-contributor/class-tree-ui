import PropTypes from 'prop-types';
import React from 'react';

const LoginBlock = ({OnLogin,OnRegister}) => {
    return (
        <div className="btn-block">
            <span className="login">Login</span>
            <span className="glyphicon glyphicon-triangle-right" onClick={OnLogin} ></span>
            <div>
                <span className="login">Register</span>
                <span className="glyphicon glyphicon-triangle-right"  onClick={OnRegister}></span>
            </div>
        </div>
    );
};

LoginBlock.propTypes = {
    OnLogin: PropTypes.func.isRequired,
    OnRegister: PropTypes.func.isRequired,
};

export default LoginBlock;
