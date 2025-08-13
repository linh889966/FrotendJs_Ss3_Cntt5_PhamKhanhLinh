function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const person = { name: 'Alice' };
const info = { age: 25 };

const merged = mergeObjects(person, info);
console.log(merged);
