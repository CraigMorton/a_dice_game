const playerInfoReducer = (state = {}, action)=>{
  const mapActionStringToActionDispatchCall = {

  }

  if (mapActionStringToActionDispatchCall[action.type]) return mapActionStringToActionDispatchCall[action.type]();
  return state;
}

export {playerInfoReducer};