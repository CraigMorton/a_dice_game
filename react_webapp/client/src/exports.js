//// JS
// MODELS
import {jsonApiHelper,apiGet, apiPost} from "./models/jsonApiHelper.js";
export {apiGet, apiPost, jsonApiHelper};

//// REDUX

// need reducers to create store - can't import/export them through this file as createStore seems to get called in store.js before this file is run
// REDUCERS
// import {currentPlayerReducer} from "./reducers/currentPlayerReducer.js";
// import {diceReducer} from "./reducers/diceReducer.js";
// import {playerInfoReducer} from "./reducers/playerInfoReducer.js";
// import {playerListReducer} from "./reducers/playerListReducer.js";
// import {settingsReducer} from "./reducers/settingsReducer.js";
// import {sharedResourceReducer} from "./reducers/sharedResourceReducer.js";
// import {statsReducer} from "./reducers/statsReducer.js";

// export {currentPlayerReducer, diceReducer, playerInfoReducer, playerListReducer, settingsReducer, sharedResourceReducer, statsReducer};

// const reducers = {
//   currentPlayer: currentPlayerReducer,
//   dice: diceReducer,
//   playerInfo: playerInfoReducer,
//   playerList: playerListReducer,
//   settings: settingsReducer,
//   sharedResource: sharedResourceReducer,
//   stats: statsReducer
// }
// export {reducers};

////REDUX
//STORE
import store from "./store.js";
export {store};

// LISTENERS
import currentPlayerListeners from "./listeners/currentPlayerListeners.js";
import gameInfoListeners from "./listeners/gameInfoListeners.js";
import playerListListeners from "./listeners/playerListListeners.js";
import settingsListeners from "./listeners/settingsListeners.js";

const listeners = {
  currentPlayer: currentPlayerListeners,
  gameInfo: gameInfoListeners,
  playerList: playerListListeners,
  settings: settingsListeners
}

export {listeners};

// DISPATCHERS
// current player dispatchers
import rollDiceDispatcher from "./action_dispatchers/current_player_dispatchers/rollDiceDispatcher.js";
import saveDieDispatcher from "./action_dispatchers/current_player_dispatchers/saveDieDispatcher.js";

export {rollDiceDispatcher, saveDieDispatcher};

// game info dispatchers

// player list dispatchers

// settings dispatchers

// ACTION CREATORS
// // current player action creators
// import rollDiceAction from "./action_creators/current_player_action_creators/rollDiceAction.js";
// // import moveSavedDiceToArrayStartAction from "./action_creators/current_player_action_creators/moveSavedDiceToArrayStartAction.js";
// import decrementRollsRemainingAction from "./action_creators/current_player_action_creators/decrementRollsRemainingAction.js";
// import autoSaveGrenadesAction from "./action_creators/current_player_action_creators/autoSaveGrenadesAction.js";
// import threeGrenadesDisableRollAction from "./action_creators/current_player_action_creators/threeGrenadesDisableRollAction.js";

// import toggleDieSaveStatusAction from "./action_creators/current_player_action_creators/toggleDieSaveStatusAction.js";
// import updateActionCountersAction from "./action_creators/current_player_action_creators/updateActionCountersAction.js";
// import rollUnsavedDiceAction from "./action_creators/current_player_action_creators/rollUnsavedDiceAction.js";


// export {rollDiceAction, decrementRollsRemainingAction, autoSaveGrenadesAction, threeGrenadesDisableRollAction, toggleDieSaveStatusAction, updateActionCountersAction, rollUnsavedDiceAction};

// // game info action creators
// import incrementDiceRolledAction from "./action_creators/game_info_action_creators/incrementDiceRolledAction.js";

// export {incrementDiceRolledAction};

// // player list action creators
// import threeGrenadesDamageAction from "./action_creators/player_list_action_creators/threeGrenadesDamageAction.js";

// export {threeGrenadesDamageAction};

// settings action creators

//// REACT
// CONTAINER COMPONENTS

import AppContainer from "./components/AppContainer.jsx";
import CurrentPlayerContainer from "./components/current_player/CurrentPlayerContainer.jsx";
import GameInfoContainer from "./components/game_info/GameInfoContainer.jsx";
import PlayerListContainer from "./components/player_list/PlayerListContainer.jsx";
import SettingsContainer from "./components/settings/SettingsContainer.jsx";
// import {DiceContainer} from "./components/dice/DiceContainer.jsx";
// import {PlayerInfoContainer} from "./components/player_info/PlayerInfoContainer.jsx";
// import {SharedResourceContainer} from "./components/shared_resource/SharedResourceContainer.jsx";

export {AppContainer, CurrentPlayerContainer, GameInfoContainer, PlayerListContainer, SettingsContainer};


//// REACT
// PRESENTATION COMPONENTS

// might be simpler to import these in their relevent Containers
// as there will be many of them, and they will only be relevent to their Container, so centralising them in this file doesn't make much sense and would invole a much more complex import PATH than in the Container Component file.




