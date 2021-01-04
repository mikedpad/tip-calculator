import { nanoid } from 'nanoid';

export const defaultState = {
  items: [],
  tipPercent: 15,
  editMode: false,
  showItemTip: true,
  showItemTotal: true,
};

export const reducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case `CREATE_ITEM`:
      return {
        ...state,
        items: [...state.items, { key: nanoid(), value: 0 }],
      };
    case `UPDATE_ITEM`:
      return {
        ...state,
        items: state.items.map(item => {
          const { key, value } = payload;
          return item.key === key ? { key, value } : item;
        }),
      };
    case `DELETE_ITEM`:
      return {
        ...state,
        items: state.items.filter(({ key }) => key !== payload),
      };
    case `SET_TIP_PERCENTAGE`:
      return {
        ...state,
        tipPercent: parseFloat(payload),
      };
    case `TOGGLE_EDIT_MODE`:
      return {
        ...state,
        editMode: typeof payload === `boolean` ? payload : !state.editMode,
      };
    case `TOGGLE_ITEM_TIP`:
      return {
        ...state,
        showItemTip: !state.showItemTip,
      };
    case `TOGGLE_ITEM_TOTAL`:
      return {
        ...state,
        showItemTotal: !state.showItemTotal,
      };
    default:
      return state;
  }
};
