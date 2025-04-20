let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());

// aap jub js me month ko get krthy hy tho aap ko wo aik month piche ka dikhayega q k programming me indexing zero se start hoti hy etc.

console.log(date.toLocaleDateString("en-pk")); // tho aap iss trha se local date k hisab se b print kr sakty ho etc.

// for specific date
let specificDate = new Date("2025-04-19"); // Specific date
