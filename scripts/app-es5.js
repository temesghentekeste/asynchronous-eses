// Instantiate ES5http
const http = new ES5http(); /* eslint-disable-line no-undef */


http.get('https://jsonplaceholder.typicode.com/posts', (error, data) => {
  if (error) console.log(error); /* eslint-disable-line no-console */
  else console.log(data); /* eslint-disable-line no-console */
});