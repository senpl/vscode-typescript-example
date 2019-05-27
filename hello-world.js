"use strict";
exports.__esModule = true;
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.hello = function (message) {
        // Your code here
        // console.log()
        if (message === void 0) { message = "World"; }
        return "Hello, " + message + "!";
    };
    return HelloWorld;
}());
console.log("W");
exports["default"] = HelloWorld;
