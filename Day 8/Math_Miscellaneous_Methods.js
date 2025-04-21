//Math.Radom for to generating a random number in math

/**
 * tho aap k pass ab iss random number generator se har run k baad aik new number generate hota rahega jub b aap jitne b apne program ko run krthy ho.
 * aap iss trha function or without function dono trha se random number ko generate kr sakty ho.
 * magr function aik better way hota hy.
 * aap jiss b tarikay se kare magr formula tho same hi rehnay wala hy bs formula ko yaad rakho.
 */

// Generate random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(getRandomInt(1, 10)); // e.g., 7

  // my program for to print random number without function.
  const a = 1;
  const b = 10;
  const RandomNumber = Math.floor(Math.random() * ( b-a+1)) + a;
  console.log(`the random number is ${RandomNumber}`);

  
