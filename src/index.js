import store from "./store";
import { bugAdded, bugResolved, bugRemoved} from "./actions";

// Subscribing to the store enables notifications when the store changes, this follows the observable pattern
// this also returns a function for unsubscribing
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
})

// We dispatch the different actions like this. actions MUST HAVE a type property, everything else is optional
store.dispatch(bugAdded("Pepe"));

// if we want to keep tracking the notifications we must not unsubscribe
//unsubscribe();

store.dispatch(bugResolved(1));

store.dispatch(bugRemoved(1));