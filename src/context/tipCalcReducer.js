import { SET_BILL, SET_TIP } from './actionTypes';

export const defaultState = {
  bill: 0,
  tip: 15,
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_BILL:
      return {
        ...state,
        bill: parseFloat(payload),
      };
    case SET_TIP:
      return {
        ...state,
        tip: parseFloat(payload),
      };
    default:
      return state;
  }
};
