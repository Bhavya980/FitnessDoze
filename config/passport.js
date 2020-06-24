const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Load User model
const Gym = require('../model/gym');
const Admin = require('../model/admin');

module.exports = function(passport) {
  passport.use('gym-login',
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      Gym.findOne({
        email: email
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );

  // passport.serializeUser(function(user, done) {
  //   done(null, user.id);
  // });

  // passport.deserializeUser(function(id, done) {
  //   Gym.findById(id, function(err, user) {
  //     done(err, user);
  //   });
  // });


  passport.use('admin-login',
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      Admin.findOne({
        email: email
      }).then(admin => {
        if (!admin) {
          return done(null, false, { message: 'That email is not registered' });
        }

        // Match password
        bcrypt.compare(password, admin.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, admin);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );

  passport.serializeUser(function(user, done) {
    var key;
    if(user instanceof Gym) {
          key = {
              id: user.id,
              type: 1
          }
      } else if (user instanceof Admin) {
          key = {
              id: user.id,
              type: 2
          }
      }
    done(null, key);
  });
  
  passport.deserializeUser(function(key, done) {
        if(key.type === 1){
            Gym.findById(key.id, function(err, user) {
                done(err, user);
            });
        } else if (key.type === 2){
            Admin.findById(key.id, function(err, user) {
                done(err, user);
            });
        }
    });
};
  

