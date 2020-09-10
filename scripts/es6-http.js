/**
 * ES6HTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Temesghen Tekeste
 * @license MIT
 */

 class ES6HTTP {
   // HTTP GET Request
   get(url) {
     return fetch(url).then( res => {
       if(res.status == 200){
         return res.json();
       }else {
         return new Error('Unable to fetch data.')
       }
     });
   }

   // HTTP POST Request
   post(url, data) {
     return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .catch(err => err)
   }
}