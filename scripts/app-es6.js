// Instantiate ES6HTTP
const request = new ES6HTTP();

// Get request
request.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log('Fetch api: ', data))
  .catch(err => console.log('Fetch api error:', err))