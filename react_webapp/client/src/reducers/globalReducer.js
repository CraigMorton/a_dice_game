export default (state = {}, action, combinedReducer)=>{
  const actionToNewState = {

  }
  if (actionToNewState[action.type]) return actionToNewState[action.type]();
  return combinedReducer(state, action);
}