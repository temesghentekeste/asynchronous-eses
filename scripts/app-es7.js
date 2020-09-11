const request = new ES7HTTP();

// Get Users
request.get('https://jsonplaceholder.typicode.com/users')
       .then( data => console.log('Get all users:', data))
       .catch( err => console.log('Error: ', err));


// Get User
request.get('https://jsonplaceholder.typicode.com/users/1')
      .then( data => console.log('Get single user:', data))
      .catch( err => console.log('Error: ', err));

