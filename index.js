var http = require('http');
        http.createServer(function(req,res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome Node.js');

}).listen(3000, "10.128.0.2");
console.log('Server running at http://10.128.0.2:3000/');
