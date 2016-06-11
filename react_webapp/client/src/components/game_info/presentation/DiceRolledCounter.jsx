import React from "react";

const DiceRolledCounter = ({
  state,
  listeners
}) => (<h4>Dice Rolled: {state}</h4>)

export default DiceRolledCounter;

// export default () => (<div>{this.props.count}</div>)
// var DiceRolledCounter = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h4>Dice rolled: {this.props.count}</h4> 
//       </div>
//     );
//   }
// })
// var React = require('react');


//if using the export default syntax - you must import without {}, as it is default, not named export
// export default ({state, listeners}) => (<h4>Dice Rolled: {state}</h4>);



// const DiceRolledCounter = ({count}) => (<h4>Dice Rolled: {count}</h4>)



// export default function({count}){
//   return(<h4>Dice Rolled: {count}</h4>)
// }

// both of these cause this warning:
// warning.js:44 Warning: React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components). Check the render method of `StatsContainer`.warning @ warning.js:44
// invariant.js:38 Uncaught Invariant Violation: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. Check the render method of `StatsContainer`.
// which actually stops anything from rendering

// export default DiceRolledCounter;
// can only use export default if I import using es6 syntax in StatsContainer.jsx as well - mixing import/eport syntax versions seems to cause a React error - can't figure out why

// module.exports = DiceRolledCounter;