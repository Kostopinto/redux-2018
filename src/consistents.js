export const consistents = store => next => action => {
  const result = next(action);
  const state = JSON.stringify(store.getState());
  localStorage.setItem("state", state);
  return result;
};
