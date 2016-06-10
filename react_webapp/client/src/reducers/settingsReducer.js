const defaultState = {numDice: 5, sharedResourceMax: 9}

const settingsReducer = (state = defaultState, action)=>{
  const mapActionStringToActionDispatchCall = {

  }

  if (mapActionStringToActionDispatchCall[action.type]) return mapActionStringToActionDispatchCall[action.type]();
  return state;
}

export default settingsReducer;