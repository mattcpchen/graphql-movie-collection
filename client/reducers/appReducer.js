import { combineReducers } from 'redux';
import loadedStateReducer from './loadedStateReducer';
import moviesReducer from './moviesReducer';
import categoryReducer from './categoryReducer';
import collectionReducer from './collectionReducer';



const appReducer = combineReducers({
  isLoaded: loadedStateReducer,
  category: categoryReducer,
  movies: moviesReducer,
  collectionCount: collectionReducer
});



export default appReducer;