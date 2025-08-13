"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(name, speed, id) {
        this._name = name;
        this._speed = speed;
        this._id = id;
    }
    slowDown(delta = 5) { this._speed = Math.max(0, this._speed - delta); return this; }
    speedUp(delta = 5) { this._speed += delta; return this; }
    showSpeed() { console.log(`${this._name} (${this._id}) speed: ${this._speed} km/h`); return this; }
}
class Bicycle extends Vehicle {
    #gear;
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.#gear = gear;
    }
    get gear() { return this.#gear; }
}
const bike = new Bicycle("Roadster", 10, "B01", 7);
bike.showSpeed().speedUp(12).showSpeed().slowDown(5).showSpeed();
console.log("Gear:", bike.gear);
//# sourceMappingURL=bai.js.map