// Instantiate ES5http
const http = new ES5http(); /* eslint-disable-line no-undef */


// Get posts
// http.get('https://jsonplaceholder.typicode.com/posts',
// function(error, data) {
//   if (error) console.log(error);
//   else console.log(data);
// });

// Get post
// http.get('https://jsonplaceholder.typicode.com/posts/1',
//   function (error, data) {
//     if (error) console.log(error);
//     else console.log(data);
//   });

// Create Data
// const data = {
//   title: 'New Post',
//   body: 'Body of New Post',
// };

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data,
//   (error, data) => {
//     if (error) console.log(error);
//     else console.log(data);
//   });

// Updated Data
// const updatedData = {
//   title: 'Updated Post',
//   body: 'Body of Updated Post',
// };

// http.put('https://jsonplaceholder.typicode.com/posts/1', updatedData,
//   (error, data) => {
//     if (error) console.log(error);
//     else console.log(data);
//   });


// Delete data
http.delete('https://jsonplaceholder.typicode.com/posts/1',
  (error, response) => {
    if (error) console.log(error);
    else console.log(response);
  });