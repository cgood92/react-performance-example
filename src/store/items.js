import { combineReducers } from "redux";

const STORE_ITEMS = "STORE_ITEMS";
export const storeItems = payload => ({
  type: STORE_ITEMS,
  payload
});

export const byId = (state = {}, action) => {
  switch (action.type) {
    case STORE_ITEMS:
      return action.payload.reduce(
        (acc, item) => Object.assign({}, acc, { [item.id]: item }),
        state
      );
    default:
      return state;
  }
};

export const ids = (state = [], action) => {
  switch (action.type) {
    case STORE_ITEMS:
      return state.concat(action.payload.map(({ id }) => id));
    default:
      return state;
  }
};

export default combineReducers({ byId, ids });
