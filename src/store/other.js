const STORE_DATA = "STORE_DATA";
export const storeData = (key, payload) => ({
  type: STORE_DATA,
  key,
  payload
});

export default (state = {}, action) => {
  switch (action.type) {
    case STORE_DATA: {
      return {
        ...state,
        [action.key]: action.payload
      };
    }
    default:
      return state;
  }
};
