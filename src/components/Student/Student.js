import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as classActions from '../../actions/classActions';
import crypto from 'crypto'; 
import Card from '../Card/Card';
import clap from '../../images/clap.gif';
import swal from 'sweetalert2';

class Student extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      classData: {
        topic: "",
        description: ""
      },
      step: 0
    };
    this.closeClass = this.closeClass.bind(this);
    this.getClasses = this.getClasses.bind(this);
    this.bookClass = this.bookClass.bind(this);
    this.search = this.search.bind(this);
    this.addClass = this.addClass.bind(this);
    this.userloginFn = this.userloginFn.bind(this);
    this.classadded = this.classadded.bind(this);
    this.makePayment = this.makePayment.bind(this);
  }

  componentDidMount() {
    // if (this.getQueryParams("login", location.href))
    //   this.setState({ popup: true, showEmail: true, showName: false, firstLoad: true });
    // else if (this.getQueryParams("thankyou", location.href)) {
    //   window.showThankyou();
    // }
    this.getClasses();
  }
  componentWillReceiveProps(nextProps) {

    let classesNP = nextProps.classes;
    if (!classesNP)
      classesNP = [];
    if ((nextProps.search || nextProps.category != "All") && !this.props.max) {
      let classes = classesNP;
      if (nextProps.search)
        classes = classesNP.filter(cl =>
          this.checkParam(cl, 'Topic', nextProps.search) || this.checkParam(cl, 'Description', nextProps.search) || this.checkParam(cl, 'TutorName', nextProps.search));
      if (nextProps.category && nextProps.category != 'All')
        classes = classes.filter(cl => cl.category == nextProps.category);
      this.setState({ classes });
    }
    else {
      if (this.props.max && classesNP.length > this.props.max)
        this.setState({ classes: classesNP.slice(0, this.props.max) });
      else
        this.setState({ classes: classesNP });
    }
    if (!this.props.user && nextProps.user)
      this.getClasses();
  }

  componentDidUpdate() {
    if (this.state.bookingClass && this.props.user) {
      this.bookClass(this.state.bookingClass);
      this.setState({ bookingClass: null });
    }
    if (this.getQueryParams("thankyou", location.href)) {
      window.showThankyou();
    }
  }
  getQueryParams(params, url) {

    let href = url;
    //this expression is to get the query strings
    let reg = new RegExp('[?&]' + params + '=([^&#]*)', 'i');
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : null;
  }
  getClasses() {
    this.props.actions.getClasses({
      email: this.props.user ? this.props.user.email : null,
      type: 'C'
    });
  }
  checkParam(cl, field, search) {
    return cl[field] && cl[field].toLowerCase().indexOf(search.toLowerCase()) > -1;
  }
  search(event) {
    let search = event.target.value;
    this.setState({ search });
    if (event.target.value) {
      let classes = this.props.classes.filter(cl =>
        this.checkParam(cl, 'Topic') || this.checkParam(cl, 'Description') || this.checkParam(cl, 'TutorName'));
      this.setState({ classes });
    }
    else
      this.setState({ classes: this.props.classes });
  }
  makePayment(cl) {
    let txnId= cl.id +'-' + (new Date).getTime();
    let key= 'ABfWbhJg';
    let salt= '0uBSIFCm3a';
    let cryp = crypto.createHash('sha512');
    let amount = parseInt(cl.Paid);
		let text = key+'|'+txnId+'|'+ amount+'|'+cl.Topic+'|'+this.props.user.firstname+'|'+this.props.user.email+'|||||'+'STUDENT_BAKEMINDS'+'||||||'+salt;
		cryp.update(text);
		let hash = cryp.digest('hex');
    let data = {
      key: key,
      txnid: txnId,
      hash: hash,
      amount: amount,
      firstname: this.props.user.firstname,
      email: this.props.user.email,
      phone: this.props.user.mobile,
      productinfo: cl.Topic,
      udf5: 'STUDENT_BAKEMINDS',
      surl:location.href,
      furl: location.href
      // mode: 'mode'// non-mandatory for Customized Response Handling
    };
    let handler = {

      responseHandler: (BOLT) => {
        console.log(BOLT);
        
        if(BOLT.response.txnStatus=='SUCCESS'){
          this.props.actions.bookClass({
            "classId": cl.id,
            "email": this.props.user.email,
            "phoneNo": this.props.user.mobile,
            "rating": "5",
            "name": this.props.user.firstname + " " + this.props.user.lastname
          });
          window.showSuccessToast("Congratulations! Class Registered successfully!");
          swal.fire( "Congrats" ,  cl.Topic + " successfully booked. Check your mail for full details." ,  "success" );
          this.context.router.push('/registered');
        }
        else{
          swal.fire( "Oops" ,  "Your payment failed! Please try again!" ,  "error" );      }
      },
      catchException: function (BOLT) {
        console.log(BOLT);
        // the code you use to handle the integration errors goes here

      }
    };
    window.bolt.launch(data, handler);
  }
  bookClass(cl) {
    if (this.props.user) {
      if (!cl.Paid || cl.Paid == 0) {
        this.props.actions.bookClass({
          "classId": cl.id,
          "email": this.props.user.email,
          "phoneNo": this.props.user.mobile,
          "rating": "5",
          "name": this.props.user.firstname + " " + this.props.user.lastname
        });
        window.showSuccessToast("Congratulations! Class Registered successfully!");
      }
      else{
        this.makePayment(cl);
      }
    }
    else {
      this.setState({ bookingClass: cl });
      window.dispatchEvent(new CustomEvent('askLogin', {}));
      window.addEventListener("userloggedin", this.userloginFn);
    }
  }
  userloginFn() {
    window.removeEventListener("userloggedin", this.userloginFn);
  }
  classadded() {
    window.removeEventListener("classadded", this.classadded);
    this.getClasses();
  }
  closeClass() {
    this.props.cancel();
  }
  addClass() {
    window.dispatchEvent(new CustomEvent('addClass', {}));
    window.addEventListener("classadded", this.classadded);
  }
  render() {
    return (
      <div className={"col-block  view-holder " + (this.props.max ? "on-home" : "")}>
        {(!this.props.max) ?
          <button className="add-class-btn" onClick={this.addClass}><span>{window.innerWidth > 900 ? 'Tute Class' : 'Tute Class'}</span></button> : null}
        <div className="content-box clearfix">
          {this.state.classes ? this.state.classes.map((cl, i) => <Card type="C" key={i} class={cl} bookClass={this.bookClass} />) : null}
        </div>

        <div id="modal-thankyou" className="modal" role="dialog" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content thankyou-modal">
              Hey!!!
              <br />
              <br />
              You did a great job. We are happy to have you on our platform.
              <br />
              You are contributing a big piece towards nation by educating yourself and others.
              <img alt="Appreciation for attending class" src={clap} className="clap" />
              <br />
              <div style={{ width: "80%" }}>
                Hope you had a great experience. Lets boost it more by sharing FEEDBACK.
              </div>
              <br />
              Many more classes are waiting for you.
              <div>
                <button type="button" className="btn btn-default" style={{ float: "left" }} onClick={() => this.context.router.push('/contact')} data-dismiss="modal">FEEDBACK</button>&nbsp;&nbsp;
                <button type="button" className="btn btn-default" onClick={() => this.context.router.push('/student')} data-dismiss="modal">OK</button>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

  return {
    classes: state.classes.AllClasses,
    user: state.session.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(classActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Student);
Student.contextTypes = {
  router: PropTypes.func.isRequired
};
