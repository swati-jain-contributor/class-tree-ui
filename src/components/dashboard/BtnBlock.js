import React, {PropTypes} from 'react';

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
    OnLogin: React.PropTypes.func.isRequired,
    OnRegister: React.PropTypes.func.isRequired,
};

export default LoginBlock;
