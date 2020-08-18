import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as classActions from '../../actions/classActions';
import Card from '../Card/Card';


class Registered extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      classes: []
    };
    this.requestLogin = this.requestLogin.bind(this);
    this.userloginFn = this.userloginFn.bind(this);
  }

  componentDidMount() {
    if (this.props.user) {
      this.props.actions.getClasses({
        email: this.props.user.email,
        type: 'R'
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    let classesNP = nextProps.classes;
    if (!classesNP)
      classesNP = [];
    if (nextProps.search || nextProps.category != "All") {
      let classes = classesNP;
      if (nextProps.search)
        classes = classesNP.filter(cl =>
          this.checkParam(cl, 'Topic', nextProps.search) || this.checkParam(cl, 'Description', nextProps.search) || this.checkParam(cl, 'TutorName', nextProps.search));
      if (nextProps.category && nextProps.category != 'All')
        classes = classes.filter(cl => cl.category == nextProps.category);
      this.setState({ classes });
    }
    else
      this.setState({ classes: classesNP });
    if (!this.props.user && nextProps.user) {
      this.props.actions.getClasses({
        email: nextProps.user.email,
        type: 'R'
      });
    }
  }
  checkParam(cl, field, search) {
    return cl[field] && cl[field].toLowerCase().indexOf(search.toLowerCase()) > -1;
  }
  requestLogin() {
    window.dispatchEvent(new CustomEvent('askLogin', {}));
    window.addEventListener("userloggedin", this.userloginFn);
  }
  userloginFn() {
    window.removeEventListener("userloggedin", this.userloginFn);
    this.props.actions.getClasses({
      email: this.props.user.email,
      type: 'R'
    });
  }
  render() {
    let banner = (<div><div className="banner"><span>Beautiful thing about <b>Learning</b> is that no one can take it away from you...</span></div>
      <div className="thank-note"><span>We appreciate efforts you are making to grow yourself.. &nbsp;&nbsp;   <i className="fa fa-thumbs-up" aria-hidden="true" /></span></div></div>);
    return (
      <div className="col-block  view-holder">
        {(!this.props.user) ?
          <div>
            {banner}
            <br />
            <br />

            <span>Please login/signup, so we can get your details</span>
            <br />
            <button className="submit-btn secondary" onClick={this.requestLogin} >Login / Signup</button>
          </div> :
          <div className="content-box">
            {(this.state.classes.length == 0) ?
              <div>
                {this.props.classes.length == 0 ?
                  <span>
                    You have not registered for any class yet.
                  <br />
                    Register your first class now.
                </span> : <span>
                    No registered classes are found. Change your search criteria or book a class now
                  </span>}
                <br />
                <br />
                <button className="submit-btn" onClick={() => this.context.router.push('/student')}>Book class</button>
              </div> :

              this.state.classes.map((cl, i) => <Card type="C" key={i} class={cl} />)}
          </div>}
      </div>
    );
  }
}
Registered.contextTypes = {
  router: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {

  return {
    classes: state.classes.registeredClasses,
    user: state.session.user,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(classActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Registered);
