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
