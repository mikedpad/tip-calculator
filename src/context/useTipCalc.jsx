import React, { useContext, useMemo, createContext, useReducer } from 'react';
import { SET_BILL, SET_TIP } from './actionTypes';
import reducer, { defaultState } from './tipCalcReducer';

const NoteContext = createContext();

function useTipCalc() {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error(`useTipCalc must be used within a TipCalcProvider`);
  }
  const [state, dispatch] = context;
  const dispatchAction = (type, payload) => dispatch({ type, payload });

  const { bill, tip } = state;
  const updateBill = payload => dispatchAction(SET_BILL, payload);
  const updateTip = payload => dispatchAction(SET_TIP, payload);
  const getTipAmount = () => bill * (tip * 0.01);
  const getTotal = () => bill + getTipAmount();

  return {
    bill,
    tip,
    updateBill,
    updateTip,
    getTipAmount,
    getTotal,
  };
}

function TipCalcProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}

export { TipCalcProvider, useTipCalc };
