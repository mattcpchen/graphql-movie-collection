import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loadedStateReducer from './loadedStateReducer';
import moviesReducer from './moviesReducer';
import collectionReducer from './collectionReducer';



const appReducer = combineReducers({
  routing: routerReducer,
  isLoaded: loadedStateReducer,
  movies: moviesReducer,
  collectionCount: collectionReducer
});



export default appReducer;