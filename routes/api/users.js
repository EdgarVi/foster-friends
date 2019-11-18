const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
var mongoose = require('mongoose');
mongoose.set('debug', true);


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
        password: req.body.password,
        userType: req.body.userType
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
  
  var newFriendInfo = new mongoose.Schema()
  const newFriend = new Friend({
      name: req.body.name,
      species: req.body.species,
      gender: req.body.gender,
      neutered: req.body.neutered,
      owner: req.body.owner,
      care: req.body.care
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

// @route GET api/users/get-user-data (doesn't work)
// @desc Get friend from database
// @access Public
router.get('/get-user', (req, res) => {
  var id = new mongoose.Types.ObjectId(req.body.user);
  User.findOne({_id: id}).then((user) =>{
    if(!user){
      return res.status(404).send('user does not exist');
    }
    console.log('request okay');
    return res.send(user);
  }).catch((e) => {
    res.status(400).send(e);
  })
});



// @route GET api/users/search-friends (doesn't work)
// @desc Query friends based off search parameters
// @access Public
router.get("/get-friends", (req, res) =>{
  var species_ = req.query.species;
  var gender_ = req.query.gender;
  var neutered_ = req.query.neutered;
  console.log(req.query);
  
  // query db
  Friend.find({species:species_, gender:gender_}).then((_friends) => {
    return res.send(_friends);
  }).catch((e) => {
    res.status(400).send(e);
  });
});

module.exports = router;