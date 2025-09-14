function myForEach(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new Error("Tham số đầu tiên phải là một mảng");
    }
    if (typeof callback !== "function") {
        throw new Error("Tham số thứ hai phải là một hàm");
    }

    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

const numbers = [1, 2, 3, 4, 5, 6];

myForEach(numbers, (element, index, array) => {
    console.log(`Vị trí: ${index} | Phần tử: ${element} | Mảng:`, array);
});
