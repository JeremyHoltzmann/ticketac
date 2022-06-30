var express = require('express');
var router = express.Router();

var appControllerClass = require('../controller/appController');
var appController = new appControllerClass();


/* GET home page. */
router.get('/', async function(req, res, next) {
  console.log('GET JOURNEYS : ', await appController.getJourneyDepartureArrival('Lille','Bordeaux'));
  res.render('index', { title: 'Express' });
});

router.get('/addUser', async function(req, res, next){
  appController.addUser('test', 'Test 1', 'email@test.fr', '0000'); 
  res.render('index', { title: 'Express' });
});
  
router.get('/addJourney', async function(req, res, next){

});

module.exports = router;
