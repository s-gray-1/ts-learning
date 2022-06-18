"use strict";
let x2 = undefined;
let y = null;
// let z:string=undefined
function doSomething(x1) {
    if (x1 === null) {
        // 做一些事情
    }
    else {
        console.log('hello ' + x1.toUpperCase());
    }
}
function liveDangerously(x1) {
    // !断言不可能是 null 和 undefined
    console.log(x1.toFixed());
}
