import * as actions from "./actionTypes";

let lastId = 1 //this is for tracking IDs

export default function reducer(state = [], action) {
  if (action.type === actions.BUG_ADDED) {
    return [
      ...state,
      {
        id: lastId++,
        description: action.payload.description,
        resolved: false
      }
    ];
  } else if (action.type === actions.BUG_REMOVED) {
    return state.filter(bug => bug.id !== action.payload.id)
  } else if (action.type === actions.BUG_RESOLVED) {
    return state.map(bug => bug.id === action.payload.id ? resolveBug(bug) : bug)
  } else {
    return state;
  }
}

function resolveBug(bug) {
  return { ...bug, resolved: true }
}