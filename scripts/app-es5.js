// Instantiate ES5http
const http = new ES5http(); /* eslint-disable-line no-undef */


// Get posts
// http.get('https://jsonplaceholder.typicode.com/posts',
// function(error, data) {
//   if (error) console.log(error); /* eslint-disable-line no-console */
//   else console.log(data); /* eslint-disable-line no-console */
// });

// Get post
http.get('https://jsonplaceholder.typicode.com/posts/1',
  (error, data) => {
    if (error) console.log(error); /* eslint-disable-line no-console */
    else console.log(data); /* eslint-disable-line no-console */
  });