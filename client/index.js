import React from 'react';
import {render} from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import routes from "./routes";
import configureStore from "./store";
import { syncHistoryWithStore } from "react-router-redux";


if (process.env.BROWSER) {
    require("./shared/style/base.scss");
}

const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>, document.getElementById("app")
);