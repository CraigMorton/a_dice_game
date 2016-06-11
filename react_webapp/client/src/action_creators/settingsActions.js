const updateSharedResourceMax = (newMax) => ({type: "UPDATE_SHARED_RESOURCE_MAX", newMax: newMax})
export {updateSharedResourceMax};

const refreshSettingsDefaultState = () => ({type: "REFRESH_SETTINGS_DEFAULT_STATE"})
export {refreshSettingsDefaultState};

const updateSetting = (updatedSettingObject) => {
  return {type: "UPDATE_SETTING", updatedSetting: updatedSettingObject}
}
export {updateSetting};

