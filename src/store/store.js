import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers/index';

const configureStore = () => {
  const store = createStore(Reducers, applyMiddleware(thunk));
  return store;
};

export default configureStore;
