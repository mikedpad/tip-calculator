import { nanoid } from 'nanoid';

export const defaultState = {
  items: [],
  tipRate: 15,
  tipRange: [5, 30],
  showDetails: true,
  evenSplit: false,
  splitCount: 2,
};

export const reducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case `CREATE_ITEM`:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: nanoid(),
            cost: 0,
            tip: 0,
            subtotal: 0,
          },
        ],
      };
    case `UPDATE_ITEM`: {
      return {
        ...state,
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
      };
    }
    case `DELETE_ITEM`:
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== payload),
      };
    case `SET_TIP_RATE`: {
      const tipRate = parseInt(payload, 10);
      return {
        ...state,
        tipRate,
        items: state.items.map(item => {
          const tip = tipRate * 0.01 * item.cost;
          return {
            ...item,
            tip,
            subtotal: item.cost + tip,
          };
        }),
      };
    }
    case `SET_TIP_RANGE`: {
      const [min, max] = payload;
      return {
        ...state,
        tipRange: [parseInt(min, 10), parseInt(max, 10)],
      };
    }
    case `TOGGLE_DETAILS`:
      return {
        ...state,
        showDetails: !state.showDetails,
      };
    case `TOGGLE_EVEN_SPLIT`:
      return {
        ...state,
        evenSplit: !state.evenSplit,
      };
    case `SET_SPLIT_COUNT`:
      return {
        ...state,
        splitCount: parseInt(payload, 10),
      };
    default:
      return state;
  }
};
