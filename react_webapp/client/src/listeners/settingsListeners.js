import store from "../store.js";
import updateSettingsDispatcher from "../action_dispatchers/settings_dispatchers/updateSettingsDispatcher.js";

const settingsListeners = {
  onUpdateSetting: (e) => {
    let updatedSetting = {}
    updatedSetting[e.target.id] = e.target.value;
    updateSettingsDispatcher(updatedSetting)
  }
}

export default settingsListeners;