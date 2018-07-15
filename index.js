const http = require('http');
const fs = require('fs');
const port = 3000;
const filename = './hello-world.txt';
const content = 'Hello to this great world';

const requestHandler = (request, response) => {
  fs.writeFile(filename, content, (err) => {
    if(err) throw err;
    fs.readFile(filename, 'utf8', (err, data) => {
      if(err) throw err;
      console.log(data);
    });
  });
  response.end("File written.");
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if(err) {
    return console.log(`You have an error: ${err}`);
  }
  console.log(`Server is listening on ${port}`);
});
