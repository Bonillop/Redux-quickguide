// These are the Action creators, helper functions that allow us to just call them with the arguments that we need
// to interact with the store, and they handle de action structure 
import * as actions from "./actionTypes";


// actions MUST HAVE a type property, everything else is optional
export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description: description,
    }
  };
}

export function bugResolved(id) {
  return {
    type: actions.BUG_RESOLVED,
    payload: {
      id //shorthand syntax
    }
  };
}

export function bugRemoved(id) {
  return {
    type: actions.BUG_REMOVED,
    payload: {
      id: id
    }
  };
}