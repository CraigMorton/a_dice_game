const globalReducerCreator = (combinedReducer) => {
  return (state = {}, action) => {
  const actionToNewState = {
    
  }
  if (actionToNewState[action.type]) return actionToNewState[action.type]();
  return combinedReducer(state, action);
  }
}

export default globalReducerCreator;