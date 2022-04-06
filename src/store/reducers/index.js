import { combineReducers } from "redux";
import counterReducer from './counter';
import jokeReducer from './joke';

export default combineReducers({
    counterReducer,
    jokeReducer,
});