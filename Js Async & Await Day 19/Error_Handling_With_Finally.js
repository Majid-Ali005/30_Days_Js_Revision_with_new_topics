let api = 'https://jsonplaceholder.typicode.com/users';

fetch(api)
  .then(response => response.json())
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  })
  .finally(() => {
    console.log('Fetch attempt finished.');
  });