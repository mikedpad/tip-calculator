import { nanoid } from 'nanoid';

export const defaultState = {
  items: [],
  tipRate: 15,
  tipRange: [0, 100],
  split: 1,
  splitRange: [1, 10],
  showDetails: true,
};

export const reducer = (state = defaultState, action) => {
  const { type, payload } = action;
  const newState = props => ({ ...state, ...props });

  switch (type) {
    case `CREATE_ITEM`:
      return newState({
        items: [
          ...state.items,
          {
            id: nanoid(),
            cost: 0,
            tip: 0,
            subtotal: 0,
          },
        ],
      });
    case `UPDATE_ITEM`: {
      return newState({
        items: state.items.map(item => {
          const { id, cost } = payload;
          const tip = state.tipRate * 0.01 * cost;
          return item.id === id
            ? {
                id,
                cost,
                tip,
                subtotal: cost + tip,
              }
            : item;
        }),
      });
    }
    case `DELETE_ITEM`:
      return newState({ items: state.items.filter(({ id }) => id !== payload) });
    case `SET_TIP_RATE`: {
      const tipRate = parseInt(payload, 10);
      return newState({
        tipRate,
        items: state.items.map(item => {
          const tip = tipRate * 0.01 * item.cost;
          return {
            ...item,
            tip,
            subtotal: item.cost + tip,
          };
        }),
      });
    }
    case `TOGGLE_DETAILS`:
      return newState({ showDetails: !state.showDetails });
    case `SET_SPLIT`:
      return newState({ split: parseInt(payload, 10) });
    default:
      return state;
  }
};
