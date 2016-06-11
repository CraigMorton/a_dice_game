import store from "../../store.js"
import {toggleTargetPlayer} from "../../action_creators/playerListActions.js";

const targetPlayerDispatcher = (id) => {
  store.dispatch(toggleTargetPlayer(id))
}

export default targetPlayerDispatcher;