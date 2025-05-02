async function getUserDataAndPosts(userId) {
    try {
      const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const userData = await userResponse.json();
      
      const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
      const userPosts = await postsResponse.json();
  
      console.log('User Data:', userData);
      console.log('User Posts:', userPosts);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  getUserDataAndPosts(1);