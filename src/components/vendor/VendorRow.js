import React, { PropTypes } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class VendorRow extends React.Component {
  componentWillReceiveProps(nextProps){
    this.state.vendor = nextProps.vendor;
  }
  constructor(props, context) {
    super(props, context);
    this.like = this.like.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.unlike = this.unlike.bind(this);
    this.state = {
      vendor: this.props.vendor
    };
    // {vendor.category=="MM"?<div className="milk-man col-xs-3 pic"></div>:null}
    //   {vendor.category=="HK"?<div className="maid  col-xs-3 pic"></div>:null}
    //   {vendor.category=="C"?<div className="carpenter  col-xs-3 pic"></div>:null}
    //   {vendor.category=="P"?<div className="plumber  col-xs-3 pic"></div>:null}
    //   {vendor.category=="E"?<div className="electrician  col-xs-3 pic"></div>:null}
  }
  selectItem(evt, child) {
    evt.stopPropagation();
    if (child.props.value == 1)
      this.props.onEdit(this.props.vendor);
    else if (child.props.value == 2)
      this.props.onDelete(this.props.vendor);
    else if (child.props.value == 3)
      document.location.href = 'tel:'+this.props.vendor.vendorPhone;
  };
  editVendor(evt) {
    evt.stopPropagation();
    this.props.onEdit(this.props.vendor);

  }
  deleteVendor(evt) {
    evt.stopPropagation();
    this.props.onDelete(this.props.vendor);
  }
  like() {
    this.props.onLike(this.props.vendor);
    var vendor=Object.assign({},this.state.vendor);
    vendor.isLikedByYou = !vendor.isLikedByYou;
    if (vendor.isDislikedByYou) {
      vendor.isDislikedByYou = false;
      vendor.dislikes--;
    }
    if (vendor.isLikedByYou)
      vendor.likes++;
    else
      vendor.likes--;

    this.setState({
      vendor: vendor
    });

  }
  unlike() {
    var vendor=Object.assign({},this.state.vendor);
    this.props.onDislike(this.props.vendor);
    vendor.isDislikedByYou = !vendor.isDislikedByYou;
    if (vendor.isLikedByYou) {
      vendor.isLikedByYou = false;
      vendor.likes--;
    }
    if (vendor.isDislikedByYou)
      vendor.dislikes++;
    else
      vendor.dislikes--;
    this.setState({
      vendor: vendor
    });
  }

  render() {
    let vendor = this.state.vendor;
    return (
      <div className="vendor-row clearfix" >
        <div className="content  col-xs-12">
          <div className="col-xs-8 no-padding">
            <label className="name">{vendor.vendorName}<span className="type">{'-' + vendor.category}</span></label>

            <div>
              <div className="added">
                <span>- {vendor.addedBy}</span>
              </div>
            </div>
          </div>
          <div className="col-xs-4 review-box no-padding">
            <div className="review" onClick={this.like}>
              <div className={"likes " + (vendor.isLikedByYou ? 'selected' : '')}></div>
              {vendor.likes}
            </div>
            <div className="review" onClick={this.unlike}>
              <div className={"unlikes " + (vendor.isDislikedByYou ? 'selected' : '')}></div>
              {vendor.dislikes}
            </div>
            <div className="icon-menu">
              {
                (this.props.role == "President" || this.props.user == vendor.createdBy) ?
                  <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                    onItemTouchTap={this.selectItem}>
                    <MenuItem primaryText="Edit" value="1" />
                    <MenuItem primaryText="Delete" value="2" />
                    <MenuItem primaryText="Call" value="3" />
                  </IconMenu>
                  :
                  <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                    onItemTouchTap={this.selectItem}>
                    <MenuItem primaryText="Call" value="3" />
                  </IconMenu>
                }
            </div>
            {/*<i className="fa fa-pencil-square-o" onClick={(evt) => this.editVendor(evt)}></i>
            <i className="fa fa-trash" onClick={(evt) => this.deleteVendor(evt)}></i>
            <span className="number"><div className="call-icon"></div></span>*/}
          </div>
        </div>
      </div>
    );
  }
}
export default VendorRow;
