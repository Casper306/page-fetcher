const request = require('request');
const fs = require('fs');

request('http://www.google.com', (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.


console.log(body.length);

if(response.statusCode === 200){

const content = 'It worked!'

fs.writeFile('./test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
  console.log(`Downloaded and saved ${body.length} bytes to ./index.html`)
})
}
});
