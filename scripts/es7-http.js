/**
 * ES6HTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author Temesghen Tekeste
 * @license MIT
 */

/* eslint class-methods-use-this: ["error",
  { "exceptMethods": ["get", "post", "put", "delete"] }] */
// eslint-disable-next-line no-unused-vars
class ES7HTTP {
  // HTTP GET Request
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }


  // HTTP POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const responseData = await response.json();
    return responseData;
  }

  // HTTP PUT Request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  }

  // HTTP DELETE Request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseData = await 'Data has been deleted';
    return responseData;
  }
}