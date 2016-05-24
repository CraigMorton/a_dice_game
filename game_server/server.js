var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
// var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var url = 'mongodb://localhost:27017/a_dice_game';


app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/game_sessions', function(req,res){
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('game_sessions');
    collection.find({}).toArray(function(err, docs) {
      res.json(docs);
      db.close();
    });
  });
})

app.get('/api/game_sessions/:id', function(req,res){
  var id = req.params.id
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('game_sessions');
    collection.find(id).toArray(function(err, docs) {
      res.json(docs);
      db.close();
    });
  });
})

app.post('/api/game_sessions', function(req,res){
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('game_sessions');
    // game_object_title = "game_session-" + req.body.gameData.createdAt
    collection.insert({"game_session": req.body.sessionData});
    res.status(200).end();
    db.close();
  });
})

app.get('/api/game_data', function(req,res){
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('game_data');
    collection.find({}).toArray(function(err, docs) {
      res.json(docs);
      db.close();
    });
  });
})

app.get('/api/game_data/:id', function(req,res){
  var id = req.params.id
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('game_data');
    collection.find(id).toArray(function(err, docs) {
      res.json(docs);
      db.close();
    });
  });
})

app.post('/api/game_data', function(req,res){
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('game_data');
    // game_object_title = "game_session-" + req.body.gameData.createdAt
    collection.insert({"game_session": req.body.gameData});
    res.status(200).end();
    db.close();
  });
})



var server = app.listen(1784, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('a_dice_game gameData API listening at http://%s:%s', host, port);
});
