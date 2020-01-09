/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
// import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import thunk from 'redux-thunk'
// const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  //const middlewares = [thunk, routerMiddleware(history)];

  //const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  // const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  //     // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
  //     // Prevent recomputing reducers for `replaceReducer`
  //     shouldHotReload: false
  //   })
  //   : compose;
  /* eslint-enable */
 //, applyMiddleware(thunk)
  const store = createStore(createReducer(), initialState, applyMiddleware(thunk,routerMiddleware(history))); //composeEnhancers(...enhancers)

  // Extensions
  
  store.injectedReducers = {}; // Reducer registry
  
  /* istanbul ignore next */
  // if (module.hot) {
  //   module.hot.accept('./reducers', () => {
  //     store.replaceReducer(createReducer(store.injectedReducers));
  //     store.dispatch({ type: '@@REDUCER_INJECTED' });
  //   });
  // }

  return store;
}
