"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sample_1 = require("./sample");
var a = sample_1.sampleText;
var b = sample_1.sampleFunction();
function test(arg) {
    return arg;
}
exports.test = test;
function test2() {
    return { value: 'test2' };
}
exports.test2 = test2;
