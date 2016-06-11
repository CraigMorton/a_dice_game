import store from "./store.js";

const getDefaultState = () => {
  let settings = null;
  if (store){
    settings = store.getState().settings;
  }
  const state = {
    // implemented as default parameters on each reducer
    currentPlayer: {
      dice: [], // ARRAY LENGTH SETTINGS-DEPENDANT
      actionCounters: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0},
      minigunAvailable: true,
      rollsRemaining: 3,
      canRoll: true,
      targettedPlayerId: null
    },
    gameInfo: {
      sharedResource: {count: null, max: null}, // VALUES SETTINGS-DEPENDANT
      gameWinner: null,
      diceRolledCount: 0,
      turnsPlayedCount: 0
    },
    playerList: [], // ARRAY LENGTH SETTINGS-DEPENDANT
    settings: settings ? settings : {numDice: 5, sharedResourceMax: 9, numPlayers: 8, playerMaxHealth: 8}
  };

  state.gameInfo.sharedResource.count = state.settings.sharedResourceMax;
  state.gameInfo.sharedResource.max = state.settings.sharedResourceMax;

  state.currentPlayer.dice = [];
  for (let i = 0; i < state.settings.numDice; i++){
    state.currentPlayer.dice[i] = {value: 0, saved: false};
  }

  state.playerList = [];
  for (let i = 0; i < state.settings.numPlayers; i++){
    state.playerList[i] = {player_id: i, health: state.settings.playerMaxHealth, maxHealth: state.settings.playerMaxHealth, sharedResource: 0, isDead: false};
  }
  return state;
}

export default getDefaultState;
// export default state;