const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');

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
  console.log('sfsdfsdfsdf');
  if(req.session.user)
    res.status(200).json({isAuthorization: true});
  else
    res.status(200).json({isAuthorization: false});
})

router.post('/authorization', (req, res, next) => {
  const login = req.body.login;
  const password = req.body.password;

  console.log(req.session.user);

  User.findOne({
    login: login
  })
    .then(user => {
      if (!user) {
        console.log('1dsfdsfds');
        res.status(304);
      } else {
        bcrypt.compare(password, user.password, function (err, result) {
          if (!result) {
            console.log('2dsfdsfds');
            res.status(305);
          } else {
            req.session.user = {id: user._id, name: user.login}
            console.log(req.session.user);
            res.status(200).end();
          }
        });
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