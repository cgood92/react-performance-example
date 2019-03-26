export const getItems = state => {
  const { ids, byId } = state.items;
  const selectedObj = state.selected;
  const selectedId = Object.keys(selectedObj)[0];
  return ids
    .map(id => byId[id])
    .map(item =>
      Object.assign({}, item, { isSelected: item.id === selectedId })
    );
};

export const getData = (key, state) => state.other[key];
