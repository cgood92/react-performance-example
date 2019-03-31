export const getItemIds = state => {
  const { ids } = state.items;
  return ids;
};

export const getItem = (state, id) => {
  const { byId } = state.items;
  return byId[id];
};

export const getData = (key, state) => state.other[key];

export const isSelected = (state, id) => Boolean(state.selected[id]);
