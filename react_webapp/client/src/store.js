import {createStore, combineReducers} from "redux";
import currentPlayerReducer from "./reducers/currentPlayerReducer.js";
import gameInfoReducer from "./reducers/gameInfoReducer.js";
import playerListReducer from "./reducers/playerListReducer.js";
import settingsReducer from "./reducers/settingsReducer.js";
import globalReducerCreator from "./reducers/globalReducerCreator.js";

const previousState = undefined // get this from database when saving game is implemented

const combinedReducer = combineReducers({
  currentPlayer: currentPlayerReducer,
  gameInfo: gameInfoReducer,
  playerList: playerListReducer,
  settings: settingsReducer,
})

const globalReducer = globalReducerCreator(combinedReducer);
const store = createStore(globalReducer, previousState, window.devToolsExtension ? window.devToolsExtension() : undefined);

export default store;
