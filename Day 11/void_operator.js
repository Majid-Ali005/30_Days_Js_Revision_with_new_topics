
// void oprator aap ko kuch b return nhi krtha hy etc.

console.log(void 0); // undefined
console.log(void (1 + 2)); // undefined
console.log(void function() { return 42; }()); // undefined