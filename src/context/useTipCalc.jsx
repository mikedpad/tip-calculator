import { useContext, useMemo, createContext, useReducer } from 'react';
import { defaultState, reducer } from './tipCalcReducer';

const TipContext = createContext();

function useTipCalc() {
  const context = useContext(TipContext);
  if (!context) {
    throw new Error(`useTipCalc must be used within a TipCalcProvider`);
  }
  const [state, dispatch] = context;
  const { items, tipRate, tipRange } = state;
  // const subtotal = items.reduce((acc, { value }) => acc + value, 0);
  // const calcTotal = () => calcTip(subtotal) + subtotal;

  return {
    createItem: () => dispatch({ type: `CREATE_ITEM` }),
    updateItem: payload => dispatch({ type: `UPDATE_ITEM`, payload }),
    deleteItem: payload => dispatch({ type: `DELETE_ITEM`, payload }),
    setTipRate: payload => dispatch({ type: `SET_TIP_RATE`, payload }),
    setTipRange: payload => dispatch({ type: `SET_TIP_RANGE`, payload }),
    toggleDetails: () => dispatch({ type: `TOGGLE_DETAILS` }),
    toggleEvenSplit: () => dispatch({ type: `TOGGLE_EVEN_SPLIT` }),
    setSplitCount: () => dispatch({ type: `SET_SPLIT_COUNT` }),
    get items() {
      return items;
    },
    get tipRate() {
      return tipRate;
    },
    get tipRange() {
      return tipRange;
    },
    get total() {
      return items.reduce((acc, { cost, tip }) => acc + cost + tip, 0);
    },
    get showDetails() {
      return state.showDetails;
    },
    get evenSplit() {
      return state.evenSplit;
    },
    get splitCount() {
      return state.splitCount;
    },
  };
}

function TipCalcProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <TipContext.Provider value={value}>{children}</TipContext.Provider>;
}

const TipCalcDefaultState = defaultState;

export { TipCalcProvider, useTipCalc, TipCalcDefaultState };
