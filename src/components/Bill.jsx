import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useTipCalc } from '../context/useTipCalc';

const Bill = () => {
  const { updateBill } = useTipCalc();
  const handleBillChange = evt => updateBill(parseFloat(evt.target.value));

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="bill-amount">Bill Amount</InputLabel>
      <OutlinedInput
        id="bill-amount"
        defaultValue={0}
        onChange={handleBillChange}
        required
        type="number"
        inputMode="numeric"
        labelWidth={85}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
      />
    </FormControl>
  );
};

export default Bill;
