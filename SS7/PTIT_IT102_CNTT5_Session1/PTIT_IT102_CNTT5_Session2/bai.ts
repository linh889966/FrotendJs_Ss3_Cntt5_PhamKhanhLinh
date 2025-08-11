class Vehicle {
    protected String name;
    protected double speed;
    protected String id;

    public Vehicle(String name, double speed, String id) {
        this.name = name;
        this.speed = Math.max(0, speed);
        this.id = id;
    }

    public void slowDown(double v) { speed = Math.max(0, speed - Math.max(0, v)); }
    public void speedUp(double v) { speed = speed + Math.max(0, v); }
    public void showSpeed() { System.out.println("Speed: " + speed); }
}

class Bicycle extends Vehicle {
    private int gear;

    public Bicycle(String name, double speed, String id, int gear) {
        super(name, speed, id);
        this.gear = gear;
    }

    public int getGear() { return gear; }
    public void setGear(int gear) { this.gear = gear; }

    public void showInfo() {
        System.out.println("Name: " + name);
        System.out.println("ID: " + id);
        System.out.println("Gear: " + gear);
        showSpeed();
    }
}

public class Main {
    public static void main(String[] args) {
        Bicycle b = new Bicycle("Roadster", 12, "B-01", 7);
        b.showInfo();
        b.speedUp(8);
        b.showSpeed();
        b.slowDown(25);
        b.showInfo();
    }
}
