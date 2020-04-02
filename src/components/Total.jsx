import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTipCalc } from '../context/useTipCalc';
import Item from './Item';

const Total = () => {
  const {
    amount: { total },
  } = useTipCalc();

  return (
    <Item label="Total">
      <Typography variant="h2">{total}</Typography>
    </Item>
  );
};

export default Total;
