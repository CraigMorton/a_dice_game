import React from "react";

const RollDiceButton = ({
// props here (as named params?)
  listener,
  status,
  content
}) => {
  return(
<button onClick={status ? listener : null}
style={{backgroundColor: status ? "green" : "red"}}
>{content}</button>
)
}

export {RollDiceButton};

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