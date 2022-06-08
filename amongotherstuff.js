// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.send(/public/index.html);
//   res.end('Hello\n');
// }).listen(8080, 'localhost');
// console.log('Server running at http://localhost:8080/');

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

console.log(__dirname);

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(process.env.port || 8080);

console.log('Running at Port 8080');