import {Vehicle} from './class_definitions.js'
import {Car} from './class_definitions.js'
import {Bike} from './class_definitions.js'
import {Garage} from './class_definitions.js'

//inicijalizacija objekata
const garaza = new Garage();
const bajk1 = new Bike(false, false, true, 1, false, 0, garaza, 2);
const bajk2 = new Bike(false, false, true, 1, false, 0, garaza, 2);
const bajk3 = new Bike(false, false, true, 2, false, 0, garaza, 3);
const auto1 = new Car(true, false, true, 5, false, 0, garaza, 4);
const auto2 = new Car(true, true, true, 4, false, 0, garaza, 4);
const auto3 = new Car(true, false, true, 5, false, 0, garaza, 4);
const auto4 = new Car(true, false, true, 5, false, 0, garaza, 4);
const auto5 = new Car(true, false, true, 4, false, 0, garaza, 2);
const auto6 = new Car(true, false, true, 5, false, 0, garaza, 4);

//pokretanje i voznja bicikla koje ide u garazu
bajk3.start();
bajk3.drive(300);

//pokusaj voznje prije pokretanja auta
auto2.drive();
auto2.start();
auto2.drive(43);
auto2.drive(82);
auto2.drive(300);

//ispis vozila u garazi i popravka
garaza.checkVehicles();
garaza.fixVehicle(1);
garaza.fixVehicle(1);
garaza.fixVehicle(1);
garaza.fixVehicle(1);

auto2.drive(); //pokusaj voznje prije popravke <100km kilometraze

garaza.fixVehicle(1);
garaza.fixVehicle(1);
garaza.fixVehicle(1);

//vozilo se ponovo moze voziti
auto2.drive();
auto2.drive(30);


