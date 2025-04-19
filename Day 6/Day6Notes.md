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
let x = 10; // x store a value  10
let y = 20; // y store a value  20
let z = x + y; // z store the result of plus x and y variable
console.log(z); // output: 30
```

##### If you add two strings, the result will be a string concatenation:

```bash
// Adding Two Strings
let x1 = "20"; // x1 store the string which is "20"
let y1 = "20"; // y1 is the string which is "20"
let z1 = x1 + y1; // result: "20" + "20" = 2020
console.log(z1); // output: 2020
/**
 * yaha pr aap k pass output me 2020 iss wja se print ho rha hy q k aap string ko bana rhy ho magr oss k andar value numbers hy.
 * magr javaScript me aap jiss b cheez ko double ya phir single quotatoions me likhty hy tho ye oss ko string consider krtha hy iss wja se.
 */
```

#### If you add a number and a string, the result will be a string concatenation:
- matlab agr aap string or numbers ko aik dosre k sath concatenate krthy hy tho aap k pass string concatenation ayega matlab plus etc nhi hoga q k aap string ko number k sath print kr rhy hy etc.

```bash
// adding string and numbers
let x2 = 10;
let y2 = "20";
let z2 = x2 + y2;
console.log(z2); // output: 1020
```

#### A common mistake is to expect this result to be 30:
- tho aap ko dekhna hy k kahi b agr string concatenate ho rha hy tho aap ne direct samjh jana hy k bhai yaha pr iss ka result b string k concatenations me hi ayega.

```bash
let x = 10;
let y = 20;
let z = "The result is: " + x + y;
console.log(z); // output: 1020
/**
 * yaha pr aap k pass output me 1020 iss waja se a rha hy q k aap jo z ka variable hy oss me iss k sath string ko plus kr rhy hy matlab concatenate kr rhy hy iss wja se resutl 1020 a rha hy.
 * let z = "The result is: " + x + y; --> yaha pr agr aap dekhe tho double quotation ko aap concatenate kr rhy hy numbers k sath etc.
 */
```

- The JavaScript interpreter works from left to right.
- First 10 + 20 is added because x and y are both numbers.
- Then 30 + "30" is concatenated because z is a string.


### JavaScript Number Methods

These number methods can be used on all JavaScript numbers:
![alt text](image.png)
