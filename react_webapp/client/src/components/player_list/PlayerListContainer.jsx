import React from "react";
// import {PresentationComponent} from "./presentation/PresentationComponent.jsx";

const PlayerListContainer = ({
  state,
  listeners
}) => {
  return(
    <div className="react-container">
    <h5>PlayerListContainer</h5>
    <button valueOfStateNeeded={state.valueOfStateNeeded} listenerNeeded={listeners.listenerNeeded}/>
    </div>
    )
}

export {PlayerListContainer};