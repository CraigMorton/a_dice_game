import currentPlayerListeners from "./currentPlayerListeners.js";
import gameInfoListeners from "./gameInfoListeners.js";
import playerListListeners from "./playerListListeners.js";
import settingsListeners from "./settingsListeners.js";

const listeners = {
  currentPlayer: currentPlayerListeners,
  gameInfo: gameInfoListeners,
  playerList: playerListListeners,
  settings: settingsListeners
}

export default listeners;