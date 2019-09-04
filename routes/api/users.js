const express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
var mongoose = require('mongoose');

mongoose.set('debug', true);

var cors = require('cors');
router.all('*', cors());
router.options("/*", (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  return res.send(200);
});

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load models
const User = require("../../models/User");
const Friend = require("../../models/Friend");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 86400 // 1 day in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});


// @route POST api/users/add-friend
// @desc Write friend to database
// @access Public (need to figure out how to make private)
router.post('/add-friend', (req, res)=>{
  const newFriend = new Friend({
      name: req.body.name,
      species: req.body.species,
      gender: req.body.gender,
      neutered: req.body.neutered,
      owner: req.body.owner
  });
  
  User.findOne({_id: req.body.owner})
  .exec((err, user) => {
    user.friends.push(newFriend);
    user.save();
  })

  newFriend
    .save()
    .then(user => res.json(user))
    .catch(err => console.log(err));
    
});


// @route GET api/users/get-user 
// @desc Get friend from database
// @access Public
router.get('/get-user', (req, res) => {

  const local_id = new mongoose.Types.ObjectId(req.body.user);
  
  User.findById(local_id).then((user) =>{
    if(!user){
      return res.status(404).send('404 ERROR: User does not exist or can not be found');
    }
    console.log('request okay');
    return res.send(user);
  }).catch((e) => {
    res.status(400).send(e);
  })
});


// @route GET api/users/get-friends
// @desc Query friends based off search parameters
// @access Public
router.get('/get-friends', (req, res) =>{
  //need to make some sort of query/filter statement to return a list of friends
  var species_ = req.body.species;
  var gender_ = req.body.gender;
  var neutered_ = req.body.neutered;
  
  
  // query db
  Friend.find({species: species_},{gender:gender_},{neutered:neutered_}).then((friends_) =>{
    if(!friends_){
      return res.status(404).send('query error, nothing returned');
    }
    return res.send(friends_);
  }).catch((e) =>{
    res.status(400).send(4);
  })
});

module.exports = router;