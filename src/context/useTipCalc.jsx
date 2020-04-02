import React, { useContext, useMemo, createContext, useReducer } from 'react';
import ldRound from 'lodash/round';
import { defaultState, reducer } from './tipCalcReducer';

const NoteContext = createContext();

const roundTo2Dec = value => ldRound(value, 2);

function useTipCalc() {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error(`useTipCalc must be used within a TipCalcProvider`);
  }
  const [state, dispatch] = context;
  const dispatchAction = (type, payload) => dispatch({ type, payload });

  const amount = {
    get bill() {
      return roundTo2Dec(state.bill);
    },
    get tip() {
      return roundTo2Dec(state.bill * (state.tip * 0.01));
    },
    get total() {
      return roundTo2Dec(this.bill + this.tip);
    },
  };

  return {
    updateBill: payload => dispatchAction(`SET_BILL`, payload),
    updateTip: payload => dispatchAction(`SET_TIP`, payload),
    amount,
  };
}

function TipCalcProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}

export { TipCalcProvider, useTipCalc };
