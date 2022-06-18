"use strict";
function printCoord(pt) {
}
printCoord({
    x: 100,
    y: 200
});
function printIds(id) {
}
printIds(100);
printIds('hello');
function sanitizedInput(str) {
    return str.slice(0, 2);
}
let userInput = sanitizedInput('hello');
userInput = 'new Input';
