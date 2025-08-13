"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = "john";
let lastName = "doe";
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
let fullName = capitalize(firstName) + " " + capitalize(lastName);
console.log(fullName);
//# sourceMappingURL=bai5.js.map