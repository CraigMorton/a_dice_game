import React from "react";
import DiceRolledCounter from "./presentation/DiceRolledCounter.jsx";
import TurnsPlayedCounter from "./presentation/TurnsPlayedCounter.jsx";
import SharedResource from "./presentation/SharedResource.jsx";

const GameInfoContainer = ({
  state,
  listeners
})=>(
<div className="react-container">
<DiceRolledCounter state={state.diceRolledCount} />
<TurnsPlayedCounter count={state.turnsPlayedCount} />
<SharedResource count={state.sharedResource.count} maximum={state.sharedResource.max} />
</div>
)

export default GameInfoContainer;