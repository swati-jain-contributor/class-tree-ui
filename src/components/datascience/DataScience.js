import PropTypes from 'prop-types';
import React from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './header.less';
import './reset.less';
import './style.less';
import Header from './header';
import { webinars } from "./webinars";
import { courses } from "./courses";
import { pioneers } from './pioneers';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class DataScience extends React.Component {

  componentWillReceiveProps(nextProps) {

  }
  constructor(props, context) {
    super(props, context);
    this.state = {
      classData: {
        topic: "",
        description: ""
      },
      step: 0
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  //es-lint-disabble-next-line
  componentDidMount() {
    document.title = "▷ Learn Data Science | BakeMinds";
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
  getQueryParams(params, url) {

  }
  componentDidUpdate() {

  }
  render() {

    return (
      <div cz-shortcut-listen="true" style={{}}>
        <Header />
        {this.props.children}
      </div >
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    classes: state.classes.AllClasses,
    email: state.classes.userEmail,
    name: state.classes.userName,
    phoneNo: state.classes.userPhone
  };
}
function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DataScience);
DataScience.contextTypes = {
  router: PropTypes.func.isRequired
};

