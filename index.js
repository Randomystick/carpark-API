/********************************************
 About RESTful APIs:

         CLIENT
 |                 |\
 | send auth data  | token
 |/                |
         SERVER       
 
 1. Client stores Token. Stored Token is sent together with request to authorise request.
 2. Server validates Token
 > This is called a JWT // JSON Web Token: JSON Data + Signature
 >> JSON Data typically not encrypted
 >> Signature can be verified on the server via private key

***********************************************/

const express = require('express'); //import express package
const app = express()
const PORT = 8080; //localhost

app.use(express.json()) //use express' json middleware to parse any request body into json so we can access req.body directly as json

app.get('/carpark', (req, res) => { //this callback function is a handler for the get carpark request. feed in REQuest and RESponse object
    res.status(200).send({
        carpark: 'sengkang',
        availability: '1'
    })
});

app.post('/carpark/:id', (req, res) => { //dynamic route parameter
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'no logo'})
    }

    res.send({
        carpark: `here with your ${logo}`,
    })
});

///*
app.listen(PORT, () => 
    console.log(`it's alive on http://localhost:${PORT}`) //callback function
) //run api using 'node .' in terminal
//*/
