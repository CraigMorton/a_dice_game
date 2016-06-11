// import defaultStateObject from "../defaultState.js";
// const defaultState = defaultStateObject.settings;
import defaultStateGetter from "../defaultState.js";
const defaultState = defaultStateGetter().settings;

const settingsReducer = (state = defaultState, action)=>{
  const mapActionStringToActionDispatchCall = {
    "REFRESH_SETTINGS_DEFAULT_STATE": () => {
      return defaultStateGetter().settings;
    },
    "UPDATE_SETTING": () => {
      return Object.assign({}, state, action.updatedSetting)
    }

  }

  if (mapActionStringToActionDispatchCall[action.type]) return mapActionStringToActionDispatchCall[action.type]();
  return state;
}

export default settingsReducer;