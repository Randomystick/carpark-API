const http = require('http');
const PORT = process.env.PORT || 8080; //either the calling process' port or localhost

const app = require('./app'); //import our app file

const server = http.createServer(app);

server.listen(PORT, () => 
    console.log(`it's alive on http://localhost:${PORT}`) //callback function
) //run api using 'node .' in terminal
