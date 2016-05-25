import React from "react";
import {SharedResourceListItem} from "./SharedResourceListItem.jsx";

const SharedResourceList = ({
  listener,
  status,
  content
}) => {
  return(
    <div>
    <text>SharedResourceList</text>
    <SharedResourceListItem />
    </div>)
}

export {SharedResourceList};