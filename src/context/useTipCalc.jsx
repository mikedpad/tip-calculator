import { useContext, useMemo, createContext, useReducer } from 'react';
import { defaultState, reducer } from './tipCalcReducer';

const NoteContext = createContext();

function useTipCalc() {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error(`useTipCalc must be used within a TipCalcProvider`);
  }
  const [state, dispatch] = context;
  function dispatchAction(type, payload) {
    dispatch({ type, payload });
  }

  function calculateTip(value) {
    const tipDecimal = state.tipPercent * 0.01;
    return tipDecimal * value;
  }

  return {
    createItem: () => dispatchAction(`CREATE_ITEM`),
    updateItem: p => dispatchAction(`UPDATE_ITEM`, p),
    deleteItem: p => dispatchAction(`DELETE_ITEM`, p),
    updateTip: p => dispatchAction(`SET_TIP_PERCENTAGE`, p),
    items: state.items,
    tipPercent: state.tipPercent,
    calcTip: v => calculateTip(v),
    calcTotal: v => calculateTip(v) + v,
    get subtotal() {
      return state.items.reduce((acc, { value }) => acc + value, 0);
    },
  };
}

function TipCalcProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}

const TipCalcDefaultState = defaultState;

export { TipCalcProvider, useTipCalc, TipCalcDefaultState };
