var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var db = 'mongodb://register:registerpass@ds231559.mlab.com:31559/registration';


mongoose.connect(db, function (err) {
  if (err) {
    console.log('error', err);
  }
  else {
    console.log('Connected to mlab');
  }
});


router.get('/', function (req, res) {
  res.send('Hi server is working from api');
});

router.post('/register', function (req,res){
  let userData = req.body


  let registerUser = new User(userData);
  registerUser.save(function (error, regUser) {
    if(error){
      console.log(error);
    } else{
      res.status(200).send(regUser);
    }
  })
})

router.post('/login', function(req, res){
  let userData = req.body

  User.findOne({ email: userData.email}, function(err,user){
    if(err){
      console.log(err);
    } else{
      if(!user){
        res.status(401).send('Invalid email');
      }
      else {
        if(user.password !== userData.password){
          res.status(401).send('Invalid password');
        }
        else {
          res.status(200).send(user);
        }
      }
    }
  })
})


module.exports = router;
