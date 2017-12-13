import {createStore,applyMiddleware,compose } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store =applyMiddleware(thunk,promise,logger)(createStore)(reducers);

//let store = createStore(reducers,composeEnhancers(applyMiddleware(thunk,promise,logger)));
window.store = store;
export default store;