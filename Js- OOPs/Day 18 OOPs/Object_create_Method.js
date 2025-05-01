const Person  = {
    calcAge(){
      return 2023-this.birthyear;
    },
    init(name,birthyear){
     this.name = name;
     this.birthyear =  birthyear;
    },
  };
  //setting person object to stark object
  const Stark = Object.create(Person)
  Stark.name ="stark"
  Stark.birthyear = 2000
  console.log(Stark.calcAge()); //23