function myFilter(arr, value, callback) {
  if (!Array.isArray(arr)) throw new Error("Tham số đầu tiên phải là mảng");
  if (typeof callback !== "function") throw new Error("callback phải là hàm");
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], value, i, arr)) result.push(arr[i]);
  }
  return result;
}

const numbers = [1, 2, 2, 3, 4, 5, 6];
const equals = (el, v) => el === v;

console.log(myFilter(numbers, 2, equals));   // [2, 2]
console.log(myFilter(numbers, 10, equals));  // []
