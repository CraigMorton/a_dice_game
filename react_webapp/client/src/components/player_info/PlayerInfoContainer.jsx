import React from "react";
// import {PresentationComponent} from "./presentation/PresentationComponent.jsx";

const PlayerInfoContainer = ({
  state,
  listeners
}) => {
  return(
    <div className="react-container">
    <h5>PlayerInfoContainer</h5>
    <button valueOfStateNeeded={state.valueOfStateNeeded} listenerNeeded={listeners.listenerNeeded}/>
    </div>
    )
}

export {PlayerInfoContainer};