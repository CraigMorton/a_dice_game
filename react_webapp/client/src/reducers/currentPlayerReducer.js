import defaultStateGetter from "../defaultState.js";
const defaultState = defaultStateGetter().currentPlayer;

const currentPlayerReducer = (state = defaultState, action)=>{
  const actionToNewState = {
    "REFRESH_CURRENT_PLAYER_DEFAULT_STATE": () => {
      const refreshedState = defaultStateGetter().currentPlayer;
      return Object.assign({}, state, refreshedState)
    },
    "ROLL_UNSAVED_DICE": () => {
      let newArray = state.dice.map((die)=>{
        if (die.saved) return die;
        let value = Math.floor(Math.random()*6 + 1)
        return { ...die, value: value}
      })
      return {...state, dice: newArray};
    },
    "DECREMENT_ROLLS_REMAINING": () => {
      if (state.rollsRemaining > 1) return {...state, rollsRemaining: state.rollsRemaining - 1};
      if (state.rollsRemaining <= 1) return {...state, rollsRemaining: 0, canRoll: false};
    },
    "AUTO_SAVE_GRENADES": () => {
      const newArray = state.dice.map((item, index)=>{
        if (item.value === action.value) return {...item, saved: true, locked: true};
        return item;
      })
      return {...state, dice: newArray }
    },
    "TOGGLE_DIE_SAVE_STATUS": () => {
      const index = action.id;
      const diceArray = state.dice.slice();
      const die = diceArray[index];
      if (die.locked) return state;
      const newDie = {...die, saved: !die.saved};
      const newDiceArray = [ ...diceArray.slice(0, index), newDie, ...diceArray.slice((index + 1)) ];
      return {...state, dice: newDiceArray};
    },
    "UPDATE_ACTION_COUNTERS": () => {
      let newActionCounters = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
      state.dice.forEach((die)=>{
        newActionCounters[die.value]++
      });
      return {...state, actionCounters: newActionCounters}
    },
    "THREE_GRENADES_DISABLE_ROLL": () => {
      if (action.grenadeCount >= 3) return {...state, canRoll: false, rollsRemaining: 0};
      return state;
    },
    "RESET_CURRENT_PLAYER": () => {
      const refreshedState = defaultStateGetter().currentPlayer;
      return refreshedState;
    },
    "TOGGLE_TARGET_PLAYER": () => {
      if (state.targettedPlayerId === action.id) return {...state, targettedPlayerId: null};
      return {...state, targettedPlayerId: action.id};
    },
    "DECREMENT_ACTION_COUNTER": () => {
      const actionUsed = action.counter;
      if (actionUsed > 0){
        const newActionCounter = {}
        newActionCounter[actionUsed] = state.actionCounters[actionUsed] - 1;
        return {...state, actionCounters: Object.assign({}, state.actionCounters, newActionCounter)}
      }
      return state;
    },
    "FIRE_MINIGUN": () => {
      if (action.minigunAvailable === 1) return {...state, minigunAvailable: false, actionCounters: {...state.actionCounters, 4: state.actionCounters[4] - 3}}
      return state;
    },
    "LOCK_DIE": () => {
      if (action.dieId === null) return state;
      const index = action.dieId;
      const diceArray = state.dice.slice();
      const die = diceArray[index];
      const newDie = {...die, locked: true, saved: true};
      const newDiceArray = [ ...diceArray.slice(0, index), newDie, ...diceArray.slice((index + 1)) ];
      return {...state, dice: newDiceArray};
    }
  }
  if (actionToNewState[action.type]) return actionToNewState[action.type]();
  return state;
}
export default currentPlayerReducer;