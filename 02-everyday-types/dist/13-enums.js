"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["right"] = 4] = "right";
})(Direction || (Direction = {}));
console.log(Direction.up);
console.log(Direction.Down);
