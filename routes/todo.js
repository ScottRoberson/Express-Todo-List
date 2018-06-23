var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo');
var db = mongoose.connection;

db.on('error', function(msg){
    console.log("Mongoose: unable to connect to todo database. " + msg);
});

db.once('open', function(){
     console.log("Mongoose connected to todo database.");
});

var Todo = require('../models/todo');

//Create
router.post('/add', function(req, res){
    console.log("Create a new task in todo");
    res.json({status: "SUCCESS"});
});

//Read
router.get('/all', function(req, req){
    console.log("Get all our task from todo");
    res.json({task: "TESTING", done: false});
});

//Update
router.put('/update/:id', function(req,res){
    console.log("Update a task in todo");
    res.json({status: "SUCCESS"});
});

//Delete
router.delete('/:id', function(req, res){
    console.log("Delete a tasks in todo");
    res.json({status: "SUCCESS"});
});

module.exports = router;