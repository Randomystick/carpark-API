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
const app = express();

app.use((req, res, next) => { //use express' json middleware to parse any request body into json so we can access req.body directly as json
    res.status(200).json({
        message: 'it works'
    });
}) 
module.exports = app;