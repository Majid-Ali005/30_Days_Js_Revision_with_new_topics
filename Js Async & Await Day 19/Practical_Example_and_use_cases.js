/**
 * tho aap iss trha se api se kisi specific id ko fetch etc kr sakty hy.
 * bs function me id pass krni hy or phir oss ko apne api k sath laga dena hy etc.
 */

function fetchUserData(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(user => {
        console.log('User:', user);
        return user;
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }
  
  fetchUserData(1);