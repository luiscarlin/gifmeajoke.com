const fetch = require('node-fetch').default

exports.handler = function(event, context, callback) {
  fetch('https://github.com/')
    .then(res => res.text())
    .then(body => console.log(body))
  // your server-side functionality
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello world ${Math.floor(Math.random() * 10)}`,
    }),
  })
}
