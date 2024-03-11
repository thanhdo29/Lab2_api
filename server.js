const http = require('node:http');//import thu vien
const hostname = '127.0.0.1';//localhost
const port = 3000;//cong lang nghe
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  //xu ly backend de lay data tra ve cilent
  res.write('NodeJS - bai 1\n');
  res.write('Tao project HelloWorld bang NodeJS\n');
  res.write(`<h1>HTML5 - Noi dung 1</h1>
  <p>Noi dung 2</p>`)
  res.end();
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});