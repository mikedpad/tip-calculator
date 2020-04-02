import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Item from './Item';
import { useTipCalc } from '../context/useTipCalc';

const Bill = ({ defaultValue }) => {
  const { updateBill } = useTipCalc();
  const handleBillChange = evt => {
    const { value } = evt.target;
    if (value > 0) {
      updateBill(value);
    }
  };

  return (
    <Item label="Bill">
      <FormControl required fullWidth variant="outlined">
        <InputLabel htmlFor="bill-amount">Subtotal</InputLabel>
        <OutlinedInput
          id="bill-amount"
          defaultValue={defaultValue}
          onChange={handleBillChange}
          type="number"
          min={0}
          inputMode="numeric"
          labelWidth={70}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
    </Item>
  );
};

export default Bill;

Bill.propTypes = {
  defaultValue: PropTypes.number.isRequired,
};
