// @flow
import {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createLogger from 'redux-logger';
import rootReducer from "./reducers";
import thunkMiddleware from 'redux-thunk';

import type { State } from './initialState';

export default function configureStore(initialState : State) : Object {

    let middlewares : Object[] = [
        thunkMiddleware
    ];

    if (process.env.NODE_ENV !== "production") {
        middlewares.push(reduxImmutableStateInvariant());
        middlewares.push(createLogger());
    }

    const store : Object = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    return store;
}