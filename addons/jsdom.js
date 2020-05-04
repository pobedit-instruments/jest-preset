const {JSDOM} = require('jsdom');

const {window} = new JSDOM('');

global.window = window;
global.document = window.document;

global.navigator = {
    userAgent: 'Mozilla/5.0 (Node)'
};

Object.defineProperties(global, (() => {
    const props = Object.getOwnPropertyNames(window);

    return Array.prototype.map.call(props, (prop) => (
        Object.getOwnPropertyDescriptor(window, prop)
    ));
})());
