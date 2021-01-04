import { useContext, useMemo, createContext, useReducer } from 'react';
import { defaultState, reducer } from './tipCalcReducer';

const TipContext = createContext();

function useTipCalc() {
  const context = useContext(TipContext);
  if (!context) {
    throw new Error(`useTipCalc must be used within a TipCalcProvider`);
  }
  const [state, dispatch] = context;
  function calcSubtotal() {
    return state.items.reduce((acc, { value }) => acc + value, 0);
  }
  function calcTip(value) {
    return state.tipPercent * 0.01 * value;
  }
  function calcTotal() {
    const subtotal = calcSubtotal();
    return calcTip(subtotal) + subtotal;
  }

  return {
    createItem: () => dispatch({ type: `CREATE_ITEM` }),
    updateItem: payload => dispatch({ type: `UPDATE_ITEM`, payload }),
    deleteItem: payload => dispatch({ type: `DELETE_ITEM`, payload }),
    setTipPercentage: payload => dispatch({ type: `SET_TIP_PERCENTAGE`, payload }),
    toggleEditMode: payload => dispatch({ type: `TOGGLE_EDIT_MODE`, payload }),
    toggleItemTip: () => dispatch({ type: `TOGGLE_ITEM_TIP` }),
    toggleItemTotal: () => dispatch({ type: `TOGGLE_ITEM_TOTAL` }),
    items: state.items,
    tipPercent: state.tipPercent,
    calcTip,
    get subtotal() {
      return calcSubtotal();
    },
    get tipTotal() {
      return calcTip(calcSubtotal());
    },
    get total() {
      return calcTotal();
    },
    get isEditEnabled() {
      return state.editMode;
    },
    get isItemTipEnabled() {
      return state.showItemTip;
    },
    get isItemTotalEnabled() {
      return state.showItemTotal;
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
