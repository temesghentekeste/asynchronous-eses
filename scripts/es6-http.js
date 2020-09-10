/**
 * ES6HTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author Temesghen Tekeste
 * @license MIT
 */

/* eslint class-methods-use-this: ["error",
  { "exceptMethods": ["get", "post", "put", "delete"] }] */
// eslint-disable-next-line no-unused-vars
class ES6HTTP {
  // HTTP GET Request
  get(url) {
    return fetch(url).then(res => {
      if (res.status === 200) {
        return res.json();
      }
      return new Error('Unable to fetch data.');
    });
  }


  // HTTP POST Request
  post(url, data) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .catch(err => err);
  }

  // HTTP PUT Request
  put(url, data) {
    return fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .catch(err => err);
  }

  // HTTP DELETE Request
  delete(url) {
    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => 'Data has been deleted')
      .catch(err => err);
  }
}