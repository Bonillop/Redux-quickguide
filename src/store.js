import { createStore } from 'redux';
import reducer from './reducer';

//createStore takes a function as an argument which has to be a reducer
const store = createStore(reducer);

export default store;