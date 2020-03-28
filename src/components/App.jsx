import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Bill from './Bill';
import Tip from './Tip';

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      margin: `0 0 1.5rem`,
    },
    '& .MuiOutlinedInput-input': {
      padding: `0.5rem 0.75rem`,
    },
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h1" align="center" gutterBottom>
        Tip Calculator
      </Typography>
      <Container fixed maxWidth="xs" className={classes.root}>
        <Grid>
          <Grid item>
            <Bill />
          </Grid>
          <Grid item>
            <Tip />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
