import React from "react";

const EndTurnButton = ({
  listener,
  enabled,
  label
}) => {
  return(<button
    onClick={(enabled) ? listener : null}
    style={{backgroundColor: enabled ? "green" : "red"}}
    >{label}
    </button>)
}

export {EndTurnButton};