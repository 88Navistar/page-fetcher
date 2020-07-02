const request = require('request');
const fs = require('fs');

const urlRequest = process.argv[2];
const path = process.argv[3];

request(urlRequest, (error, response, body) => {
  if (response >= 400 || response === 'undefined') {
    console.log('Please enter a valid url');
    //process.exit();
  } else {
  fs.realpath(path, (error) => {
    if (error) {
      console.log('Invalid path to index file');
      //process.exit();
    } else {
      fs.access(path, fs.F_OK, (err) => {
        if (path) {
          fs.writeFile(path, body, (err) => {
            const bodyData = fs.statSync(path)
            const bytes = bodyData['size']
            console.log(`Download ${bytes} bytes from ${urlRequest} to ${path}`);
          })
        }
      })
    }
  })
  }
  });

