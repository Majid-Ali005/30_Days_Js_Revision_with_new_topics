
//adding a properties in object
const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
  person.nationality = "pakistani"; // aap iss trha se object me kisi b properties or keys ko add kr sakty hy simple.
  let result = person.firstname + " is " + person.nationality + ".";
  console.log(result); // output: John is pakistani.

  // Delete a object
  const person1 = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
  delete person1.age;
  let result1 = person1.firstname + " is " + person1.age + " years old.";
  console.log(result1); // output: John is undefined years old.
  // john aap k pass undefined iss wja se a rha hy q k hum ne delete person.age; age ko delete krdiya hy from person1