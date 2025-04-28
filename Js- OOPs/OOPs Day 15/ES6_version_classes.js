/**
 * jub hamare pass ES6 version aya tho phir hum log class ko banane k liye class k keyword ko hi use krthy hy.
 * or ye iss k ilawa or b cheeze add krdeti hy ES6 jo version wo etc.
 */

class Animal {
    constructor(name) {
    this.name = name;
    }
   speak() {
    console.log(`${this.name} makes a noise.`);
    }
   }
   let animal = new Animal('Dog');
   animal.speak(); // Dog makes a noise.