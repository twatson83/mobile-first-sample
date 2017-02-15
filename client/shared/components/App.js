// @flow
import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props : Object) => {
    return (
        <div>
            <h1>App</h1>
        </div>
    );
};

App.propTypes = {
    children: PropTypes.element
};

export default App;