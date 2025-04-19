# JavaScript Numbers
- JavaScript has only one type of number. Numbers can be written with or without decimals.

```bash
let x = 3.14;  // A number with decimals
let y = 3;     // A number without decimals

console.log(x); // output: 3.14
console.log(y); // output: 3
```
- Extra large or extra small numbers can be written with scientific (exponent) notation:
- Extrap small or extra large numbers ko aik scientific exponent notation me likha jata hy jiss k liye aap niche example ko dekh sakty ho.

```bash
// store extra large or extra small numbers in variable.
let x1 = 123e5;    // 12300000 --> extra large number ko store krne k liye.
let y1 = 123e-5;   // 0.00123  --> extra small number ko store krne k liye.

console.log(x1); // output: 12300000
console.log(y1); // 0.00123
```

## Adding Numbers and Strings
#### WARNING !!
- JavaScript uses the + operator for both addition and concatenation.
- Numbers are added. Strings are concatenated.

If you add two numbers, the result will be a number:

```bash

```