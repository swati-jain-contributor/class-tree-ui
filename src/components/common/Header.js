import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import Loader from './Loader';

const Header = ({loading}) => {
  return (
    <div>      
      {loading && <Loader/>}
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
