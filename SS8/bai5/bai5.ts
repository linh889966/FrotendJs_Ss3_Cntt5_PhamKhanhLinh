function findFirst<T>(arr: T[], predicate: (item: T) => boolean): T | undefined {
  for (const item of arr) if (predicate(item)) return item;
  return undefined;
}

console.log(findFirst([1, 3, 5, 6, 7], n => n % 2 === 0)); 
console.log(findFirst([1, 3, 5], n => n % 2 === 0));      
