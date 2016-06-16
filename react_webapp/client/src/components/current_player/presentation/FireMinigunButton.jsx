import React from "react";

const FireMinigunButton = ({
  minigunAvailable,
  onFireMinigunClick
}) => {
  let id = 0
  if (minigunAvailable) id = 1;
  return <button id={id} onClick={onFireMinigunClick}>Fire Minigun!</button>
}

export default FireMinigunButton;