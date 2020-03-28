import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core';
import App from './components/App';
import theme from './styles/theme';
import { TipCalcProvider } from './context/useTipCalc';

const respTheme = responsiveFontSizes(theme);

const AppRoot = (
  <MuiThemeProvider theme={respTheme}>
    <CssBaseline />
    <TipCalcProvider>
      <App />
    </TipCalcProvider>
  </MuiThemeProvider>
);

ReactDOM.render(AppRoot, document.getElementById(`app`));
