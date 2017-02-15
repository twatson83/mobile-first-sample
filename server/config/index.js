// @flow
module.exports = (function (env : any) : Object {
    var config : Object = {};
    switch (env) {
        case 'development':
            config = require('./development');
            break;
        default:
            console.error('NODE_ENV environment variable not set');
            process.exit(1);
    }

    return config;
})(process.env.NODE_ENV);