
// global variable ki example k liye niche dekhe
let globalVariable = "this is the global variable";

function myFunction(){
    console.log(globalVariable);
    /**
     * tho agr aap ye dekhe tho wo global varialbe aap k pass function me use ho rha hy.
     * or issi hi ko global varialbe kaha jata hy.
     * aap global variable let,var,const jiss se b banaya bs wo globally access ho sakty hy etc. simple.
     */
}
myFunction(); // output: this is the global variable

// local variable

function myFunction1(){
    let LocalVariable = "this is the local variable";
}
console.log(LocalVariable); // Error: ReferenceError: LocalVariable is not defined
/**
 * tho aap ko yaha pr ye error ==> ReferenceError: LocalVariable is not defined milega
 * q k ye varialbe jo LocalVariable hy ye function k andar hy tho iss ka jo scope hy wo local hy aap iss ko sirf iss function k andar hi use kr sakty hy issi waja se aap ko error mil rha hy etc.
 */