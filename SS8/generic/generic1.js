var identity = function (arg) {
    return arg;
};
// cách khai báo hàm generic
var identityGeneric = function (arg) {
    return arg;
};
// <T> để nhận vào một mảng arr: T[] và trả về phần tử đầu tiên với kiểu T:
var getFirstGeneric = function (arr) {
    return arr[0];
};
var number = getFirstGeneric([1, 2, 3, 4]);
number.toFixed(2);
