import React, { PropTypes } from 'react';

class MemberRow extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.showDetail = this.showDetail.bind(this);
    this.editMember = this.editMember.bind(this);
    this.deleteMember = this.deleteMember.bind(this);
    this.state = {
      show: false,
      start: true
    };
  }
  call(evt){
    evt.stopPropagation();
    document.location.href = 'tel:'+this.props.member.phone;
  }
  wp(evt){
    evt.stopPropagation();
    cordova.plugins.Whatsapp.send(this.props.member.phone);
  }
  editMember(evt) {
    evt.stopPropagation();
    this.props.onEdit(this.props.member);
  }
  deleteMember(evt) {
    evt.stopPropagation();
    this.props.onDelete(this.props.member);
  }
  showDetail() {

    this.setState({ show: !this.state.show });
    this.setState({ start: true });
  }
  componentDidUpdate() {
    if (this.state.start) {
      if (this.state.show) {
        document.querySelector('#member' + this.props.member.id + 'detail').animate({
          height: ['0px', '160px'],
          padding: ['0px', '15px']
        }, 500);
      }
      //  else{
      //    document.querySelector('#member'+this.props.member.id+'detail').animate({
      //                   height:['60px','0px'],
      //                   padding:['15px','0px']
      //               },500);
      //  }
      this.setState({ start: false });
    }
  }

  render() {
    var member = this.props.member;
    return (
      <div className="member-row" id={'member' + member.id}>
        <div className="main clearfix" onClick={this.showDetail}>
          <span>{member.name}&nbsp;<span className="house">{member.block}-{member.flat}</span></span>          
          <span className="contact">
            <div className="call-icon" onClick={(evt)=>this.call(evt)}></div>
            <div className="wp-icon" onClick={(evt)=>this.wp(evt)}></div>
            {
              this.props.role == "President" ?
                <span>
                  <i className="fa fa-pencil-square-o" onClick={(evt) => this.editMember(evt)}></i>
                  {member.role == "Resident" ? <i className="fa fa-trash" onClick={(evt) => this.deleteMember(evt)}></i>
                    : null}
                </span> 
              : null
            }
          </span>
          {
              member.role == "President" ?<div className="role-box">Secretary</div>:null}
        </div>
        {this.state.show ? <div className="detail-view" id={'member' + member.id + 'detail'}>
          <div className="clearfix">
            <div className="col-xs-5 col-xs-offset-1 box">
              <i className="fa fa-home"></i>{member.family} Members</div>
            <div className="col-xs-5 box">
              <i className="fa fa-car"></i>
              {member.vehicles} Vehicles</div>
            <div className="col-xs-8 col-xs-offset-2 box">
              <i className="fa fa-phone-square"></i>
              {member.phone}</div>
          </div>
        </div> : null}

      </div>
    );
  }
}
export default MemberRow;
