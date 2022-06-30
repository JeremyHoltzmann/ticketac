var express = require('express');
var router = express.Router();

var appControllerClass = require('../controller/appController');
var appController = new appControllerClass();


/* GET home page. */
router.get('/', async function(req, res, next) {
  console.log('GET JOURNEYS : ', await appController.getJourneyDepartureArrival('Lille','Bordeaux'));
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

// Route Sign-Up
router.post('/sign-up', async function(req, res, next) {

  console.log("BODY : ", req.body);

  var user = await appController.addUser(req.body.name, req.body.firstname, req.body.email, req.body.password);  


  console.log('USERS : ', user);

  res.render('index', { title: 'Express' });
});

// Route Sign-In

router.post('/sign-in', async function(req, res, next) {

  console.log("BODY : ", req.body);

  var user = await appController.getUser(req.body.email, req.body.password);  

  console.log('USERS : ', user);

  res.render('index', { title: 'Express' });
});

router.get('/journey', async function (req, res, next){
  res.render('journey', {basketOrder: 0})
});

// Route findtrip


router.get('/findtrip', function(req, res, next) {

  res.render('findtrip', { title: 'findtrip' });
});

module.exports = router;


