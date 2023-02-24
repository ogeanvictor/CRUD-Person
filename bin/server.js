'use strict'

const http = require('http');
const app = require('../src/app');

const port = 7474;
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
console.log(`Server is running in port ${port}`);