// == [generic.ts] Bài tập: làm quen với generic + predicate ==

// Hàm generic: trả về phần tử ĐẦU TIÊN thoả predicate hoặc undefined
// T: kiểu phần tử trong mảng (có thể là number, string, object...)
// predicate: hàm kiểm tra điều kiện cho từng phần tử
function findFirst<T>(
  arr: T[],
  predicate: (item: T, index: number, array: T[]) => boolean
): T | undefined {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) return arr[i]; // gặp phần tử đầu tiên thoả → trả về ngay
  }
  return undefined; // không có phần tử nào thoả
}

// Hàm chuyên biệt cho yêu cầu đề: tìm phần tử đầu tiên chia hết cho 2 (mảng số)
// Có thể viết gọn bằng cách tái sử dụng findFirst
const firstEven = (nums: number[]): number | undefined =>
  findFirst(nums, (n) => n % 2 === 0);

// ----------------- DEMO -----------------

// 1) Mảng số: lấy phần tử đầu tiên chia hết cho 2
console.log("firstEven([1,3,5,8,10]) =", firstEven([1, 3, 5, 8, 10])); // -> 8
console.log("firstEven([1,3,5]) =", firstEven([1, 3, 5])); // -> undefined

// 2) Mảng object: dùng findFirst với predicate tuỳ ý (VD: tuổi chẵn)
type Student = { id: number; name: string; age: number };

const students: Student[] = [
  { id: 1, name: "An", age: 19 },
  { id: 2, name: "Bình", age: 20 },
  { id: 3, name: "Chi", age: 21 },
];

const firstEvenAge = findFirst(students, (s) => s.age % 2 === 0);
console.log("firstEvenAge =", firstEvenAge); // -> { id: 2, name: 'Bình', age: 20 }
