// import {createClass} from "react";

////////////////////////////////////////////////////////////////
// THIS EXPORTS AGGREGATION FILE ONLY WORKS IF:               //
// You export from this file using es5 module.exports syntax, //
// and import in usage files using:                           //
// const importName = require("PATH").exportName;             //
// es5 syntax (although const is fine)                        //
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
// export {currentPlayerReducer};
// module.exports.currentPlayerReducer = currentPlayerReducer;
// import {diceReducer} from "./reducers/diceReducer.js";
// export {diceReducer};
// module.exports.diceReducer = diceReducer;
// import {playerInfoReducer} from "./reducers/playerInfoReducer.js";
// export {playerInfoReducer};
// module.exports.playerInfoReducer = playerInfoReducer;
// import {playerListReducer} from "./reducers/playerListReducer.js";
// export {playerListReducer};
// module.exports.playerListReducer = playerListReducer;
// import {settingsReducer} from "./reducers/settingsReducer.js";
// export {settingsReducer};
// module.exports.settingsReducer = settingsReducer;
// import {sharedResourceReducer} from "./reducers/sharedResourceReducer.js";
// export {sharedResourceReducer};
// module.exports.sharedResourceReducer = sharedResourceReducer;
// import {statsReducer} from "./reducers/statsReducer.js";
// export {statsReducer};
// module.exports.statsReducer = statsReducer;
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
// export {store as store};
export {store};
// export {store as store} from "./store.js"
// console.log(store);
// module.exports.store = store;
// export {store} from "./store.js";




// LISTENERS
import {currentPlayerListeners} from "./listeners/currentPlayerListeners.js";
import {diceListeners} from "./listeners/diceListeners.js";
import {playerInfoListeners} from "./listeners/playerInfoListeners.js";
import {playerListListeners} from "./listeners/playerListListeners.js";
import {settingsListeners} from "./listeners/settingsListeners.js";
import {sharedResourceListeners} from "./listeners/sharedResourceListeners.js";
import {statsListeners} from "./listeners/statsListeners.js";

const listeners = {
  dice: diceListeners,
  stats: statsListeners
}

export {listeners};



//// REACT
// CONTAINER COMPONENTS
import {AppContainer} from "./components/AppContainer.jsx";
export {AppContainer};
// export {AppContainer: AppContainer};
import {CurrentPlayerContainer} from "./components/current_player/CurrentPlayerContainer.jsx";
module.exports.CurrentPlayerContainer = CurrentPlayerContainer;
import {DiceContainer} from "./components/dice/DiceContainer.jsx";
// console.log(DiceContainer);
export {DiceContainer};
// module.exports.DiceContainer = DiceContainer;
import {PlayerInfoContainer} from "./components/player_info/PlayerInfoContainer.jsx";
module.exports.PlayerInfoContainer = PlayerInfoContainer;
import {PlayerListContainer} from "./components/player_list/PlayerListContainer.jsx";
module.exports.PlayerListContainer = PlayerListContainer;
import {SettingsContainer} from "./components/settings/SettingsContainer.jsx";
module.exports.SettingsContainer = SettingsContainer;
import {SharedResourceContainer} from "./components/shared_resource/SharedResourceContainer.jsx";
module.exports.SharedResourceContainer = SharedResourceContainer;
import {StatsContainer} from "./components/stats/StatsContainer.jsx";
module.exports.StatsContainer = StatsContainer;


//// REACT
// PRESENTATION COMPONENTS

// might be simpler to import these in their relevent Containers
// as there will be many of them, and they will only be relevent to their Container, so centralising them in this file doesn't make much sense and would invole a much more complex import PATH than in the Container Component file.




