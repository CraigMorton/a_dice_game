// const currentPlayerReducer = 
// export default 
export default (state = {}, action)=>{
  const actionToNewState = {
    "ROLL_DICE": () => {
      let newDice = []
      for (let i = 0; i < state.dice.length; i++){
        let saved;
        for (let j=0; j < action.savedDiceIds.length; j++){
          if (i === action.savedDiceIds[j]) saved = true;
        }

        if (saved){
          newDice[i] = state.dice[i];
        } else {
          let value = Math.floor(Math.random()*6 + 1)
          let autoSave = false
          // if (value === 5) autoSave = true
          newDice[i] = {value: value, saved: autoSave} 
        }
      }
      return {...state, dice: newDice}
    },
    "DECREMENT_ROLLS_REMAINING": () => {
      if (state.rollsRemaining > 1) return Object.assign({}, state, {rollsRemaining: state.rollsRemaining - 1});
      if (state.rollsRemaining <= 1) return Object.assign({}, state, {rollsRemaining: 0, canRoll: false});
    },
    // ABOVE ACTIONS HAVE BEEN REFACTORED INTO ACTION CREATORS AND DISPATCHERS
    // //////////////////////////////////////////////////// //////////////////////////////////////////////////
    // "ROLL_UNSAVED_DICE": () => {

    //   let newArray = state.dice.map((die)=>{
    //     if (die.saved) return die;
    //     let value = Math.floor(Math.random()*6 + 1)
    //     // return Object.assign({}, die, {value: value})
    //     return { ...die, value: value}
    //   })
    //   return Object.assign({}, state, {dice: newArray});
    // },
    // "MOVE_SAVED_DICE_TO_DICE_ARRAY_START": () => {
    //   let newDice = state.dice.slice();
    //   for (let i = 0; i < action.savedDiceIds.length; i++){
    //     newDice[i] = state.dice[savedDiceIds[i]]
    //     newDice[savedDiceIds[i]] = state.dice[i]
    //   }
    //   return {...state, {dice: newDice}}
    // },
    // could integrate this action into "ROLL_DICE" action
    "AUTO_SAVE_GRENADES": () => {
      const newArray = state.dice.map((item, index)=>{
        if (item.value === 5) return {...item, saved: true};
        return item;
      })
      return Object.assign({}, state, {dice: newArray})
    },
    "TOGGLE_DIE_SAVE_STATUS": () => {
      const index = action.id;
      const diceArray = state.dice;
      const die = diceArray[index];
      const newDie = Object.assign({}, die, {saved: !die.saved});
      const newDiceArray = [ ...diceArray.slice(0, index), newDie, ...diceArray.slice((index + 1)) ];
      return Object.assign({}, state, {dice: newDiceArray})
    },
    "THREE_GRENADES_DISABLE_ROLL": () => {
      let grenadeCount = 0;
      state.dice.forEach((item) => {if (item.value === 5) grenadeCount++})
      if (grenadeCount >= 3){
        return Object.assign({}, state, {canRoll: false, rollsRemaining: 0});
      }
      return state;
    },
    "RESET_CURRENT_PLAYER_FOR_NEXT_TURN": () => {
      return Object.assign({}, state, {
        dice:[{value: 0, saved: false}, {value: 0, saved: false}, {value: 0, saved: false}, {value: 0, saved: false}, {value: 0, saved: false}],
        actionCounters: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0},
        minigunAvailable: true,
        rollsRemaining: 3,
        canRoll: true
      })
    },
    "UPDATE_ACTION_COUNTERS": () => {
      let newActionCounters = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
      action.diceValuesArray.forEach((item, index)=>{
        newActionCounters[item]++
      });
      return Object.assign({}, state, {actionCounters: newActionCounters})
    },
    "THREE_GRENADES_DAMAGE": () => {
      if (state.actionCounters[5] >= 3){
        return Object.assign({}, state, {health: state.health - 1})
      }
      return state;
    }
  }

  if (actionToNewState[action.type]) return actionToNewState[action.type]();
  return state;
}

// module.exports = currentPlayerReducer;




// import {store} from "../exports.js"
// VM128289:1311 Uncaught Error: Reducers may not dispatch actions.

// const diceReducer = (state = {}, action) => {
//   const actionToNewState = {
    // "@@INIT": () => state,
    // "TOGGLE_DIE_SAVE_STATUS": () => {
    //   // console.log("action object in reducer:", action);
    //   const index = action.id;
    //   const diceArray = state.dice;
    //   // console.log("dice array:", diceArray);
    //   const die = diceArray[index];
    //   // console.log("to save/unsave:", die);
    //   const newDie = Object.assign({}, die, {saved: !die.saved});
    //   // console.log("with toggled save status:", newDie);
    //   // // const newDiceArraySLICED = diceArray.slice(0, index).concat(newDie).concat(diceArray.slice(index + 1));
    //   // // console.log(newDiceArraySLICED);
    //   // console.log("array pre-target element:", ...diceArray.slice(0, index));
    //   // console.log("target element:", newDie);
    //   // console.log(diceArray);
    //   // console.log(index);
    //   // console.log(index+1);
    //   // console.log(diceArray.slice(index+1));
    //   // console.log("array post-target element:", ...diceArray.slice(index + 1));
    //   // THAT was a long bug-hunt - the action.id, coming from the e.target.id (which isn't really the react way to get the id - maybe refs would be better)
    //   // was coming straight from the HTML, even though I put a Number into the HTML element, it become a string in HTML land. "1"+ 1 = 11     diceArray.slice(11) = []. 
    //   const newDiceArray = [ ...diceArray.slice(0, index), newDie, ...diceArray.slice((index + 1)) ];
    //   // for (let i = 0; i < newDiceArray.length; i++){
    //   //   console.log("new array item " + i +" :", newDiceArray[i]);
    //   // }
    //   // console.log("new array after save toggle:", newDiceArray);
    //   return Object.assign({}, state, {dice: newDiceArray})
    // },
  // }// [end] actionToNewState
  // if (actionToNewState[action.type]) return actionToNewState[action.type]();
  // return state;
// }
