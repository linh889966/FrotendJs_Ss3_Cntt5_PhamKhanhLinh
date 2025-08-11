class Animal {
  constructor(name) {
    if (new.target === Animal) throw new Error("Animal is abstract");
    this.name = name;
  }
  printName() { console.log(this.name); }
  makeNoise() { throw new Error("makeNoise() must be overridden"); }
}

class Cat extends Animal {
  makeNoise() { console.log("meo meo"); }
}

class Dog extends Animal {
  makeNoise() { console.log("gâu gâu"); }
}

const c = new Cat("Mướp");
const d = new Dog("Vàng");
c.printName(); c.makeNoise();
d.printName(); d.makeNoise();
