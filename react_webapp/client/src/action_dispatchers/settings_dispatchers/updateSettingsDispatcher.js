import store from "../../store.js"
import {updateSetting} from "../../action_creators/settingsActions.js";
import {refreshCurrentPlayerDefaultState} from "../../action_creators/currentPlayerActions.js";
import {refreshGameInfoDefaultState} from "../../action_creators/gameInfoActions.js";
import {refreshPlayerListDefaultState} from "../../action_creators/playerListActions.js";


const updateSharedResouceMaxDispatcher = (updatedSettingObject) => {
  const mapUpdatedSettingObjectToDispatchCalls = {
    numPlayers: (updatedSettingObject) => {
      console.log(updatedSettingObject.numPlayers);
      if (updatedSettingObject.numPlayers === "") updatedSettingObject.numPlayers = 8;
      if (updatedSettingObject.numPlayers < 3) updatedSettingObject.numPlayers = 3;
      if (updatedSettingObject.numPlayers > 8) updatedSettingObject.numPlayers = 8;
      store.dispatch(updateSetting(updatedSettingObject))
      store.dispatch(refreshPlayerListDefaultState())
    },
    playerMaxHealth: (updatedSettingObject) => {
      if (updatedSettingObject.playerMaxHealth === "") updatedSettingObject.playerMaxHealth = 8;
      if (updatedSettingObject.playerMaxHealth < 1) updatedSettingObject.playerMaxHealth = 1;
      store.dispatch(updateSetting(updatedSettingObject))
      store.dispatch(refreshPlayerListDefaultState())
    },
    numDice: (updatedSettingObject) => {
      if (updatedSettingObject.numDice === "") updatedSettingObject.numDice = 5;
      if (updatedSettingObject.numDice < 1) updatedSettingObject.numDice = 1;
      store.dispatch(updateSetting(updatedSettingObject))
      store.dispatch(refreshCurrentPlayerDefaultState())
    },
    sharedResourceMax: (updatedSettingObject) => {
      if (updatedSettingObject.sharedResourceMax === "") updatedSettingObject.sharedResourceMax = 9;
      if (updatedSettingObject.sharedResourceMax < 0) updatedSettingObject.sharedResourceMax = 0;
      store.dispatch(updateSetting(updatedSettingObject))
      store.dispatch(refreshGameInfoDefaultState())
    }
  }

  const settingToUpdate = Object.keys(updatedSettingObject)[0]

  mapUpdatedSettingObjectToDispatchCalls[settingToUpdate](updatedSettingObject)

}

export default updateSharedResouceMaxDispatcher;