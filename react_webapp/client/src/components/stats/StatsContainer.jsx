var React = require('react');
// const DiceRolledCounter = require("./presentation/DiceRolledCounter");

import DiceRolledCounter from "./presentation/DiceRolledCounter";

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

const StatsContainer = ({
  state,
  listeners
})=>(
<div>
  <DiceRolledCounter state={state.diceRolledCount}/>
</div>
  )

// module.exports = StatsContainer;
export {StatsContainer};