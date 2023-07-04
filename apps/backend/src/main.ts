import http from 'http';

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');

    let postData = '';
    req.setEncoding('utf-8');

    req.on('data', (chunk) => {
      postData += chunk;
    });

    req.on('end', () => {
      res.end(postData || '123');
    });
  })
  .listen(8080);

console.log('Server is started.');
