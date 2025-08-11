abstract class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }

    public abstract void makeNoise();

    public void printName() {
        System.out.println(name);
    }
}

class Cat extends Animal {
    public Cat(String name) {
        super(name);
    }

    @Override
    public void makeNoise() {
        System.out.println("meo meo");
    }
}

class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }

    @Override
    public void makeNoise() {
        System.out.println("gâu gâu");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal cat = new Cat("Mèo Mun");
        Animal dog = new Dog("Cún Vàng");

        cat.printName();
        cat.makeNoise();

        dog.printName();
        dog.makeNoise();
    }
}
