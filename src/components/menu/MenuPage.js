import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import AccountBlock from '../accounts/AccBlock';
import ColBlock from '../collaborate/ColBlock';
import Discussions from '../collaborate/Discussions';
import Complaints from '../collaborate/Complaints';
import Notices from '../collaborate/Notices';
import DirBlock from '../directory/DirBlock';
import VendorBlock from '../vendor/VendorBlock';
import RequestList from './RequestList';
import AlarmBox from './AlarmBox';
import EmergencyAlarm from './EmergencyAlarm';

import FloatingActionButton from 'material-ui/FloatingActionButton';

class MenuPage extends React.Component {
    componentDidMount() {
        document.addEventListener("backbutton", this.handleBackButton, false);
        document.addEventListener("NEW_MESSAGE", this.new_msg_notification, false);
        document.addEventListener("EMERGENCY_ALARM", this.handleAlarm, false)
    }
    componentWillUnmount() {
        document.removeEventListener("backbutton", this.handleBackButton, false);
        document.removeEventListener("NEW_MESSAGE", this.new_msg_notification, false);
        document.removeEventListener("EMERGENCY_ALARM", this.handleAlarm, false)
    }
    constructor(props, context) {
        super(props, context);
        this.changeIndex = this.changeIndex.bind(this);
        this.loadRequests = this.loadRequests.bind(this);
        this.modifyMembers = this.modifyMembers.bind(this);
        this.setToDefault = this.setToDefault.bind(this);
        this.hideRequests = this.hideRequests.bind(this);
        this.handleBackButton = this.handleBackButton.bind(this);
        this.new_msg_notification = this.new_msg_notification.bind(this);
        this.loadAlertBox = this.loadAlertBox.bind(this);
        this.hideAlertBox = this.hideAlertBox.bind(this);
        this.handleAlarm = this.handleAlarm.bind(this);
        this.stopAlarm = this.stopAlarm.bind(this);
        this.share = this.share.bind(this);
        this.state = {
            index: 0,
            slideStyle: {
                marginTop: '0px'
            },
            event: null,
            member: {},
            vendor: {},
            formNo: 0,
            selectedConversation: {},
            showRequests: false,
            ringAlarm: false,
            showAlertBox: false

        };

    }
    handleBackButton() {
        this.setState({ selectedConversation: {} });
        if (this.state.index == 0 && !this.state.showRequests)
            navigator.app.exitApp();
    }
    new_msg_notification(event) {
        this.setState({
            selectedConversation: event.detail
        });
        if (event.detail.discussion) {
            if (event.detail.discussion.type == "C") {                
                document.getElementsByClassName("complaint")[0].click()
            }

            else if (event.detail.type == "N")
                document.getElementsByClassName("notice")[0].click()
            else {                
                document.getElementsByClassName("forum")[0].click()
            }
        }        
    }
    handleAlarm(event) {
        this.setState({
            ringAlarm: true,
            index: 0,
            memberInNeed: event.detail
        });
        this.setState({
            slideStyle: {
                marginTop: '0px'
            }
        });
    }
    stopAlarm() {
        this.setState({
            ringAlarm: false,
            index: 0
        });
        this.setState({
            slideStyle: {
                marginTop: '0px'
            }
        });
    }
    share() {
        console.log("Share dialog opens");
        if (window.plugins && window.plugins.socialsharing) {
            var options = {
                message: 'I am very happy to inform to all my dear residents that we have registered our apartment on "Live Together". Please use below link to install our apartment application. Our apartment Id is ' + JSON.parse(localStorage.getItem("state")).session.aptId + '.', // not supported on some apps (Facebook, Instagram) 
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
    componentDidUpdate() {
        if (this.state.start) {
            if (this.state.index == 0) {
                if (document.querySelector('.pop.loads') != null)
                    document.querySelector('.pop.loads').animate({
                        top: ['0', '100vh']
                    }, 500);
            }
            else {
                if (document.querySelector('.pop.loads') != null)
                    document.querySelector('.pop.loads').animate({
                        top: ['100vh', '0']
                    }, 1000);
            }
            this.setState({ start: false });
        }
    }
    loadRequests() {
        window.scroll(0, 0);
        this.setState({ start: true });
        this.setState({ showRequests: true });
    }
    loadAlertBox() {
        this.setState({ showAlertBox: true });
    }
    hideAlertBox() {
        this.setState({ showAlertBox: false });
    }
    hideRequests() {
        window.scroll(0, 0);
        this.setState({ showRequests: false });
    }
    setToDefault() {
        window.scroll(0, 0);
        this.setState({ selectedConversation: {} });
        this.setState({ formNo: 0 });
    }
    modifyMembers(event, type) {
        if (type == "AddMember")
            this.setState({ formNo: 1 })
    }
    changeIndex(event, i) {
        if (i == 0)
            this.setState({ selectedConversation: {} });
        if (i != this.state.index) {
            this.setState({ index: i });
            if (i > 0) {
                event.persist();
                this.setState({ event: event });
            }
            else {
                this.setState({
                    slideStyle: {
                        marginTop: '0px'
                    }
                });
            }
        }

    }
    componentDidUpdate() {
        if (this.state.index > 0) {
            var event = this.state.event;
            if (event != null) {
                window.scroll(0, 0);
                var val1 = parseInt(event.target.closest(".bg-apt").style.marginTop);
                var val2 = val1 - event.target.closest(".blk").getBoundingClientRect().top;
                val1 += 'px';
                val2 += 'px';
                document.querySelector('.bg-apt').animate({
                    marginTop: [val1, val2]
                }, 1000);
                this.setState({
                    slideStyle: {
                        marginTop: parseInt(event.target.closest(".bg-apt").style.marginTop) - event.target.closest(".blk").getBoundingClientRect().top
                    }
                });
                this.setState({ event: null });
            }
        }

    }
    render() {
        return (
            <div className="dashboard-page">
                <div className={"bg-apt " + (this.state.index == 0 ? "" : "fullheight")} style={this.state.slideStyle}>
                    {this.state.index == 0 ? <span className="share-btn" onClick={this.share}>
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                    </span> : null}
                    <div className="blk" onClick={(evt) => this.changeIndex(evt, 1)}>
                        <div className={"abs-block " + (this.state.index == 1 ? 'selected' : '')}>
                            <div className="circle">
                                <div className="icon bank-icon"></div>
                            </div>
                            <div className="top-box">
                                <span>Accounts</span>
                            </div>
                            <div className="bottom-box">
                                <span>Society funds, Maintainence and others</span>
                            </div>
                        </div>
                        {this.state.index == 1 ? <AccountBlock backToHome={(evt) => this.changeIndex(evt, 0)} /> : null}
                    </div>
                    <div className={'blk ' + (this.state.index < 2 && this.state.index > 0 ? 'hide' : '')} onClick={(evt) => this.changeIndex(evt, 2)}>
                        <div className={"abs-block " + (this.state.index == 2 ? 'selected' : '')}>
                            <div className="circle">
                                <div className="icon dir-icon">
                                </div>
                            </div>
                            <div className="top-box">
                                <span>Directory</span></div>
                            <div className="bottom-box">
                                <span>Know your neighbours</span></div>
                        </div>
                        {this.state.index == 2 ? <DirBlock backToHome={(evt) => this.changeIndex(evt, 0)} onModify={this.state.ModifyMembers} /> : null}
                    </div>
                    <div className={'blk ' + (this.state.index < 3 && this.state.index > 0 ? 'hide' : '')} onClick={(evt) => this.changeIndex(evt, 3)}>
                        <div className={"abs-block " + (this.state.index == 3 ? 'selected' : '')}>
                            <div className="circle">
                                <div className="icon vendor-icon"></div>
                            </div>
                            <div className="top-box"><span>Vendor</span></div>
                            <div className="bottom-box"><span>Maid, Plumber, Carpenter and others</span></div>
                        </div>
                        {this.state.index == 3 ? <VendorBlock backToHome={(evt) => this.changeIndex(evt, 0)} /> : null}
                    </div>
                    <div className={'blk ' + (this.state.index < 4 && this.state.index > 0 ? 'hide' : '')} onClick={(evt) => this.changeIndex(evt, 4)}>
                        <div className={"abs-block forum " + (this.state.index == 4 ? 'selected' : '')}>
                            <div className="circle">
                                <div className="icon forum-icon"></div>
                            </div>
                            <div className="top-box"><span>Online Forum</span></div>
                            <div className="bottom-box"><span>Events, chit chat and groups</span></div>
                        </div>
                        {this.state.index == 4 ? <Discussions selectedChat={this.state.selectedConversation} backToHome={(evt) => this.changeIndex(evt, 0)} /> : null}
                    </div>
                    <div className={'blk ' + (this.state.index < 5 && this.state.index > 0 ? 'hide' : '')} onClick={(evt) => this.changeIndex(evt, 5)}>
                        <div className={"abs-block notice " + (this.state.index == 5 ? 'selected' : '')}>
                            <div className="circle">
                                <div className="icon not-icon"></div>
                            </div>
                            <div className="top-box"><span>Notices</span></div>
                            <div className="bottom-box"><span>Information, Warnings etc</span></div>
                        </div>
                        {this.state.index == 5 ? <Notices backToHome={(evt) => this.changeIndex(evt, 0)} /> : null}
                    </div>
                    <div className={'blk ' + (this.state.index < 6 && this.state.index > 0 ? 'hide' : '')} onClick={(evt) => this.changeIndex(evt, 6)}>
                        <div className={"abs-block last complaint " + (this.state.index == 6 ? 'selected' : '')}>
                            <div className="circle">
                                <div className="icon com-icon"></div>
                            </div>
                            <div className="top-box"><span>Complaint Box</span></div>
                            <div className="bottom-box"><span>Blah blah blah</span></div>
                        </div>
                        {this.state.index == 6 ? <Complaints selectedChat={this.state.selectedConversation} backToHome={(evt) => this.changeIndex(evt, 0)} /> : null}
                    </div>
                    {this.state.index > 0 ?
                        <FloatingActionButton className="menu-btn" mini={true} onClick={(evt) => this.changeIndex(evt, 0)}>
                            <i className="fa fa-home" ></i>
                        </FloatingActionButton>
                        : null}

                </div>
                <div className="fixed-box">
                    {this.state.index == 0 && this.props.requests.length > 0 ?
                        <span className="request-block">
                            <FloatingActionButton className="request-btn" mini={false} onClick={this.loadRequests} >
                                <span> Requests </span> <span>{this.props.requests.length}</span>
                            </FloatingActionButton>
                            {this.state.showRequests ? <div className={"pop " + (this.state.showRequests ? "loads" : "")}><RequestList onClose={this.hideRequests} /></div> : null}
                        </span>
                        : null}
                    {this.state.index == 0 ?
                        <span className="help-block">
                            <FloatingActionButton className="help-btn" mini={false} onClick={this.loadAlertBox} >
                                <span> Help Me ?</span>
                            </FloatingActionButton>
                            {this.state.showAlertBox ? <div className={"pop " + (this.state.showAlertBox ? "loads" : "")}><AlarmBox onClose={this.hideAlertBox} /></div> : null}
                        </span>
                        : null}
                    <div className="alarm-box">
                        {this.state.ringAlarm ? <div className={"pop " + (this.state.ringAlarm ? "loads" : "")}><EmergencyAlarm onClose={this.stopAlarm} memberInNeed={this.state.memberInNeed} /></div> : null}
                    </div>
                </div>
            </div>
        );
    }

}
function mapStateToProps(state, ownProps) {

    return {
        requests: state.requests,
    };
}
function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage);

//export default MenuPage;
