import React from "react";
// import {PresentationComponent} from "./presentation/PresentationComponent.jsx";

const SettingsContainer = ({
  state,
  listeners
}) => {
  return(
    <div className="react-container">
    <h5>SettingsContainer</h5>
    <button valueOfStateNeeded={state.valueOfStateNeeded} listenerNeeded={listeners.listenerNeeded}/>
    </div>
    )
}

export default SettingsContainer;