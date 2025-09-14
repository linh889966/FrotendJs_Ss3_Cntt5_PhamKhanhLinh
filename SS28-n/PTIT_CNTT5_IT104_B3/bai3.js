function processArray(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new Error("Tham số đầu tiên phải là một mảng");
    }
    if (typeof callback !== "function") {
        throw new Error("Tham số thứ hai phải là một hàm");
    }

    arr.forEach((item, index) => {
        setTimeout(() => {
            callback(item, index);
        }, (index + 1) * 1000);
    });
}

function printElement(element, index) {
    console.log(`Phần tử thứ: ${element}`);
}

processArray([1, 2, 3, 4, 5], printElement);
