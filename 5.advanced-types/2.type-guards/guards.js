"use strict";
class Car {
    drive() {
        console.log('Driving ...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck ...');
    }
    loadCargo(amount) {
        console.log('Loading cargo ... ' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // if('loadCargo' in vehicle) {
    //     vehicle.loadCargo(1000)
    // }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
