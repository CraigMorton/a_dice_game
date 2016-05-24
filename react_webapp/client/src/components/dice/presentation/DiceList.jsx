var React = require('react');

// var DiceList = React.createClass({
//   contextTypes: {store: React.PropTypes.object},
//   render: function(){
//     // destructuring objects syntax
//     // {keyNameInSourceObject: variableNameToCreate} = sourceObject;
//     const {store: store} = this.context;
//     const {dice: state} = store.getState();
//     // console.log(state);
//     var diceElementsArray = [];
//     for (let i = 0; i < state.numDice; i++){
//       diceElementsArray[i] = (<li key={i}><a key={i}>die #{i+1}</a></li>);
//     }
//     return(
//       <ul>
//       {diceElementsArray}
//       </ul>
//     );
//   }
// })

const DiceList = ({
state,
listeners
})=>{
  var diceElementsArray = [];
  for (let i = 0; i < state; i++){
    diceElementsArray.push( (<li key={i}>die #{i+1}</li>) )
  }
  // let ARRAY = diceElementsArray.map( (item, i) => {
  //   return(<li key={i}>die #{i+1}</li>)) }
  // console.log(ARRAY);

  return(
    <ul>
    {diceElementsArray}
    </ul>
  )
}


// store={store.getState()}
// listeners={listeners}

module.exports = DiceList;