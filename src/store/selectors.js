export const getItems = state => {
  const { ids, byId } = state.items;
  return ids.map(id => byId[id]);
};

export const getData = (key, state) => state.other[key];

export const isSelected = (state, id) => Boolean(state.selected[id]);
