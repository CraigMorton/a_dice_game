import React from "react";
import {DiceRolledCounter} from "./presentation/DiceRolledCounter.jsx";
import {TurnsPlayedCounter} from "./presentation/TurnsPlayedCounter.jsx";

const StatsContainer = ({
  state,
  listeners
})=>(
<div className="react-container">
<h5>StatsContainer</h5>
<DiceRolledCounter state={state.diceRolledCount}/>
<TurnsPlayedCounter count={state.turnsPlayedCount} />
</div>
)

export {StatsContainer};


// var StatsContainer = React.createClass({
//   contextTypes: {store: React.PropTypes.object},
//   render: function(){
//     // destructuring objects syntax
//     // {keyNameInSourceObject: variableNameToCreate} = sourceObject;
//     const {store: store} = this.context;
//     const {stats: state} = store.getState();
//     return(
//       <div>
//         <DiceRolledCounter count={state.diceRolledCount}/>
//       </div>
//     );
//   }
// })

// module.exports = StatsContainer;
