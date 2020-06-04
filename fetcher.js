const request = require('request');
const fs = require('fs');

request('http://www.example.edu/', (error, response, body) => {
  if (error || response) {
    console.log('error; process will terminate');
    process.exit();
  }
  fs.statSync(path[, options])#
// History
// path <string> | <Buffer> | <URL>
// options <Object>

// bigint <boolean> Whether the numeric values in the returned fs.Stats object should be bigint. Default: false.
// Returns: <fs.Stats></fs.Stats>
  
});

//GET http://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1
//request('http://www.example.edu/?GET ./index.html HTTP/1.0


// defaults to `GET` method if none is passed
//From Hafiz's lecture:
// httpClient('http://lighthouselabs.ca', (err, resp, body) => {
//   if (err) {
//     return console.log('err :>> ', err);
//   }
//   console.log('body :>> ', body);
// })
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.