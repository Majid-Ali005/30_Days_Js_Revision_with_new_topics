// inheritance.js
// Yeh file JavaScript mein inheritance ko explain karti hai with comments

// 1. PROTOTYPAL INHERITANCE
// JavaScript mein objects ek dusre ke prototype se properties/methods inherit karte hain

// Parent object (Constructor function as parent)
function Animal(name) {
    this.name = name; // Instance property
}
Animal.prototype.speak = function() { // Prototype method
    return `${this.name} makes a sound.`;
};

// Child object (Constructor function as child)
function Dog(name, breed) {
    Animal.call(this, name); // Inherit instance properties from Animal
    this.breed = breed; // Child-specific property
}
// Prototype chain setup: Dog inherits from Animal
Dog.prototype = Object.create(Animal.prototype); // Inherit prototype methods
Dog.prototype.constructor = Dog; // Fix constructor reference
Dog.prototype.bark = function() { // Child-specific method
    return `${this.name} barks!`;
};

// Create instance of Dog
const dog = new Dog("Buddy", "Golden Retriever");
console.log("Prototypal Inheritance - Dog name:", dog.name); // Output: Buddy
console.log("Prototypal Inheritance - Animal method:", dog.speak()); // Output: Buddy makes a sound.
console.log("Prototypal Inheritance - Dog method:", dog.bark()); // Output: Buddy barks!
console.log("Prototypal Inheritance - Breed:", dog.breed); // Output: Golden Retriever

// 2. ES6 CLASS INHERITANCE
// ES6 classes prototypal inheritance ko syntactic sugar ke roop mein simplify karte hain

// Parent class
class Vehicle {
    constructor(brand) {
        this.brand = brand; // Instance property
    }
    start() { // Instance method
        return `${this.brand} vehicle starts.`;
    }
}

// Child class
class Car extends Vehicle { // `extends` se Vehicle ke properties/methods inherit hote hain
    constructor(brand, model) {
        super(brand); // Parent (Vehicle) ke constructor ko call karta hai
        this.model = model; // Child-specific property
    }
    drive() { // Child-specific method
        return `${this.brand} ${this.model} is driving.`;
    }
}

// Create instance of Car
const car = new Car("Toyota", "Corolla");
console.log("ES6 Class Inheritance - Car brand:", car.brand); // Output: Toyota
console.log("ES6 Class Inheritance - Vehicle method:", car.start()); // Output: Toyota vehicle starts.
console.log("ES6 Class Inheritance - Car method:", car.drive()); // Output: Toyota Corolla is driving.
console.log("ES6 Class Inheritance - Model:", car.model); // Output: Corolla

// 3. CONNECTING TO PREVIOUS CONTEXT (myFunction se inspired)
// Aapke previous `myFunction` ko inheritance ke saath use karte hain
function Person(name, age = 25) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}, age ${this.age}.`;
};

// Child constructor
function Student(name, age, grade) {
    Person.call(this, name, age); // Inherit Person properties
    this.grade = grade; // Child-specific property
}
Student.prototype = Object.create(Person.prototype); // Inherit prototype
Student.prototype.constructor = Student;
Student.prototype.study = function() {
    return `${this.name} is studying in grade ${this.grade}.`;
};

// Create instance of Student
const student = new Student("Ali", 25, "A");
console.log("Prototypal Inheritance (myFunction context) - Name:", student.name); // Output: Ali
console.log("Prototypal Inheritance (myFunction context) - Person method:", student.greet()); // Output: Hello, I'm Ali, age 25.
console.log("Prototypal Inheritance (myFunction context) - Student method:", student.study()); // Output: Ali is studying in grade A.
console.log("Prototypal Inheritance (myFunction context) - Grade:", student.grade); // Output: A

// 4. ES6 CLASS VERSION OF myFunction
// Same Person-Student example using ES6 classes
class PersonClass {
    constructor(name, age = 25) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, I'm ${this.name}, age ${this.age}.`;
    }
}

class StudentClass extends PersonClass {
    constructor(name, age, grade) {
        super(name, age); // Call parent constructor
        this.grade = grade;
    }
    study() {
        return `${this.name} is studying in grade ${this.grade}.`;
    }
}

// Create instance of StudentClass
const studentClass = new StudentClass("Bob", 30, "B");
console.log("ES6 Class (myFunction context) - Name:", studentClass.name); // Output: Bob
console.log("ES6 Class (myFunction context) - Person method:", studentClass.greet()); // Output: Hello, I'm Bob, age 30.
console.log("ES6 Class (myFunction context) - Student method:", studentClass.study()); // Output: Bob is studying in grade B.
console.log("ES6 Class (myFunction context) - Grade:", studentClass.grade); // Output: B

// 5. PROTOTYPE CHAIN DEMONSTRATION
// Prototype chain kaise kaam karta hai
console.log("Prototype Chain - Is dog an Animal?", dog instanceof Animal); // Output: true
console.log("Prototype Chain - Is dog a Dog?", dog instanceof Dog); // Output: true
console.log("Prototype Chain - Is car a Vehicle?", car instanceof Vehicle); // Output: true
console.log("Prototype Chain - Is car a Car?", car instanceof Car); // Output: true