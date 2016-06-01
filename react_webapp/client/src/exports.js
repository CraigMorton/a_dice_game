// import {createClass} from "react";

////////////////////////////////////////////////////////////////
// THIS EXPORTS AGGREGATION FILE ONLY WORKS IF:               //
// You export from this file using es5 module.exports syntax, //
// and import in usage files using:                           //
// const importName = require("PATH").exportName;             //
// es5 syntax (although const is fine)                        //
////////////////////////////////////////////////////////////////
// MATCH `import { namedImport }` TO `export { constName }`   //
// DO NOT MIX UP DEFAULT AND NAMED IMPORTS / exports          //
////////////////////////////////////////////////////////////////

//// JS
// MODELS
import {jsonApiHelper,apiGet, apiPost} from "./models/jsonApiHelper.js";
export {apiGet, apiPost, jsonApiHelper};









// module.exports.apiGet = apiGet;
// module.exports.apiPost = apiPost;
// module.exports.jsonApiHelper = jsonApiHelper;

// export {apiGet, apiPost, jsonApiHelper};

//// REDUX

// NEED reducers to create store - can't route them through this file or createStore gets called too early
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
import {playerListListeners} from "./listeners/playerListListeners.js";
import {settingsListeners} from "./listeners/settingsListeners.js";

const listeners = {
  currentPlayer: currentPlayerListeners,
  gameInfo: gameInfoListeners,
  playerList: playerListListeners,
  settings: settingsListeners
}

export {listeners};



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




