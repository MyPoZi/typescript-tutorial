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
function test3() {
    var myObject = {
        foo: ''
    };
    var anotherObject = { foo: '' };
    anotherObject['foo'] = 'value';
    // anotherObject['foo'] = 1 // Error
    // anotherObject['bar'] = 'value' // Error!
    console.log(myObject);
}
exports.test3 = test3;
function keyofTest() {
    var myObject = {
        foo: 'FOO',
        bar: 'BAR',
        baz: 'BAZ'
    };
    var someKey;
    someKey = 'foo';
    var myObjectKey;
    myObjectKey = 'bar';
    myObjectKey = 'foo';
    // myObjectkey = 'qux' // Error!
}
exports.keyofTest = keyofTest;
function Color2Code(color) {
    switch (color) {
        case 0 /* RED */:
            return '#e74c3c';
            break;
        case 1 /* BLUE */:
            return '#3498db';
            break;
        case 2 /* YELLOW */:
            return '#f1c40f';
            break;
        case 3 /* GREEEN */:
            return '#1abc9c';
            break;
        default: return '#000000';
    }
}
exports.Color2Code = Color2Code;
console.log(Color2Code(0 /* RED */)); // enumで型を宣言してあるため、補完として出る。また、文字列より間違いが少ない。
console.log("#e74c3c" /* RED */); // これで良くない・・・？？
function ColorString2Code(color) {
    switch (color) {
        case 'RED':
            return "#e74c3c" /* RED */;
        case 'BLUE':
            return "#3498db" /* BLUE */;
        default:
            return "#000000" /* BLACK */;
    }
}
exports.ColorString2Code = ColorString2Code;
