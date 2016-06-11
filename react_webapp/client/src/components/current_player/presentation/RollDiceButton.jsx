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