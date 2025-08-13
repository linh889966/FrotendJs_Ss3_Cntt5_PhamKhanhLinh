"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//không dùng
const helloUser = (name) => {
    if (name === undefined) {
        name = "Dev";
    }
    console.log(`Hello, ${name}!`);
};
helloUser(); // Hello, Dev!
// Dùng default parameter
const helloUser = (name = "Dev") => {
    console.log(`Hello, ${name}!`);
};
helloUser(); // Hello, Dev!
//# sourceMappingURL=Default_Parameter.js.map