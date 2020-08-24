var http = require('http')

var server = http.createServer((req,res)=>{
	res.write('<h1>selam</h1>');

	res.end('bitti');
	})
server.listen(3000)