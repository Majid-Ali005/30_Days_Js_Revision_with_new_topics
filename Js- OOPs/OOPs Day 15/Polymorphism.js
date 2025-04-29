/**
 * tho agr aap yaha pr dekhe tho aap k pass aik hi class ki multiple copies a rhi hy. matlab aik class pehly aik k sath inherit ho rha hy or kabhi dosre k sath jo k polymorphism bana rha hy etc.
 * aap k pass jub aap aik hi class ko multiple bar inherit krthy hy tho oss ko phir polymorphism kaha jata hy.
 * jaise yaha pr aap Animal ko do class k sath inherit kr rhy hy jo k aik polymorphism bana rha hy etc.
 */
class Animal {
    speak() {
    console.log('Animal speaks');
    }
   }
   class Cat extends Animal {
    speak() {
    console.log('Meow');
    }
   }
   class Dog extends Animal {
    speak() {
    console.log('Woof');
    }
   }
   function makeAnimalSpeak(animal) {
    animal.speak();
   }
   makeAnimalSpeak(new Cat()); // Meow
   makeAnimalSpeak(new Dog()); // Woof
   