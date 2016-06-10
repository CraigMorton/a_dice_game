import store from "../../store.js";
import {toggleDieSaveStatus} from "../../action_creators/currentPlayerActions.js";

const saveDieDispatcher = (id) => {
  store.dispatch(toggleDieSaveStatus(id))
}

export default saveDieDispatcher;