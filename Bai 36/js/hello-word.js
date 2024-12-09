"use strict";
//Phần 1
var hello = "Hello World!";
console.log(hello);
//Phần 3
//3.1. Kiểu number
let a = 10;
let b = 10.5;
//a = "xin chao"; lỗi không thể gán kiểu string cho biến kiểu number trong TypeScript
a = 20; //không lỗi vì a là kiểu number và giá trị gán cho a cũng là kiểu number
console.log(typeof a);
console.log(typeof b);
//3.2. Kiểu string
let fullName = "Nguyen Van A";
fullName = "Le Van A";
console.log(fullName);
console.log(typeof fullName);
//3.3. Kiểu boolean
let deleted = false;
deleted = true;
console.log(deleted);
console.log(typeof deleted);
