import React from 'react';
import { Route, IndexRoute } from 'react-router';

const rootRoute = {
    childRoutes: [ {
        path: '/',
        component: require('./shared/components/App'),
        childRoutes: [
            /*require('./routes/Calendar')        */
        ]
    } ]
};

/* https://github.com/ReactTraining/react-router/tree/master/examples/huge-apps */

export default rootRoute;