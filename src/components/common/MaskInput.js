import PropTypes from 'prop-types';
import React from 'react';
import TextField from 'material-ui/TextField';
import InputMask  from 'react-input-mask';

const MaskInput = ({mask}) => {

  return (
    <TextField {...this.props} mask="{mask}"/>
  );
};

export default MaskInput;
