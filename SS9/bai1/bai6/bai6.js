class DataStore<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }

  remove(index: number): void {
    if (index >= 0 && index < this.data.length) {
      this.data.splice(index, 1);
    }
  }
}

const numberStore = new DataStore<number>();
numberStore.add(10);
numberStore.add(20);
console.log(numberStore.getAll()); // [10, 20]
numberStore.remove(0);
console.log(numberStore.getAll()); // [20]

const stringStore = new DataStore<string>();
stringStore.add("Hello");
stringStore.add("World");
console.log(stringStore.getAll()); // ["Hello", "World"]
