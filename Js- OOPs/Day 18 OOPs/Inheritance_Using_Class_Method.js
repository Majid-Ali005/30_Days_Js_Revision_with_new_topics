//parent class
class SalesShop{
    constructor(item,amount){
     this.item =item;
     this.amount = amount;
    }
    summary(){
      console.log(` The ${this.item}is sold at ${this.amount}`);
    }
   }
   //child class
   class Buyer extends SalesShop{
      constructor(item,amount,buyerName){
        super(item,amount);
        this.buyerName = buyerName;
      }
    //over writing the method in child class
      summary(){
       console.log(`The ${this.item} is sold to ${this.buyerName} at ${this.amount}`)
      }
   }
   
   //creating an instance for child class
   const shan = new Buyer("Table","$500","shan");
   shan.summary();  //The Table is sold to shan at $500