// Instantiate ES6HTTP
const request = new ES6HTTP();

// Get request
request.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log('Fetch api: ', data))
  .catch(err => console.log('Fetch api error:', err))


// Create new user
const user = {
  name: "John Doe",
  username: "johndoe",
  email: "johndoe@somedomain.com"
}
// Post request
request.post('https://jsonplaceholder.typicode.com/users', user)
       .then( data => console.log(data))
       .catch( err => console.log(err));