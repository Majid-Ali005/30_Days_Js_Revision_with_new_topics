const array1 = ["a",12,"b","c",true,"hello"];
array1[0] = "c"; // no problem change hojayega array ka element
console.log(array1); // [ 'c', 12, 'b', 'c', true, 'hello' ]

//you cannot reassign a value to array because of the const keyword
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"]; 