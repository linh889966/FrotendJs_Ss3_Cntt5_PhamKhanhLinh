function findElement<T>(arr: T[], value: T): T | undefined {
  for (const item of arr) if (Object.is(item, value)) return item;
  return undefined;
}

console.log(findElement([1, 2, 3], 2));         // 2
console.log(findElement(['a', 'b', 'c'], 'x')); // undefined
