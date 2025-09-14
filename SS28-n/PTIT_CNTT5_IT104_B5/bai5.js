function checkCondition(condition, callback) {
    if (typeof condition !== "boolean") {
        throw new Error("Điều kiện phải là kiểu boolean");
    }
    if (typeof callback !== "function") {
        throw new Error("callback phải là một hàm");
    }
    setTimeout(() => callback(condition), 1000);
}

function display(result) {
    console.log("Điều kiện trả về:", result);
}

checkCondition(true, display);
checkCondition(false, display);
