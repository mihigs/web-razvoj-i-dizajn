export class Vehicle{
    constructor(hasEngine, isElectric, canDrive, capacity, isRunning, mileage, garage){
        this._hasEngine = hasEngine;
        this._isElectric =  isElectric;
        this._canDrive = canDrive;
        this._capacity = capacity;
        this._isRunning = isRunning;
        this._mileage = mileage;
        this.garage = garage; //svako vozilo treba da ima odgovarajucu garazu
    }
    get name(){
        return this._name;
    }
    set canDrive(input){
        this._canDrive = input;
    }
    get canDrive(){
        return this._canDrive;
    }
    get isRunning(){
        return this._isRunning;
    }
    set isRunning(input){
        this._isRunning = input;
    }
    get mileage(){
        return this._mileage;
    }
    set mileage(mileage){
        this._mileage = mileage;
    }

    drive(distance = 0){
        if(!this.isRunning) return console.log('You have to start the vehicle first!');
        if(!this.canDrive) return console.log('Vehicle needs to be fixed at the garage first!');
        if(distance < 0) return console.log("Can't go in reverse yet!");
        
        if(this.mileage + distance > 200) {
            distance = 200 - this.mileage;
            this.mileage = 200;
            this.toGarage();
            console.log(`Distance driven: ${distance} km. Vehicle damaged! Go to the garage to repair it`);
        }else {
            this.mileage += distance;
            console.log(`Distance driven: ${distance} km`);
        }
    }
    toGarage(){
        this.canDrive = false;
        this.garage.addVehicle(this);
    }
    fix(){
        this.mileage >= 20 ? this.mileage -= 20 : this.mileage = 0;
        this.mileage < 100 ? this.canDrive = true : this.canDrive = false;
        console.log(`Vehicle fixed. Current mileage: ${this.mileage}`);
    }
}
export class Car extends Vehicle{
    constructor(hasEngine, isElectric, canDrive, capacity, isRunning, mileage, garage, doorNumber){
        super(hasEngine, isElectric, canDrive, capacity, isRunning, mileage, garage);
        this._doorNumber = doorNumber;
        }
        start(){ //ove metode se mogu staviti u parent klasu Vehicle
            console.log('Car started');
            this.isRunning = true;
        }
        stop(){ //
            console.log('Car turned off');
            this.isRunning = false;
        }
}
export class Bike extends Vehicle{
    constructor(hasEngine, isElectric, canDrive, capacity, isRunning, mileage, garage, tireNumber){
        super(hasEngine, isElectric, canDrive, capacity, isRunning, mileage, garage);
        this._tireNumber = tireNumber;
        }
        start(){ //
            console.log('Bike unlocked and ready to go!');
            this.isRunning = true;
        }
        stop(){ //
            console.log('Stopped to rest');
            this.isRunning = false;
        }
}
export class Garage{
    constructor(){
        this.queue = [];
    }

    addVehicle(vehicle){
        this.queue.push(vehicle);
    }
    removeVehicle(){
        this.queue.pop()
    }
    checkVehicles(){
        this.queue.forEach(vehicle => {
            console.log(vehicle);
        })
    }
    fixVehicle(index){
        this.queue[index].fix();
    }
}

