// Constructor
function ES5http() {
  this.request = new XMLHttpRequest();
}

// HTTP GET request
// eslint-disable-next-line func-names
ES5http.prototype.get = function (url, callback) {
  this.request.open('GET', url, true);

  this.request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data);
    } else if (e.target.readyState === 4) {
      callback('An error has occurred', undefined);
    }
  });

  this.request.send();
};

// HTTP POST request
// eslint-disable-next-line func-names
ES5http.prototype.post = function (url, data, callback) {
  this.request.open('POST', url, true);
  this.request.setRequestHeader('Content-type', 'application/json');

  // To avoid this keyword error in regular function
  const self = this;
  this.request.addEventListener('readystatechange', () => {
    callback(null, self.request.responseText);
  });

  this.request.send(JSON.stringify(data));
};

// HTTP PUT request
// eslint-disable-next-line func-names
ES5http.prototype.put = function (url, data, callback) {
  this.request.open('PUT', url);
  this.request.setRequestHeader('content-type', 'application/json');

  // To avoid this keyword error in regular function
  const self = this;
  this.request.addEventListener('readystatechange', () => {
    callback(null, self.request.responseText);
  });

  this.request.send(JSON.stringify(data));
};

// HTTP DELETE request
// eslint-disable-next-line func-names
ES5http.prototype.delete = function (url, callback) {
  this.request.open('DELETE', url);

  // To avoid this keyword error in regular function
  // const self = this;
  // Or I can pass the event args as follows
  this.request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      callback(null, 'Post deleted successfully');
    } else if (e.target.readyState === 4) {
      callback('An error has occurred', undefined);
    }
  });

  this.request.send();
};
