
/**
 * aap iss api ko iss trha aik variabl me store kr k direct fetch me dal sakty ho warn aap direct b api dal sakty ho etc.
 * fetch(yaha pr).
 */

let api = 'https://jsonplaceholder.typicode.com/users';

fetch(api)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return fetch(api);
  })
  .then(response => response.json())
  .then(otherData => {
    console.log(otherData);
  })
  .catch(error => {
    console.error('Error:', error);
  });