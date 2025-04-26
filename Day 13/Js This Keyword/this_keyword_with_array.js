
/**
 * yaha pr iss exmple me hum ne apna custome method banaya hy
 * q k custome method me b aik function hota hy tho wahi wala kaam hum ne yaha pr b kiya howa hy.
 * magr hamare method jub b aap call karoge tho aap ko 123 print hotay howe diskhenge etc.
 * or hamarep method ka naam arr.customeMethod() hy etc.
 */
const arr = [1, 2, 3];

arr.customeMethod = function(){
    console.log(this);
}

arr.customeMethod();