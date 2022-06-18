"use strict";
let testString = 'hello world';
testString = '前锋大前端';
const constantString = 'hello World';
// constantString=''
let x1 = 'hello';
// x='world'
function printText(s, aligment) { }
printText('hello', 'left');
// printText('hello','center1')
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
}
configure({
    width: 100
});
configure('auto');
// configure('automatic')
let b1 = true;
let b2 = false;
const obj1 = {
    count: 0
};
if (true) {
    obj1.count = 1;
}
function handleRequest(url, method) { }
const req = {
    url: 'https://example',
    method: 'GET'
};
handleRequest(req.url, req.method);
