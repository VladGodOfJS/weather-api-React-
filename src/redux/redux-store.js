import  {createStore, combineReducers, applyMiddleware } from 'redux';
import homeReducer from './home-reducer';
import profileReducer from './profile-reducer';
import thunkMiddleware from "redux-thunk";



let reducers = combineReducers({
    homePage:homeReducer,
    profilePage:profileReducer,
})
let store = createStore(reducers,applyMiddleware(thunkMiddleware));
export default store;