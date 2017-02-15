// @flow
import React from 'react';
import {render} from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import routes from "./routes";
import configureStore from "./store";
import { syncHistoryWithStore } from "react-router-redux";
import type { State } from './initialState';

if (process.env.BROWSER) {
    require("./shared/style/base.scss");
}

const preloadedState : State = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>, document.getElementById("app")
);