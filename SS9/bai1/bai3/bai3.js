function mergeObjects<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b } as T & U;
}

const person = { name: "Alice" };
const job = { role: "Developer" };

console.log(mergeObjects(person, job));
