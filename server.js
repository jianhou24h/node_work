var http = require('http');

http.createServer(function (request, response) {

    // ?‘— HTTP ?•” 
    // HTTP ó??: 200 : OK
    // “à—e?Œ^: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // ?‘—??”˜ "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// ?’[‘Åˆó”@‰ºM‘§
console.log('Server running at http://127.0.0.1:8888/');