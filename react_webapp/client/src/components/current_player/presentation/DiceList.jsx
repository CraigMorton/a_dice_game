import React from "react";

const DiceList = ({
diceArray,
onDieClick
}) => {
  const diceElementsArray = diceArray.map((item, index) => (<li
    id={index}
    key={index}
    value={item.value}
    onClick={(item.value !== 0 && item.value !== 5) ? onDieClick : null}
    style={{backgroundColor: (item.saved) ? "cyan" : "orange"}}
    >die value: {item.value}
    </li>));
  return(
    <ul>
    {diceElementsArray}
    </ul>
  )
}

export default DiceList;