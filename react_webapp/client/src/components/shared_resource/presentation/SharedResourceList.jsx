import React from "react";
// import {SharedResourceListItem} from "./SharedResourceListItem.jsx";

const SharedResourceList = ({
  count,
  maximum
}) => {
  return(
    <div>
    <text>Arrow Pile: {count}</text>
    <p>Maximum: {maximum}</p>
    </div>)
}

export {SharedResourceList};