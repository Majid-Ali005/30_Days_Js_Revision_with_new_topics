const car = {
    brand: "toyota",
    getBrand: function(){
        return this.brand
    }
}

// console.log(car.getBrand()); // aisa b aap kr sakty hy
console.log(car.getBrand(car.getBrand)); // or aisa b aap kr sakty hy.
// output dono ka same hi ayega etc.
