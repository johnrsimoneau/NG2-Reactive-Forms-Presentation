const express = require('express');
var ObjectId = require('mongodb').ObjectID;

var Author = require('./author.schema');

var apiRouter = express.Router();

apiRouter.route('/')
    .get(function(req, res) {
        Author.find({}, function(err, authors) {
            if (err) res.send(err);
            res.json(authors);
        });
    })
    .post(function(req, res) {
        let author = new Author();
        author.firstName = req.body.firstName;
        author.lastName = req.body.lastName;
        author.save(function(err) {
            if(err) res.send(err);
            res.json({message: "Author was created"});
        })
    });

apiRouter.route('/:id')
    .get(function(req, res) {
        var authorId = ObjectId(req.params.id);
        Author.findById({"_id":authorId}, function(err, author) {
            if (err) res.send(err);
            res.json(author);
        });
    })
    .put(function(req, res) {
        var authorId = ObjectId(req.params.id);
        Author.findById({"_id": authorId}, function(err, author) {
            if(err) res.send(err);
            if(res.body.firstName) author.firstName = req.body.firstName;
            if(res.body.lastName) author.lastName = req.body.lastName;
            author.save(function(err) {
                if(err) res.send(err);
                res.send({message: "Author has been updated"});
            });
        });
    })
    .delete(function(req, res) {
        var authorId = ObjectId(req.params.id);
        Author.remove({"_id": authorId}, function(err) {
            if (err) res.send(err);
            res.json({message: "Successfully deleted author."});
        });
    });

module.exports = apiRouter