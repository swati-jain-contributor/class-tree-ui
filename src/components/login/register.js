import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../../actions/sessionActions';
import SessionApi from '../../api/sessionApi';
import { countries } from './countries';

class Register extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.checkValidity = this.checkValidity.bind(this);
    this.checkELValidity = this.checkELValidity.bind(this);
    this.onChange = this.onChange.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.checkpasswordvalidity = this.checkpasswordvalidity.bind(this);
    this.state = {
      userdata: {
        country: "IN"
      }
    };

  }

  componentDidMount() {
    setTimeout(() => {
      let e = document.querySelectorAll('.form_md input[type="text"],.form_md input[type="textarea"],.form_md input[type="password"], .form_md input[type="email"], .form_md input[type="number"], .form_md textarea');
      if (e)
        for (let i = 0; i < e.length; i++)
          e[i].previousElementSibling.classList.add("floating-label"),
            e[i].addEventListener("focusin", function () {
              this.previousElementSibling.classList.add("label-active");
            }),
            e[i].addEventListener("focusout", function () {
              "" != this.value ? this.classList.add("input-active") : ("" == this.value && this.classList.remove("input-active"),
                this.previousElementSibling.classList.remove("label-active"));
            });
      let tel = document.querySelector('.form_md input[type="tel"]');
      tel.parentElement.previousElementSibling.classList.add("floating-label");
      tel.addEventListener("focus", function () {
        tel.parentElement.previousElementSibling.classList.add("label-active");
      });
      tel.addEventListener("blur", function () {
        "" != this.value ? this.classList.add("input-active") : ("" == this.value && this.classList.remove("input-active"),
        tel.parentElement.previousElementSibling.classList.remove("label-active"));
      });

    }, 0);

  }

  checkValidity(event) {
    if (event.target.form.checkValidity()) {
      this.setState({ errors: {} });
      for (let i in event.target.form.elements) {
        let el = event.target.form.elements[i];
        if (el.tagName == "INPUT" || el.tagName == "TEXTAREA")
          el.style.borderColor = "black";
      }
      return true;

    }
    else {
      let errors = {};
      for (let i in event.target.form.elements) {
        let el = event.target.form.elements[i];
        this.checkELValidity(el);
      }
      return false;
    }
  }

  checkELValidity(event) {
    let el;
    if (!event.target)
      el = event;
    else
      el = event.target;
    let errors = JSON.parse(JSON.stringify(this.state.errors || {}));

    if (el.tagName == "INPUT" || el.tagName == "TEXTAREA") {
      let name = el.getAttribute("name");
      if (!el.checkValidity()) {
        if (el.validity.valueMissing)
          errors[name] = "Required";
        else if (name == "email")
          errors[name] = "Invalid email address";
        else
          errors[name] = "Invalid value";
        el.style.borderColor = "red";
      }
      else {
        errors[name] = void 0;
        el.style.borderColor = "black";
      }
    }
    this.setState({ errors });
  }
  checkpasswordvalidity(event) {
    let form = event.target.form;
    let passwordElements = form.querySelectorAll(["[type=password]"]);
    let errors = JSON.parse(JSON.stringify(this.state.errors || {}));
    if (passwordElements.length > 0) {
      passwordElements.forEach(el => {
        if (el.type == "password") {
          let name = el.getAttribute("name");
          if (name == "password") {
            errors["password"] = void 0;
            if (!el.value)
              errors["password"] = "Required";
            else if (el.value <= 8 || !el.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
              errors["password"] = "Minimum eight characters, at least one letter and one number";
            }
            errors["password"] ? (el.style.borderColor = "red") : el.style.borderColor = "black";
          }
          else if (name == "confirmpassword") {
            errors["confirmpassword"] = void 0;
            if (!el.value)
              errors["confirmpassword"] = "Required";
            else if (el.value != document.getElementsByName("password")[0].value)
              errors["confirmpassword"] = "Passwords does not match";
            errors["confirmpassword"] ? (el.style.borderColor = "red") : el.style.borderColor = "black";
          }
        }
      });
    }
    this.setState({ errors });
    return (!errors["confirmpassword"] && !errors["password"]);
  }
  createAccount(event) {
    event && event.preventDefault();
    if ((event && this.checkValidity(event) && this.checkpasswordvalidity(event)) || !event) {
      let userdata = JSON.parse(JSON.stringify(this.state.userdata));
      userdata.timezone = (new Date().getTimezoneOffset()) / 60;
      userdata.registeredon = location.href;
      userdata.referrer = document.referrer;
      userdata.history = history.length;
      userdata.browsername = navigator.appName;
      userdata.browserversion = navigator.userAgent;
      userdata.platform = navigator.platform;
      userdata.language = navigator.language;
      userdata.screenwidth = screen.width;
      userdata.screenheight = screen.height;
      SessionApi.createAccount(userdata).then((res) => {
        if (res.status == "SUCCESS") {
          if (res.response.email) {
            sessionStorage.user = res.response;
            this.setState({ user: res.response });
            this.props.actions.addUserDetails(res.response);
          }
          else {
            this.setState({ errors: { registrationFail: "Account creation failed." } });
          }
        }
        else {
          this.setState({ errors: { registrationFail: res.errorDesc } });
        }

      });
    }

  }
  onChange(event) {
    const field = event.target.name;
    let userdata = this.state.userdata;
    userdata[field] = event.target.value;
    return this.setState({ userdata: userdata });
  }
  render() {
    return (

      <form className="form_md" noValidate>
        <div className="row m-t-5">
          <div className="col-md-6 text-left">
            <label className="color-1 floating-label">First Name</label>
            <input type="text" name="firstname" onBlur={this.checkELValidity} required className="color-1" value={this.state.userdata.firstname} onChange={this.onChange} />
            {this.state.errors ? <span className="error">{this.state.errors["firstname"]}</span> : ''}
          </div>
          <div className="col-md-6 text-left">
            <label className="color-1 floating-label">Last Name</label>
            <input type="text" name="lastname" onBlur={this.checkELValidity} required className="color-1" value={this.state.userdata.lastname} onChange={this.onChange} />
            {this.state.errors ? <span className="error">{this.state.errors["lastname"]}</span> : ''}
          </div>

        </div>

        <div className="row m-t-5">

          <div className="col-md-6 text-left">
            <label className="color-1 floating-label">E-mail Address</label>
            <input type="email" name="email" required onBlur={this.checkELValidity} className="color-1" value={this.state.userdata.email} onChange={this.onChange} />
            {this.state.errors ? <span className="error">{this.state.errors["email"]}</span> : ''}
          </div>

          <div className="col-md-6 p-r-0 country_code">
            <label className="p-l-4 floating-label">Phone Number</label>
            <div className="multi-input text-left">
              <select name="country" className="browser-default custom-select" defaultValue={this.state.userdata.country} value={this.state.userdata.country} onChange={this.onChange}>
                <option className="color-black" value="IN (+91)">IN (+91)</option>
                <option className="color-black" value="US (+1)">US (+1)</option>
                {countries.map(c => <option key={c.name} className="color-black" value={c.code + " (" + c.dial_code + ")"} >{c.code} ({c.dial_code})</option>)}
              </select>
              <input type="tel" name="mobile" className="color-1" onKeyPress={(evt) => {
                evt = (evt) ? evt : window.event;
                let charCode = (evt.which) ? evt.which : evt.keyCode;
                if (charCode > 31 && (charCode < 48 || charCode > 57))
                  evt.preventDefault();
              }}
                required onBlur={this.checkELValidity} value={this.state.userdata.mobile} onChange={this.onChange} maxLength="15" />
            </div>
            {this.state.errors ? <span className="error">{this.state.errors["mobile"]}</span> : ''}
          </div>

          {/* <div className="col-md-4 col-xs-8 p-l-0 text-left">
            <label className="p-l-4 floating-label" />
            
          </div> */}
        </div>
        <div className="row m-t-5">
          <div className="col-md-6 text-left">
            <label className="color-1 floating-label">Password</label>
            <input type="password" name="password" maxLength={16} required onBlur={this.checkpasswordvalidity} value={this.state.userdata.password} onChange={this.onChange} className="color-1" />
            {this.state.errors ? <span className="error">{this.state.errors["password"]}</span> : ''}
          </div>
          <div className="col-md-6 text-left">
            <label className="color-1 floating-label">Confirm Password</label>
            <input type="password" name="confirmpassword" maxLength={16} onBlur={this.checkpasswordvalidity} required value={this.state.userdata.confirmpassword} onChange={this.onChange} className="color-1" />
            {this.state.errors ? <span className="error">{this.state.errors["confirmpassword"]}</span> : ''}
          </div>
        </div>
        <button type="button" onClick={this.createAccount} className="btn bg-red " id="submit_form">Create Account</button>
        {this.state.errors ? <span className="error">{this.state.errors["registrationFail"]}</span> : ''}
      </form>

    );
  }
}

function mapStateToProps(state, ownProps) {

  return {

  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
