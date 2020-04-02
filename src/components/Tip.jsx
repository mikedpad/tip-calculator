import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core';
import debounce from 'lodash/debounce';
import Item from './Item';
import { useTipCalc } from '../context/useTipCalc';

const useStyles = makeStyles({
  sliderRoot: {
    '& .MuiGrid-item:first-child': {
      flex: `1 0`,
    },
    '& .MuiGrid-item:last-child': {
      width: 120,
      marginLeft: `1rem`,
    },
  },
});

const Tip = ({ defaultValue }) => {
  const {
    updateTip,
    amount: { tip },
  } = useTipCalc();
  const handleTipChange = (evt, value) => updateTip(value);
  const debounceTipChange = debounce(handleTipChange, 150);
  const classes = useStyles();

  return (
    <Item label="Tip">
      <Grid container direction="row" spacing={2} className={classes.sliderRoot}>
        <Grid item>
          <Slider
            min={0}
            max={100}
            track={false}
            defaultValue={defaultValue}
            onChange={debounceTipChange}
            aria-labelledby="tip-slider"
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item>
          <FormControl variant="outlined">
            <InputLabel htmlFor="tip-amount">Tip Amount</InputLabel>
            <OutlinedInput
              id="tip-amount"
              value={tip}
              readOnly
              labelWidth={85}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Item>
  );
};

export default Tip;

Tip.propTypes = {
  defaultValue: PropTypes.number.isRequired,
};
