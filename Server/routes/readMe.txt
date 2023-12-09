This Folder will contain the Server Routes, 
for example to handle all http requests for the route  "/api/people" , for example (
    "/api/people",
     "/api/people/admins",
      "/api/people/:userId/reviews/:reviewId"
    )

it starts with requiring the express.Router() class . (const express = require('express);  const router = express.Router();  ).

Then to all the possible routes add a handle method : 
router.get('/', (req, res) => {...}) . this will be equal to router.get('/api/people', (req, res) => {...}) .
and router.get('/:userId/reviews/:reviewId', (req, res) => {...}) will be equal to router.get('/api/people/:userId/reviews/:reviewId', (req, res) => {...}) .


finally in the server.js : 

1. add an inport for the route file , const people = require('./routes/people');

2. app.use('/api/people', people);


Thats why we dont have to write router.get('/api/people') only router.get('/') , becuase the route was passed by middleware in the server.js file . 