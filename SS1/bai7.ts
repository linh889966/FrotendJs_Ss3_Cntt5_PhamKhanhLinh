let input: string = "banana";
let result: string = "";

for (let char of input) {
    if (!result.includes(char)) {
        result += char;
    }
}

console.log(result);
