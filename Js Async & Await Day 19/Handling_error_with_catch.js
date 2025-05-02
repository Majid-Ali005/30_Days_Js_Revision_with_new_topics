let api = 'https://jsonplaceholder.typicode.com/users';

fetch(api).then(()=>{
    if(!Response.ok){
        console.log("Network response was not ok");
    }
    return Response.json();
}).then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

  //Output: Network response was not ok
  /**
   * tho aap iss trha se .catch k sath error ko handle kr sakty hy easily etc.
   */