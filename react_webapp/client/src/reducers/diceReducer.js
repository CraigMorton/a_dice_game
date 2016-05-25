// import {store} from "../exports.js"
// VM128289:1311 Uncaught Error: Reducers may not dispatch actions.

const diceReducer = (state = {}, action)=>{
  const mapActionStringToActionDispatchCall = {
    // "@@INIT": () => state,
    "TOGGLE_DIE_SAVE_STATUS": () => {
      // console.log("action object in reducer:", action);
      const index = action.id;
      const diceArray = state.diceArray;
      // console.log("dice array:", diceArray);
      const die = diceArray[index];
      // console.log("to save/unsave:", die);
      const newDie = Object.assign({}, die, {saved: !die.saved});
      // console.log("with toggled save status:", newDie);
      // // const newDiceArraySLICED = diceArray.slice(0, index).concat(newDie).concat(diceArray.slice(index + 1));
      // // console.log(newDiceArraySLICED);
      // console.log("array pre-target element:", ...diceArray.slice(0, index));
      // console.log("target element:", newDie);
      // console.log(diceArray);
      // console.log(index);
      // console.log(index+1);
      // console.log(diceArray.slice(index+1));
      // console.log("array post-target element:", ...diceArray.slice(index + 1));
      // THAT was a long bug-hunt - the action.id, coming from the e.target.id (which isn't really the react way to get the id - maybe refs would be better)
      // was coming straight from the HTML, even though I put a Number into the HTML element, it become a string in HTML land. "1"+ 1 = 11     diceArray.slice(11) = []. 
      const newDiceArray = [ ...diceArray.slice(0, index), newDie, ...diceArray.slice((index + 1)) ];
      // for (let i = 0; i < newDiceArray.length; i++){
      //   console.log("new array item " + i +" :", newDiceArray[i]);
      // }
      console.log("new array after save toggle:", newDiceArray);
      return Object.assign({}, state, {diceArray: newDiceArray})
    },
    "ROLL_UNSAVED_DICE": () => {
      let newArray = state.diceArray.map((die)=>{
        if (die.saved) return die;
        let value = Math.floor(Math.random()*6 + 1)
        return Object.assign({}, die, {value: value})
      })
      return Object.assign({}, state, {diceArray: newArray});
    },
    "DECREMENT_ROLLS_REMAINING": () => {
      if (state.rollsRemaining > 1) return Object.assign({}, state, {rollsRemaining: state.rollsRemaining - 1});
      if (state.rollsRemaining <= 1) return Object.assign({}, state, {rollsRemaining: 0, canRoll: false});
    }
  }// [end] mapActionStringToActionDispatchCall
  if (mapActionStringToActionDispatchCall[action.type]) return mapActionStringToActionDispatchCall[action.type]();
  return state;
}

export {diceReducer};