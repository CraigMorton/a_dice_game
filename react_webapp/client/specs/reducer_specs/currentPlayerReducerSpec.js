// const assert = require("chai");
import {expect} from "chai";
import currentPlayerReducer from "../../src/reducers/currentPlayerReducer.js";
// const currentPlayerReducer = require("../../src/reducers/currentPlayerReducer.js");

describe("current player Reducer", function(){
  it("should toggle save status of die with given id", function(){
    let action = {type: "TOGGLE_DIE_SAVE_STATUS", id: 0};
    let state = {
        dice: [{value: 3, saved: false}]
    }
    expect(currentPlayerReducer(state, action)).to.deep.equal({
        dice: [{value: 3, saved: true}]
    });
  });

  it("should decrement rolls remaing", function(){
    let action = {type: "DECREMENT_ROLLS_REMAINING"};
    let state = {rollsRemaining: 3}
    expect(currentPlayerReducer(state, action)).to.deep.equal({rollsRemaining: 2});
  });

  it("should save grenades (die value 5)", function(){
    let action = {type: "AUTO_SAVE_GRENADES"}
    let state = {
        dice: [{value: 5, saved: false}, {value: 5, saved: false}]
    }
    expect(currentPlayerReducer(state, action)).to.deep.equal({
        dice: [{value: 5, saved: true}, {value: 5, saved: true}]
    });
  });

  it("should disable roll when 3x grenades are rolled", function(){
    let action = {type: "THREE_GRENADES_DISABLE_ROLL"};
    let stateBefore = {dice:[{value: 5, saved: true}, {value: 5, saved: true}, {value: 5, saved: true}], canRoll: true, rollsRemaining: 2};
    expect(currentPlayerReducer(stateBefore, action)).to.deep.equal({
    dice:[{value: 5, saved: true}, {value: 5, saved: true}, {value: 5, saved: true}], canRoll: false, rollsRemaining: 0
    });
  });

  it("should reset when current player changes", function(){
    let action = {type: "RESET_CURRENT_PLAYER_FOR_NEXT_TURN"};
    let stateBefore = {
        dice:[{value: 3, saved: true}, {value: 3, saved: true}, {value: 3, saved: true}, {value: 1, saved: false}, {value: 1, saved: false}],
        actionCounters: {1: 2, 2: 0, 3: 3, 4: 0, 5: 0, 6: 0},
        minigunAvailable: true,
        rollsRemaining: 0,
        canRoll: false
      };
    expect(currentPlayerReducer(stateBefore, action)).to.deep.equal({
      dice:[{value: 0, saved: false}, {value: 0, saved: false}, {value: 0, saved: false}, {value: 0, saved: false}, {value: 0, saved: false}],
      actionCounters: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0},
      minigunAvailable: true,
      rollsRemaining: 3,
      canRoll: true
    });
  });

  
});
