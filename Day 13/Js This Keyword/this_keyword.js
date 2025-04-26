const person = {
   name: "Majid Ali",
   greet: function(){
    // console.log("hello " + name); // Error: ReferenceError: name is not defined
    console.log("hello " + this.name); // hello Majid Ali
   }
}

person.greet();