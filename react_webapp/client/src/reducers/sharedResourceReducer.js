const sharedResourceReducer = (state = {}, action)=>{
  const mapActionStringToActionDispatchCall = {
    "REMOVE_SHARED_RESSOURCE_FROM_POOL": () => {
      return Object.assign({}, state, {count: state.count - 1})
    },
    "RESET_SHARED_RESOURCE_POOL": () => {
      return Object.assign({}, state, {count: state.max})
    }
  }

  if (mapActionStringToActionDispatchCall[action.type]) return mapActionStringToActionDispatchCall[action.type]();
  return state;
}

export {sharedResourceReducer};