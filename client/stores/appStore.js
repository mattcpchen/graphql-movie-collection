import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/appReducer';



const logger = (store) => (next) => (action) => {
  // console.log('====> ', action);
  next(action);
};


const appStore = createStore(
  reducer,
  applyMiddleware(logger)
);


export default appStore;