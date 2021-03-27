import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './RootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    RootReducer,
    composeEnhancers(
        applyMiddleware(logger, thunk)
    )
);