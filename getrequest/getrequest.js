var request = require("request");
var fs = require("fs");

request.get("https://sytantris.github.io/http-examples/future.jpg")
  .on("error", function (err) {
    throw err;
  })

  .on('end', function() {
    console.log('Downloaded image,woohoo!!!.');
  })

  .on("response", function(response) {
    console.log("Response Status Code: ",response.statusCode);
    console.log("Response Message: ",response.statusMessage);
    console.log("Response Content Type: ",response.headers["content-type"]);
    console.log('Downloading image...');

  })


  .pipe(fs.createWriteStream('./future.jpeg'));






