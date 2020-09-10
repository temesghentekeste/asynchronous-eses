// Instantiate ES6HTTP
const request = new ES6HTTP();

// Get request
request.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log('Get', data))
  .catch(err => console.log('Fetch api error:', err))


// Create new user
const user = {
  name: "John Doe",
  username: "johndoe",
  email: "johndoe@somedomain.com"
}
// Post request
request.post('https://jsonplaceholder.typicode.com/users', user)
       .then( data => console.log('Post', data))
       .catch( err => console.log(err));



// Put request
request.put('https://jsonplaceholder.typicode.com/users/10', user)
       .then( data => console.log('Put', data))
       .catch( err => console.log(err));

// Update user
request.get('https://jsonplaceholder.typicode.com/users/1')
       .then( res => {
         console.log('Old user', res)
         res.name = 'Temesghen Tekese';
         res.username = 'temesghen';
         return request.put('https://jsonplaceholder.typicode.com/users/1', res);
       } )
       .then( data => console.log('Updated user', data))
       .catch( err => console.log(err));