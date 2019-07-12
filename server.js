const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

//enable CORS
app.use(cors());

//jwt checking middleware
const checkJwt = jwt({
    //provide signing key based on the kid in the header and the signing keys provided by the jwks endpoint

    //LOGIN IN AUTH0 SO YOU CAN GET THE CONFIGURED CODE!!!! 

    
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://YOUR_DOMAIN/.well-known/jwks.json'
    })
})

//enable request body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//create API endpoint
app.post('/user', function(req, res) {
    res.status(201).send({message: 'This is the POST /user endpoint'});
})

app.listen(8000);
