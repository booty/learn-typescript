class Car {
  private vin: string;
  public make: string;
  constructor(make: string) {
    this.make = make;
    this.vin = String(Math.random() * 10).padStart(10, "0");
  }
}

class Motorcycle extends Car {
  constructor(make: string) {
    super(make);
  }
}

class Truck {
  public make: string;
  constructor(make: string) {
    this.make = make;
  }
}

function admire(car: Car) {
  console.log(`Hey there! Pretty sweet ${car.make} ya got there.`);
}

function admireTruck(truck: Truck) {
  console.log(`Let's do some offroading together in your ${truck.make}!`);
}

function admireMotorCycle(motorcycle: Motorcycle);

const johnCar: Car = new Car("Ford");
const johnTruck: Truck = new Truck("Rivian");

// compiles and runs, because Car also has a string property named `make` (duck typing)
admireTruck(johnCar);

console.log(keyof Car)

// compiles and runs, because Truck also has a string property named `make` (duck typing)
// HOWEVER, typescript complains about `vin` being missing
// admireCar(johnTruck);

// same problem
// admireMotorCycle(johnTruck);
