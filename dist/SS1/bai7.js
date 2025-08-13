"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let input = "banana";
let result = "";
for (let char of input) {
    if (!result.includes(char)) {
        result += char;
    }
}
console.log(result);
//# sourceMappingURL=bai7.js.map