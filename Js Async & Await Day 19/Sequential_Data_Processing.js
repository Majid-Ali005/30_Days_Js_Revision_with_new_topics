// let api = 'https://jsonplaceholder.typicode.com/users';
function fetchDataAndProcess() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log('Initial Data:', data);
        return fetch(`https://jsonplaceholder.typicode.com/users/${data.id}`);
      })
      .then(response => response.json())
      .then(processedData => {
        console.log('Processed Data:', processedData);
      })
      .catch(error => {
        console.error('Error in data processing:', error);
      })
      .finally(() => {
        console.log('Data processing completed.');
      });
  }
  
  fetchDataAndProcess();
  