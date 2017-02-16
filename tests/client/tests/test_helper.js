
import React from 'react-addons';
import chai from 'chai';
import chaiPromise from 'chai-as-promised';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {
    shallow,
    mount,
    render
} from 'enzyme';
require('sinon-as-promised');

import jsdom from 'node-jsdom';

import testData from './data';

// get the window object out of the document
let doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
let win = doc.defaultView;

// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = doc;
global.window = win;

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal(window) {
    for (let key in window) {
        if (!window.hasOwnProperty(key)) {
            continue;
        }
        if (key in global) {
            continue;
        }

        global[key] = window[key];
    }
}

// take all properties of the window object and also attach it to the
// mocha global object
propagateToGlobal(win);

let assert = chai.assert;
let expect = chai.expect;
let {TestUtils} = React.addons;

require('chai').expect;

chai.should();
chai.use(sinonChai);
chai.use(chaiPromise);

export {
    React,
    chai,
    chaiPromise,
    sinon,
    sinonChai,
    assert,
    expect,
    shallow,
    mount,
    render,
    TestUtils,
    testData
};
