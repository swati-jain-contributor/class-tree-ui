import PropTypes from 'prop-types';
import React from 'react';

const LoginBlock = ({ OnLogin, OnRegister }) => {
    return (
        <div className="btn-block">
            <span onClick={OnLogin} >
                <span className="login">Login</span>
                <span className="glyphicon">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                </span>
            </span>
            <div onClick={OnRegister}>
                <span className="login">Register</span>
                <span className="glyphicon">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                </span>
            </div>
        </div>
    );
};

LoginBlock.propTypes = {
    OnLogin: PropTypes.func.isRequired,
    OnRegister: PropTypes.func.isRequired,
};

export default LoginBlock;
