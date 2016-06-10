import {store} from "../../exports.js";
import {toggleDieSaveStatusAction} from "../../exports.js";

const saveDieDispatcher = (id) => {
  store.dispatch(toggleDieSaveStatusAction(id))
}

export default saveDieDispatcher;