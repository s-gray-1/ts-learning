"use strict";
const one = BigInt(100);
const two = 100n;
const first = Symbol('name');
const second = Symbol('name');
if (first === second) {
    console.log('true');
}
else {
    console.log('false');
}
