import React, {PropTypes} from 'react';
import '../../styles/collaborate.less';
import Complaints from './Complaints'
import Discussions from './Discussions'
import Notices from './Notices'
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

const noticeIcon = <FontIcon className="material-icons"><i className="fa fa-bullhorn" aria-hidden="true"></i></FontIcon>;
const discussionIcon = <FontIcon className="material-icons"><i className="fa fa-comments" aria-hidden="true"></i></FontIcon>;
const secretIcon = <FontIcon className="material-icons"><i className="fa fa-user-secret" aria-hidden="true"></i></FontIcon>;


class ColBlock extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.select=this.select.bind(this);
    this.state = {
      selectedIndex:0,
      selectedConversation:this.props.selectedConversation
    };
    if(this.state.selectedConversation.discussion)
    {
      if(this.state.selectedConversation.discussion.type=="C"){
        this.state.selectedIndex=2;
        this.state.selectedChatC=this.state.selectedConversation;
      }
        
      else if(this.state.selectedConversation.discussion.type=="N")
        this.state.selectedIndex=1;
      else{
        this.state.selectedIndex=0;
        this.state.selectedChatD=this.state.selectedConversation;
      }              
    }
  }
  select(index){this.setState({selectedIndex: index})};
  render() {
    return (
      <div className="col-block  view-holder">
        <div>
        {this.state.selectedIndex==2?<Complaints selectedChat={this.state.selectedChatC} backToHome={this.props.backToHome}/>:null}
        {this.state.selectedIndex==1?<Notices   backToHome={this.props.backToHome}/>:null}
        {this.state.selectedIndex==0?<Discussions  selectedChat={this.state.selectedChatD} backToHome={this.props.backToHome}/>:null}
        </div>
        <div className="bottom-bar">
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="Discussions"
              icon={discussionIcon}
              onTouchTap={() => this.select(0) }
              />
            <BottomNavigationItem
              label="Notice"
              icon={noticeIcon}
              onTouchTap={() => this.select(1) }
              />
            <BottomNavigationItem
              label="Help"
              icon={secretIcon}
              onTouchTap={() => this.select(2) }
              />
          </BottomNavigation>
        </Paper>
        </div>
      </div>
    );
  }
}

export default ColBlock;