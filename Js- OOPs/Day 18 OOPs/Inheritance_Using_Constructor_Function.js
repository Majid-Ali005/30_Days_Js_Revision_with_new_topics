//parent class
const Car = function(make,speed){
    this.make = make;
    this.speed = speed;
}
//child class
const EV = function(make,speed,charge){
    Car.call(this,make,speed)
    this.charge = charge;
}
//linking the prototype by Object.create method
EV.prototype = Object.create(Car.prototype);

//defining a method in child class
EV.prototype.accelerate = function(){
    this.speed +=20;
    this.charge -=1;
    console.log(`${this.make} going at ${this.speed}km/h with a charge of ${this.charge}%`);
}

//creating a instance and calling the acclerate method
const car1 = new EV("tesla",120,23);
car1.accelerate();//tesla going at 140km/h with a charge of 22%