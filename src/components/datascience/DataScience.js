import PropTypes from 'prop-types';
import React from 'react';
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
import Overlay from '../overlay/overlay';

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
    // document.title = "▷ Learn Data Science | BakeMinds";
  }
  getQueryParams(params, url) {

  }
  componentDidUpdate() {

  }
  render() {

    return (
      <div cz-shortcut-listen="true" style={{}} className="datascience">
        <Header />
        {this.props.children}
        <Overlay/>
      </div >
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    classes: state.classes.AllClasses,
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

