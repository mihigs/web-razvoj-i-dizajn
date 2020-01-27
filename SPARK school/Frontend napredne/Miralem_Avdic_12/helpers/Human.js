export default class Human{
    constructor(sex, height, mass, age, name){
        this.sex = sex;        
        this.height = height;
        this.mass = mass;
        this.age = age;
        this.name = name;
    }
    sayHi(){
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old!`);
    }
}