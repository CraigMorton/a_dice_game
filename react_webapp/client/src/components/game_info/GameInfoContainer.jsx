import React from "react";
import {DiceRolledCounter} from "./presentation/DiceRolledCounter.jsx";
import {TurnsPlayedCounter} from "./presentation/TurnsPlayedCounter.jsx";
import {SharedResource} from "./presentation/SharedResource.jsx";

export default ({
  state,
  listeners
})=>(
<div className="react-container">
<h5>GameInfoContainer</h5>
<DiceRolledCounter state={state.diceRolledCount} />
<TurnsPlayedCounter count={state.turnsPlayedCount} />
<SharedResource count={state.sharedResource.count} maximum={state.sharedResource.max} />
</div>
)


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
