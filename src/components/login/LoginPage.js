import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import LoginBlock from './LoginBlock';
import BtnBlock from './BtnBlock';
import RegisterBlock from './RegisterBlock';
import { browserHistory } from 'react-router';
import * as loginActions from '../../actions/loginActions';
import loginApi from '../../api/loginApi';
import ValidationService from '../common/Validation';
import * as ajaxActions from '../../actions/ajaxStatusActions';
class LoginPage extends React.Component {
    componentWillReceiveProps(nextProps) {
        console.log("STATUS:" + nextProps.authenticationStatus);
        if (nextProps.authenticationStatus) {
            var isMobile = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
            if (isMobile) {
                window.FirebasePlugin.subscribe(this.state.loginForm.username);
            }
            if (!this.state.registerForm.isPresident || this.state.loginBlock) {
                if (isMobile)
                    this.context.router.push('/menu');
                else
                    browserHistory.push('/menu');
            }

        }
        if (nextProps.isVerified && this.state.registerBlock) {
            var registerForm = this.state.registerForm
            if (registerForm.isPresident)
                registerForm.step = 6;
            else
                registerForm.step = 5;
            this.setState(registerForm);
        }

        else if (nextProps.loginOTPSuccess && this.state.loginBlock) {
            var loginForm = this.state.loginForm
            loginForm.step = 2;
            this.setState({ initialiseValidation: true });
            this.setState(loginForm);
        }
        else if (nextProps.apartmentRegistrationSuccess && this.state.registerBlock) {
            var registerForm = this.state.registerForm
            registerForm.step = 4;
            this.setState({ initialiseValidation: true });
            this.setState(registerForm);
        }
        if (nextProps.isActive) {
            var isMobile = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
            if (isMobile) {
                var username = this.state.registerForm.aptId + "-" + this.state.registerForm.phone;
                console.log("Subscribe to " + username);
                window.FirebasePlugin.subscribe(username);
            }
        }
        if (nextProps.aptId) {
            var registerForm = this.state.registerForm
            registerForm.aptId = nextProps.aptId;
            this.setState(registerForm);
        }
    }
    constructor(props, context) {
        super(props, context);
        this.showLoginBlock = this.showLoginBlock.bind(this);
        this.showRegisterBlock = this.showRegisterBlock.bind(this);
        this.updateLoginFormState = this.updateLoginFormState.bind(this);
        this.updateRegisterFormState = this.updateRegisterFormState.bind(this);
        this.updateErrors = this.updateErrors.bind(this);
        this.getApartmentDetails = this.getApartmentDetails.bind(this);
        this.back = this.back.bind(this);
        this.next = this.next.bind(this);
        this.sendOTP = this.sendOTP.bind(this);
        this.resendOTP = this.resendOTP.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.share = this.share.bind(this);
        this.state = {
            loginBlock: false,
            registerBlock: false,
            loginForm: { aptId: "", phone: "", otp: "", step: 1, resend: true, errors: {} },
            registerForm: {
                step: 1,
                errors: {},
                aptId: "",
                aptname: "", addressHTML:"",address: "", city: "", state: "", country: "", zip: "", phone: "", name: "",
                flat: "", block: "", family: "", initialBalance: "", otp: "", isPresident: false, resend: false
            }
        };
        if (this.props.isVerified && !this.props.authenticationStatus) {
            this.state.registerBlock = true;
            this.state.registerForm.step = 5;
        }
    }
    share() {
        console.log("Share dialog opens");
        if (window.plugins && window.plugins.socialsharing) {
            var options = {
                message: 'I am very happy to inform to all my dear residents that we have registered our apartment on "Live Together". Please use below link to install our apartment application. Our apartment Id is ' + this.state.registerForm.aptId + '.', // not supported on some apps (Facebook, Instagram) 
                subject: 'Congratulations.. We have mobile application for our apartment now..', // fi. for email                  
                url: 'https://play.google.com/store/apps/details?id=com.society.android',
                chooserTitle: 'Congratulations.. We have mobile application for our apartment now..' // Android only, you can override the default share sheet title 
            }

            var onSuccess = function (result) {
                console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true 
                console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false) 
            }

            var onError = function (msg) {
                console.log("Sharing failed with message: " + msg);
            }

            window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
        }

    }
    updateErrors() {
        setTimeout(function () {
            if (this.state.loginBlock) {
                var loginForm = this.state.loginForm;
                if (this.state.loginForm.step == 1)
                    loginForm.errors = (new ValidationService()).errors["login-form-1"];
                else
                    loginForm.errors = (new ValidationService()).errors["login-form-2"];
                this.setState({
                    loginForm
                });
            }
            else if (this.state.registerBlock) {
                var registerForm = this.state.registerForm;
                if (this.state.registerForm.step == 1)
                    registerForm.errors = (new ValidationService()).errors["register-form-1"];
                else if (this.state.registerForm.step == 2)
                    registerForm.errors = (new ValidationService()).errors["register-form-2"];
                else if (this.state.registerForm.step == 3)
                    registerForm.errors = (new ValidationService()).errors["register-form-3"];
                else if (this.state.registerForm.step == 4)
                    registerForm.errors = (new ValidationService()).errors["register-form-4"];
                this.setState({
                    registerForm
                });
            }
        }.bind(this));
    }
    next() {
        let registerForm = this.state.registerForm;
        if (registerForm.step == 1) {
            if (!(new ValidationService()).validateForm("register-form-1").isValid) {
                registerForm.errors = (new ValidationService()).validateForm("register-form-1");
                this.setState(registerForm);
                return
            }
            if (registerForm.isPresident) {
                if (confirm("Registering as President will register a new apartment.\nAre you sure your apartment is not already registered and you want to register a new apartment?"))
                    registerForm.step = 3;
            }
            else
                registerForm.step = 2;
            this.setState({ initialiseValidation: true });
        }
        else if (registerForm.step == 2 || registerForm.step == 3) {
            if (this.state.registerForm.step == 2 && !(new ValidationService()).validateForm("register-form-2").isValid) {
                registerForm.errors = (new ValidationService()).validateForm("register-form-2");
                this.setState(registerForm);
                return
            }
            if (this.state.registerForm.step == 3 && !(new ValidationService()).validateForm("register-form-3").isValid) {
                registerForm.errors = (new ValidationService()).validateForm("register-form-3");
                this.setState(registerForm);
                return
            }
            this.register();
            // registerForm.step = 4;
            // this.setState({ initialiseValidation: true });
        }
        else if (registerForm.step == 4) {
            if (this.state.registerForm.step == 4 && !(new ValidationService()).validateForm("register-form-4").isValid) {
                registerForm.errors = (new ValidationService()).validateForm("register-form-4");
                this.setState(registerForm);
                return
            }
            this.verifyCredentials();
        }
        else if (registerForm.step == 6) {
            var isMobile = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
            if (isMobile)
                this.context.router.push('/menu');
            else
                browserHistory.push('/menu');
        }
        this.setState({ registerForm });
    }
    showLoginBlock() {
        if (!this.state.loginBlock)
            this.setState({
                initialiseValidation: true,
                loginForm: { aptId: "", phone: "", otp: "", step: 1, resend: true, errors: {} }
            });
        this.setState({ loginBlock: !this.state.loginBlock });
    }
    showRegisterBlock() {
        if (!this.state.registerBlock) {
            this.setState({
                initialiseValidation: true,
                registerForm: {
                    step: 1,
                    errors: {},
                    aptId: "",
                    addressHTML:"",
                    aptname: "", address: "", city: "", state: "", country: "", zip: "", phone: "", name: "",
                    flat: "", block: "", family: "", initialBalance: "", otp: "", isPresident: false, resend: false
                }
            });
        }

        this.setState({ registerBlock: !this.state.registerBlock });
    }
    componentDidUpdate() {
        if (this.state.initialiseValidation) {
            var ins = new ValidationService();
            if (this.state.loginBlock) {
                if (this.state.loginForm.step == 1)
                    var loginFormError = ins.addForm("login-form-1");
                else
                    var loginFormError = ins.addForm("login-form-2");
                var loginForm = this.state.loginForm;
                loginForm.errors = loginFormError;
                this.setState({ loginForm });
            }
            else if (this.state.registerBlock) {
                if (this.state.registerForm.step == 1)
                    var registerFormError = ins.addForm("register-form-1");
                else if (this.state.registerForm.step == 2)
                    var registerFormError = ins.addForm("register-form-2");
                else if (this.state.registerForm.step == 3)
                    var registerFormError = ins.addForm("register-form-3");
                else if (this.state.registerForm.step == 4)
                    var registerFormError = ins.addForm("register-form-4");
                var registerForm = this.state.registerForm;
                registerForm.errors = registerFormError;
                this.setState({ registerForm });
            }

            this.setState({ initialiseValidation: false });
        }
    }
    back(i) {
        if (this.state.loginBlock) {
            let loginForm = this.state.loginForm;
            loginForm.step = i;
            this.props.actions.otpFailure("");
            loginForm.resend = !loginForm.resend;
            this.setState({ loginForm })
        }
        else if (this.state.registerBlock) {
            let registerForm = this.state.registerForm;
            registerForm.step = i;
            registerForm.resend = !registerForm.resend;
            this.setState({ registerForm })
        }

    }
    getApartmentDetails() {
        let registerForm = this.state.registerForm;
        if (this.state.registerForm.step == 2 && !(new ValidationService()).validateForm("register-form-2").isValid) {
            registerForm.errors = (new ValidationService()).validateForm("register-form-2");
            this.setState(registerForm);
            return
        }
        this.state.registerForm.address = "";
        this.setState({ registerForm: this.state.registerForm });
        this.props.ajaxActions.beginAjaxCall();
        loginApi.getApartmentAddress({
            id: this.state.registerForm.aptId
        }).then(function (data) {
            this.props.ajaxActions.ajaxCallError();
            if (data.status == "SUCCESS") {
                var registerForm = this.state.registerForm;
                registerForm.addressHTML = '<br/>' + data.response.name + '<br/>' + data.response.address + '<br/>' + data.response.city + ',' + data.response.state + '<br/>' + data.response.country + '-' + data.response.zip;
                this.setState({ registerForm });
            }
            else {
                alert("Invalid apartment Id");
            }

        }.bind(this), function (error) {
            console.log("Error:" + error);
            this.props.ajaxActions.ajaxCallError();
        }.bind(this));
    }
    updateLoginFormState(event) {
        const field = event.target.name;
        let loginForm = this.state.loginForm;
        loginForm[field] = event.target.value;
        return this.setState({ loginForm: loginForm });
    }
    updateRegisterFormState(event, isInputChecked) {

        const field = event.target.name;
        let registerForm = this.state.registerForm;
        if (isInputChecked != undefined)
            registerForm.isPresident = isInputChecked;
        else
            registerForm[field] = event.target.value;
        return this.setState({ registerForm: registerForm });
    }
    resendOTP() {

        if (this.state.loginBlock) {
            let loginForm = this.state.loginForm;
            loginForm.step = 2;
            loginForm.resend = true;
            this.setState({ loginForm });
            this.props.actions.sendOTP({
                type: "L",
                username: this.state.loginForm.aptId + "-" + this.state.loginForm.phone
            });
        }

        else {
            let registerForm = this.state.registerForm;
            registerForm.resend = true;
            this.setState({ registerForm });
            if (registerForm.isPresident) {
                this.props.actions.sendOTP({
                    type: "L",
                    username: this.props.aptId + "-" + this.state.registerForm.phone
                });
            }
            else
                this.props.actions.sendOTP({
                    type: "R",
                    requestId: this.props.requestId
                });
        }
    }
    sendOTP() {
        let loginForm = this.state.loginForm;
        loginForm.resend = false;
        if (this.state.loginBlock && !(new ValidationService()).validateForm("login-form-1").isValid) {
            var error = (new ValidationService()).validateForm("login-form-1");
            loginForm.errors = error;
            this.setState(loginForm);
            return;
        }
        if (this.state.registerBlock) {
            var registerForm = this.state.registerForm;
            if (this.state.registerForm.step == 2 && !(new ValidationService()).validateForm("register-form-2").isValid) {
                var error = (new ValidationService()).validateForm("register-form-2");
                registerForm.errors = error;
                this.setState(registerForm);
                return;
            }
            if (this.state.registerForm.step == 3 && !(new ValidationService()).validateForm("register-form-3").isValid) {
                var error = (new ValidationService()).validateForm("register-form-3");
                registerForm.errors = error;
                this.setState(registerForm);
                return;
            }
        }

        this.setState({ loginForm });
        if (this.state.loginBlock)
            this.props.actions.sendOTP({
                type: "L",
                username: this.state.loginForm.aptId + "-" + this.state.loginForm.phone
            });
        else {
            this.props.actions.sendOTP({
                type: "R",
                requestId: this.state.registerForm.requestId
            });
        }

    }
    login(e) {
        e.preventDefault();
        if (this.state.loginBlock && !(new ValidationService()).validateForm("login-form-2").isValid) {
            var loginForm = this.state.loginForm;
            var error = (new ValidationService()).validateForm("login-form-2");
            loginForm.errors = error;
            this.setState(loginForm);
            return;
        }

        this.props.actions.login({
            username: this.state.loginForm.aptId + "-" + this.state.loginForm.phone,
            otp: this.state.loginForm.otp,
            type: "L"
        })
            .then(() => {
            })
            .catch(error => {
                alert(error);
            });
    }
    verifyCredentials() {
        if (this.state.registerForm.isPresident) {
            this.props.actions.login({
                username: this.props.aptId + '-' + this.state.registerForm.phone,
                otp: this.state.registerForm.otp,
                type: "L"
            });
        }
        else
            this.props.actions.login({
                requestId: this.props.requestId,
                otp: this.state.registerForm.otp,
                type: "R"
            });
    }
    register() {
        this.props.actions.createApartment(this.state.registerForm)
            .then(() => {
                // var isMobile = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
                // if (isMobile) {
                //     window.FirebasePlugin.subscribe(this.state.registerForm.username);
                //     this.context.router.push('/menu')
                // } else {
                //     browserHistory.push('/menu');
                // }
            })
            .catch(error => {
                alert(error);
            });
    }
    render() {
        return (
            <div className="login-page">
                <div className="overlay">
                    {!this.state.loginBlock && !this.state.registerBlock ? <BtnBlock OnLogin={this.showLoginBlock} OnRegister={this.showRegisterBlock} /> : null}
                    {this.state.loginBlock ? <LoginBlock onBlur={this.updateErrors} back={this.back} loginForm={this.state.loginForm} onChange={this.updateLoginFormState} errors={this.state.errors} resendOTP={this.resendOTP} sendOTP={this.sendOTP} OnLogin={this.login} OnCancel={this.showLoginBlock} /> : null}
                    {this.state.registerBlock ? <RegisterBlock onBlur={this.updateErrors} share={this.share} back={this.back} getAddress={this.getApartmentDetails} next={this.next} registerForm={this.state.registerForm} OnCancel={this.showRegisterBlock} onChange={this.updateRegisterFormState} resendOTP={this.resendOTP} sendOTP={this.sendOTP} errors={this.state.errors} OnRegister={this.register} /> : null}
                </div>
            </div>
        );
    }
}
LoginPage.contextTypes = {
    router: React.PropTypes.func.isRequired
};
function mapStateToProps(state, ownProps) {

    return {
        authenticationStatus: state.session.authenticationStatus,
        requestId: state.session.requestId,
        aptId: state.session.aptId,
        isActive: state.session.status,
        loginOTPSuccess: state.session.loginOTPSuccess,
        apartmentRegistrationSuccess: state.session.apartmentRegistrationSuccess,
        isVerified: state.session.isVerified
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch),
        ajaxActions: bindActionCreators(ajaxActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);