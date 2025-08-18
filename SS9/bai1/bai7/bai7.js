function firstMatch<T>(arr: T[], predicate: (item: T) => boolean): T | undefined {
  for (const item of arr) if (predicate(item)) return item;
  return undefined;
}

console.log(firstMatch([1, 2, 4, 8], n => n % 2 === 0));
console.log(firstMatch(["cat", "house", "car"], w => w.length > 4));
