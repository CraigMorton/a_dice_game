import React from "react";
// import {PresentationComponent} from "./presentation/PresentationComponent.jsx";

const CurrentPlayerContainer = ({
  state,
  listeners
}) => {
  return(
    <div className="react-container">
    <h5>CurrentPlayerContainer</h5>
    <button valueOfStateNeeded={state.valueOfStateNeeded} listenerNeeded={listeners.listenerNeeded}/>
    </div>
    )
}

export {CurrentPlayerContainer};