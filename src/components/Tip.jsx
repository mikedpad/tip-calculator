import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/styles';
import { useTipCalc } from '../context/useTipCalc';
import { defaultState } from '../context/tipCalcReducer';

const useStyles = makeStyles({
  sliderRoot: {
    '& .MuiGrid-item:first-child': {
      flex: `1 0`,
    },
    '& .MuiGrid-item:last-child': {
      width: 60,
      marginLeft: `1rem`,
    },
  },
});

const Tip = () => {
  const { tip, updateTip, getTipAmount, getTotal } = useTipCalc();
  const { tip: defaultTip } = defaultState;
  const tipAmount = getTipAmount();
  const handleTipChange = (evt, value) => updateTip(parseFloat(value));
  const classes = useStyles();
  console.log(`  Tip: ${tip}%\nTotal: ${getTotal()}`);

  return (
    <>
      <Typography id="tip-slider" component="h3" variant="overline">
        Tip Amount
      </Typography>
      <Grid container direction="row" spacing={2} className={classes.sliderRoot}>
        <Grid item>
          <Slider
            step={5}
            min={0}
            max={100}
            defaultValue={defaultTip}
            onChange={handleTipChange}
            aria-labelledby="tip-slider"
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item>
          <Typography component="p" align="center" variant="body1">
            {tipAmount}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Tip;
