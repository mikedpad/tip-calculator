import { useContext, useMemo, createContext, useReducer } from 'react';
import { defaultState, reducer } from './tipCalcReducer';

const TipContext = createContext();

function useTipCalc() {
  const context = useContext(TipContext);
  if (!context) {
    throw new Error(`useTipCalc must be used within a TipCalcProvider`);
  }
  const [state, dispatch] = context;

  return {
    createItem: () => dispatch({ type: `CREATE_ITEM` }),
    updateItem: payload => dispatch({ type: `UPDATE_ITEM`, payload }),
    deleteItem: payload => dispatch({ type: `DELETE_ITEM`, payload }),
    setTipRate: payload => dispatch({ type: `SET_TIP_RATE`, payload }),
    setSplit: payload => dispatch({ type: `SET_SPLIT`, payload }),
    toggleDetails: () => dispatch({ type: `TOGGLE_DETAILS` }),
    get items() {
      return state.items;
    },
    get tipRate() {
      return state.tipRate;
    },
    get tipRange() {
      return state.tipRange;
    },
    get total() {
      return state.items.reduce((acc, { cost, tip }) => acc + cost + tip, 0);
    },
    get showDetails() {
      return state.showDetails;
    },
    get split() {
      return state.split;
    },
    get splitRange() {
      return state.splitRange;
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
