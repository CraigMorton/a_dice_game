import React from "react";

const CurrentPlayerHealth = ({
  status,
  health,
  maxHealth
}) => {
  const healthPercentage = health/maxHealth * 100;
  let healthColour = "green"
  if (healthPercentage < 66) healthColour = "orange";
  if (healthPercentage < 33) healthColour = "red";
  if (healthPercentage === 0) healthColour = "black";
  return(
    <div>
    <text style={{color: healthColour}}>{(health > 0) ? "Health: " + health + "/" + maxHealth : "Dead"}</text>
    </div>)
}

export default CurrentPlayerHealth;