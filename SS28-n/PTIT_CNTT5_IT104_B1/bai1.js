function calculate(a, b, callback) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("a và b phải là số nguyên");
    }
    let sum = a + b;
    callback(sum);
}

function printResult(result) {
    console.log("Kết quả là:", result);
}

calculate(5, 7, printResult);
