//constructor function
const User = function(name){
    this.name = name
  }
  
  //define method in User constructor function
  User.prototype.greet = function(){
  console.log(`hi ${this.name}`);
  }
  
  //creating an instance from the constructor function
  const user1 = new User("stark");
  //accessing the method in newly created object
  user1.greet(); //hi stark