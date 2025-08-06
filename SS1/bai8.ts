function toNumber(value: string | number): number | null {
    if (typeof value === "number") return value;
    const parsed = Number(value);
    return isNaN(parsed) ? null : parsed;
}

function calculate(a: string | number, b: string | number, operator: string): string {
    const numA = toNumber(a);
    const numB = toNumber(b);

    if (numA === null || numB === null) {
        return "Dữ liệu không hợp lệ";
    }

    switch (operator) {
        case "+":
            return (numA + numB).toString();
        case "-":
            return (numA - numB).toString();
        case "*":
            return (numA * numB).toString();
        case "/":
            return numB !== 0 ? (numA / numB).toString() : "Không thể chia cho 0";
        default:
            return "Toán tử không hợp lệ";
    }
}

console.log(calculate("10", 5, "+"));
console.log(calculate("abc", 5, "-"));
console.log(calculate(12, "4", "*"));
console.log(calculate("100", "0", "/"));
console.log(calculate(8, 2, "%"));
