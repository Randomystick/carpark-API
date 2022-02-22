const app = require('express')(); //import express package function
const PORT = 8080; //localhost

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`) //callback
) //run api using 'node .' in terminal