import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducer';

const middleware = [thunk];
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_||compose;
const store = createStore(Reducer,{},composeEnhancers(applyMiddleware(...middleware)))
export default store;