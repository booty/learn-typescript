var Car = /** @class */ (function () {
    function Car(make) {
        this.make = make;
        this.vin = String(Math.random() * 10).padStart(10, "0");
    }
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck(make) {
        this.make = make;
    }
    return Truck;
}());
function admireCar(car) {
    console.log("Hey there! Pretty sweet ".concat(car.make, " ya got there."));
}
function admireTruck(truck) {
    console.log("Let's do some offroading together in your ".concat(truck.make, "!"));
}
var johnCar = new Car("Ford");
var johnTruck = new Truck("Rivian");
admireCar(johnTruck);
admireTruck(johnCar);
