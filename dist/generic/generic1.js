"use strict";
const identity = (arg) => {
    return arg;
};
// cách khai báo hàm generic
const identityGeneric = (arg) => {
    return arg;
};
// <T> để nhận vào một mảng arr: T[] và trả về phần tử đầu tiên với kiểu T:
const getFirstGeneric = (arr) => {
    return arr[0];
};
let number = getFirstGeneric([1, 2, 3, 4]);
number.toFixed(2);
