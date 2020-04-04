import React from 'react';
import {Link} from 'react-router';

class DashboardPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.showLoginBlock = this.showLoginBlock.bind(this);
        this.showRegisterBlock = this.showRegisterBlock.bind(this);
        this.state = {
            loginBlock: false,
            registerBlock: false
        };
    }
    showLoginBlock() {
        this.setState({ loginBlock: !this.state.loginBlock });
    }
    showRegisterBlock() {
        this.setState({ registerBlock: !this.state.registerBlock });
    }
    render() {
        return (
            <div className="dashboard-page">
                <div className="header">
                    <h3>Welcome</h3>
                </div>
                <div>
                    <div className="col-sm-6 col-xs-6 blk">
                        <div className="icon bank-icon"></div>
                        <span>Maintainenece</span>
                    </div>
                    <div className="col-sm-6  col-xs-6 blk">
                        <div className="icon dir-icon"></div>
                        <span>Directory</span>
                    </div>
                    <div className="col-sm-6  col-xs-6 blk">
                    <div className="icon vendor-icon"></div>
                        <span>Vendors</span>
                    </div>
                    <div className="col-sm-6  col-xs-6 blk">
                        <span>Collaborate</span>
                    </div>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default DashboardPage;
