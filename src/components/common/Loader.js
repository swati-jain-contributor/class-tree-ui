import PropTypes from 'prop-types';
import React from 'react';

class Loader extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="lds-css ng-scope">
        <div className="lds-ball">
          <div></div>
        </div>
      </div>
    );

  }
}

export default Loader;
