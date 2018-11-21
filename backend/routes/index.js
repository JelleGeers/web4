var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Examennaam = mongoose.model('Examennaam');
let Vraag = mongoose.model('Vraag');
let jwt = require('express-jwt');
let User = mongoose.model('User');

let auth = jwt({
  secret: process.env.EXAMENNAAM_BACKEND_SECRET
});

router.get('/API/examennamen/', function (req, res, next) {
  let query = Examennaam.find().populate('vragen');
  query.exec(function (err, examennamen) {
    if (err) {
      return next(err);
    }
    res.json(examennamen);
  });
});

router.post('/API/examennamen/', auth, function (req, res, next) {
  Vraag.create(req.body.vragen, function (err, vras) {
    if (err) {
      return next(err);
    }
    let examennaam = new Examennaam({ name: req.body.name, created: req.body.created });
    examennaam.vragen = vras;
    examennaam.maker = req.user.username;
    examennaam.save(function (err, exa) {
      if (err) {
        Vraag.remove({ _id: { $in: examennaam.vragen } });
        return next(err);
      }
      res.json(exa);
    });
  });
});

router.param('examennaam', function (req, res, next, id) {
  let query = Examennaam.findById(id).populate('vragen');
  query.exec(function (err, examennaam) {
    if (err) {
      return next(err);
    }
    if (!examennaam) {
      return next(new Error('not found ' + id));
    }
    req.examennaam = examennaam;
    return next();
  });
});

router.get('/API/examennaam/:examennaam', function (req, res, next) {
  res.json(req.examennaam);
});

router.delete('/API/examennaam/:examennaam', auth, function (req, res) {
  Vraag.remove({ _id: { $in: req.examennaam.vragen } }, function (err) {
    if (err) return next(err);
    req.examennaam.remove(function (err) {
      if (err) {
        return next(err);
      }
      res.json(req.examennaam);
    });
  });
});

router.post('/API/examennaam/:examennaam/vragen', auth, function (req, res, next) {
  let vra = new Vraag(req.body);

  vra.save(function (err, vraag) {
    if (err) return next(err);

    req.examennaam.vragen.push(vraag);
    req.examennaam.save(function (err, exa) {
      if (err) return next(err);
      res.json(vraag);
    });
  });
});

router.post('/API/reset_db', (req, res, next) => {
  Examennaam.find({}, (err, examennamen) => {
      examennamen.forEach(examennaam => examennaam.remove());
  });
  User.find({}, (err, users) => {
      users.forEach(user=> user.remove());
  });
  res.status(204).end();
});

module.exports = router;
