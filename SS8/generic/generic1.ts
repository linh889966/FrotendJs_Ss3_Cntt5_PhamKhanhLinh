const identity = (arg:any) :any=> {
    return arg;
}

// cách khai báo hàm generic
const identityGeneric = <T>(arg :T):T => {
    return arg;
}


// <T> để nhận vào một mảng arr: T[] và trả về phần tử đầu tiên với kiểu T:
const getFirstGeneric = <T>(arr: T[]): T => {
    return arr[0];
};

let number = getFirstGeneric([1, 2, 3, 4]);
number.toFixed(2);
