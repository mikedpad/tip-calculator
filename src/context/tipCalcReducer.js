import { nanoid } from 'nanoid';

const createItem = v => ({
  key: nanoid(),
  value: parseFloat(v),
});

export const defaultState = {
  items: [createItem(25), createItem(10)],
  tipPercent: 10,
};

export const reducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case `CREATE_ITEM`:
      return {
        ...state,
        items: [...state.items, createItem(0)],
      };
    case `UPDATE_ITEM`:
      return {
        ...state,
        items: state.items.map(item => {
          const { key } = item;
          if (key === payload.key) {
            return { key, value: parseFloat(payload.value) };
          }
          return item;
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
    default:
      return state;
  }
};
