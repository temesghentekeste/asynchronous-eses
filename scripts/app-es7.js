// eslint-disable-next-line no-undef
const request = new ES7HTTP();

// Get Users
request.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log('Get all users:', data))
  .catch(err => console.log('Error: ', err));


// Get User
request.get('https://jsonplaceholder.typicode.com/users/1')
  .then(data => console.log('Get single user:', data))
  .catch(err => console.log('Error: ', err));


// Create new user
const user = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'johndoe@somedomain.com',
};
// Post request
request.post('https://jsonplaceholder.typicode.com/users', user)
  .then(data => console.log('Post:', data))
  .catch(err => console.log(err));

// Put request
request.put('https://jsonplaceholder.typicode.com/users/1', user)
  .then(data => console.log('Put:', data))
  .catch(err => console.log(err));

// Delete user
request.delete('https://jsonplaceholder.typicode.com/users/1')
  .then(res => console.log('Delete:', res))
  .catch(err => console.log(err));

// Update user
request.get('https://jsonplaceholder.typicode.com/users/1')
  .then(res => {
    console.log('Old user', res);
    res.name = 'Temesghen Tekese';
    res.username = 'temesghen';
    return request.put('https://jsonplaceholder.typicode.com/users/1', res);
  })
  .then(data => console.log('Updated user', data))
  .catch(err => console.log(err));