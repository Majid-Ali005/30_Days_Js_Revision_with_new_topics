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