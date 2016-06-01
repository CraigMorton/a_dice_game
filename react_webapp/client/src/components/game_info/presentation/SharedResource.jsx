import React from "react";

const SharedResource = ({
  count,
  maximum
}) => {
  return(
    <div>
    <text>Arrow Pile: {count}</text>
    <p>Maximum: {maximum}</p>
    </div>)
}

export {SharedResource};