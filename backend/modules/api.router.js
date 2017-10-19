const express = require('express');
const apiRouter = express.Router();

apiRouter.get('/', function(req, res) {
    res.json({message: "Welcome to the API"});
});

apiRouter.use('/authors', require('./author/author.router'));

module.exports = apiRouter;
