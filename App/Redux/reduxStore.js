import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import ReducerF from "./folderReducer";

let reducers = combineReducers({
    ReducerF
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store=store;
export default store;