import React from "react";

const RollDiceButton = ({
  listener,
  enabled,
  label
}) => {
  return(
<button onClick={enabled ? listener : null}
style={{backgroundColor: enabled ? "green" : "red"}}
>{label}</button>
)
}

export default RollDiceButton;

  // , {state: }
  // console.log(store);
  // console.log(store.getState());
// var React = require('react');

// var RollDiceButton = React.createClass({
//   render: function(){
//     console.log("listener in RollDiceButton", this.props.clickAction);
//     return(
//       <div>
//         <button onClick={this.props.clickAction}>roll dice</button>
//       </div>
//     );
//   }
// })



// RollDiceButton.contextTypes = {
//   store: React.PropTypes.object
// }


// module.exports = RollDiceButton;