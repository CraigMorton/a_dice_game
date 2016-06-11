import React from "react";

const CurrentPlayerActionCounters = ({
  actions
}) => {
  return(
    <div>
    <text>Shoot 1: {actions[1]} | Shoot 2: {actions[2]} | Heal: {actions[3]} | Minigun: {actions[4]} | Grenades: {actions[5]}</text>
    </div>)
}

export default CurrentPlayerActionCounters;