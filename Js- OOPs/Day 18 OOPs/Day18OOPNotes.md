# Mastering Object-Oriented Programming (OOP) Concepts in JavaScript

## Introduction:
Object-Oriented Programming (OOP) is a powerful paradigm that revolves around the concepts of classes and objects. Let’s delve into the fundamental principles of OOP and explore key topics, from abstraction to inheritance.

## Table of content:

· Introduction:
· OOP fundamentals:
∘ Classes:
∘ Objects:
· 4 Fundamental Principles of OOP:
∘ Abstraction:
∘ Encapsulation:
∘ Inheritance:
∘ Polymorphism:
· Ways Of Defining Classes and Objects:
· Constructor Function:
∘ Changes happens when calling the function with new keyword:
· Prototype:
· ES6 Classes:
· Object.create Method:
· Inheriting Classes:
· Inheritance Using Constructor Function:
· Inheritance Using Class Method:
· Conclusion:

## OOP fundamentals:
- To truly grasp the essence of OOP, it’s essential to know what classes and objects are.
- oop ko parhne se pehly aap ko ye clear hona chaye hy k aap k pass objects or classes kiya hotay hy jo k fundmental topic hy.

## Classes:
A class is like a blueprint or a template that encapsulates both data and the methods that operate on that data. It defines the structure and behavior of objects, acting as a guide for creating instances with shared characteristics.
- matlab class hamare pass aik blue print hota hy jo k aap k classes,methods,objects etc ko represents krtha hy.

## Example of class
Example of class:Think of a class as a blueprint for constructing a building. The blueprint defines the structure, layout, and features of the building, just as a class defines the structure and behavior of objects.

## Objects:
Objects are instances of classes, created based on the blueprint provided by the class.Objects allow us to model and interact with the properties and behaviors described in the class.

## Example of Object:
Example of Object:An object is like a specific building created from the blueprint. Each building (object) may have unique characteristics while still adhering to the overall design (class definition).

# 4 Fundamental Principles of OOP:
![alt text](image.png)

## Encapsulation:
Encapsulation keeps properties and methods private within a class, preventing external access. This enhances data security and integrity.

## Inheritance:
Inheritance allows a child class to inherit properties and methods from a parent class, promoting code reuse and organization.

## Polymorphism:
Polymorphism meaning “many forms,” allows a child class to override a method inherited from a parent class, providing flexibility in implementation.

Ways Of Defining Classes and Objects:
There are 3 ways of defining classes and objects.They are,

- Constructor function.
- ES6 classes.
- Object.create method.

## Constructor Function:
In JavaScript, constructor functions play a crucial role in creating objects. It follows a specific pattern, differentiating it from regular functions.The constructor function should start with capital letter.The difference between regular function and constructor function is calling the function with new keyword .In constructor function arrow function is not applicable.In constructor functions, there’s no explicit return statement, and they always return an object.

## Changes happens when calling the function with new keyword:
when the function is called with new keyword 4 steps are involved.

- creating an empty object {}.
- making this = empty object.
- link prototype to empty object.
- Automatically return empty object.

### Regualr Function V/s Construtor Function
```bash
//regular fucntion:
const user = function(name){
     return name
};
const user1 =  user("shan");
console.log(user1); //shan

//constructor function
const User = function(name){
  this.name = name
}
const user2 = new User("stark");
console.log(user2); //User { name: 'stark' }
```