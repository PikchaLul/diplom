const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');
const util = require('util');

const User = require('../../models/User');

router.get('/initialization', async (req, res) => {
  superUser = await User.find({ role: "superuser" })
  res.send(superUser);
})

router.post('/initialization', (req, res) => {
  const login = req.body.login;
  const password = req.body.password;

  User.findOne({ login })
    .then(user => {
      if (!user) {
        bcrypt.hash(password, null, null, (err, hash) => {
          User.create({ login: login, password: hash, role: 'superuser' })
            .then(() => {
              res.send(this);
            })
            .catch(error => {
              res.status(404).send(error);
            });
        });
      } else {
        res.send(this);
      }
    })
})

router.get('/authorization', (req, res) => {
  console.log(req.session, 'fdgdfgfd');
  if(req.session.user)
    res.status(200).json({isAuthorization: true});
  else
    res.status(200).json({isAuthorization: false});
})

router.post('/authorization', (req, res, next) => {
  const { session } = req;
  const { login, password } = req.body;

  const comparerPassword = util.promisify(bcrypt.compare);

  User.findOne({
    login: login
  })
    .then(user => {
      if (!user) {
        console.log('1dsfdsfds');
        res.status(304);
      } else {
        comparerPassword(password, user.password)
        .then(result => {
          if (!result) {
            console.log('2dsfdsfds');
            res.status(305);
          } else {
            session.user = { id: user._id, name: user.login };
            console.log(session);
            res.status(200).end();
          }
        })
        .catch(err => {
          console.log('5dsfdsfds');
          console.log(err);
          res.status(404).end();
        })
      }
    })
    .catch(err => {
      console.log('4dsfdsfds');
      console.log(err);
      res.status(404).end();
    });
})

// GET for logout
router.get('/logout', (req, res) => {
  console.log('sdfgsgsdgdsgvgfbhhgf')
  // delete session object
  //req.session.destroy(() => {
    //res.redirect('/authentication/authorization');
  //});
});

module.exports = router;