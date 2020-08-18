import PropTypes from 'prop-types';
import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../../actions/sessionActions';
// import '../datascience/style.less';
import SessionApi from '../../api/sessionApi';

class Login extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.checkValidity = this.checkValidity.bind(this);
    this.checkELValidity = this.checkELValidity.bind(this);
    this.onChange = this.onChange.bind(this);
    this.login = this.login.bind(this);
    this.state = {
      userdata: {}
    };

  }

  componentDidMount() {
    setTimeout(() => {
      let e = document.querySelectorAll('.form_md input[type="text"],.form_md input[type="textarea"],.form_md input[type="password"], .form_md input[type="email"], .form_md input[type="number"], .form_md input[type="tel"], .form_md textarea');
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
      jQuery(function ($) {
        $('#r_val').on('change', function () {
          $('#r_val option').each(function () {
            $(this).html($(this).attr('data-text'));
          });
          $('#r_val option:selected').html($('#r_val option:selected').attr('data-text'));
          let cval = $('#r_val option:selected').attr('value');
          let ccode = $('#r_val option:selected').attr('data-code');
          $('#r_val option:selected').html(cval + ' (' + ccode + ')');
          $(this).blur();
        }).trigger('change');
        $('#r_val').on('focus', function () {
          $('#r_val option').each(function () {
            $(this).html($(this).attr('data-text'));
          });
        });

        $('#b_val').on('change', function () {
          $('#b_val option').each(function () {
            $(this).html($(this).attr('data-text'));
          });
          $('#b_val option:selected').html($('#r_val option:selected').attr('data-text'));
          let cval = $('#b_val option:selected').attr('value');
          let ccode = $('#b_val option:selected').attr('data-code');
          $('#b_val option:selected').html(cval + ' (' + ccode + ')');
          $(this).blur();
        }).trigger('change');
        $('#b_val').on('focus', function () {
          $('#b_val option').each(function () {
            $(this).html($(this).attr('data-text'));
          });
        });
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

  login(event) {
    event && event.preventDefault();
    if ((event && this.checkValidity(event)) || !event) {
      let userdata = JSON.parse(JSON.stringify(this.state.userdata));
      SessionApi.login(userdata).then((res) => {
        if (res.status == "SUCCESS") {
          if (res.response.email) {
            sessionStorage.user = res.response;
            this.setState({ user: res.response });
            this.props.actions.addUserDetails(res.response);
          }
          else {
            this.setState({ errors: { loginFail: "Invalid credentials" } });
          }
        }
        else {
          this.setState({ errors: { loginFail: res.errorDesc } });
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

          <div className="col-md-12 text-left">
            <label className="color-1 floating-label">E-mail Address</label>
            <input type="email" name="email" required onBlur={this.checkELValidity} className="color-1" value={this.state.userdata.email} onChange={this.onChange} />
            {this.state.errors ? <span className="error">{this.state.errors["email"]}</span> : ''}
          </div>
        </div>
        <div className="row m-t-5">
          <div className="col-md-12 text-left">
            <label className="color-1 floating-label">Password</label>
            <input type="password" name="password" required onBlur={this.checkELValidity} value={this.state.userdata.password} onChange={this.onChange} className="color-1" />
            {this.state.errors ? <span className="error">{this.state.errors["password"]}</span> : ''}
          </div>
        </div>
        <button type="submit" onClick={this.login} className="btn bg-red " id="submit_form">Login</button>
        {this.state.errors ? <span className="error">{this.state.errors["loginFail"]}</span> : ''}
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
