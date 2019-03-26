const SELECT = "SELECT";
export const select = id => ({ type: SELECT, id });

const selected = (state = {}, action) => {
  switch (action.type) {
    case SELECT:
      return {
        [action.id]: true
      };
    default:
      return state;
  }
};

export default selected;
