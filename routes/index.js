var express = require('express');
var router = express.Router();

var appControllerClass = require('../controller/appController');
var appController = new appControllerClass();


/* GET home page. */
router.get('/', async function(req, res, next) {
  res.redirect('/login');
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

// Route Sign-Up
router.post('/sign-up', async function(req, res, next) {


  var user = await appController.addUser(req.body.name, req.body.firstname, req.body.email, req.body.password);  

  res.render('index', { title: 'Express' });
});

// Route Sign-In

router.post('/sign-in', async function(req, res, next) {


  var user = await appController.getUser(req.body.email, req.body.password);  
  req.session.user = user;
  res.render('findTrip', { title: 'Express' });
});
router.get('/sign-in', async function(req, res, next) {
  res.render('findTrip', { title: 'Express' });
});


router.get('/journey', async function (req, res, next){
  res.render('journey', {basketOrder: 0})
});

// Route findtrip


router.get('/findtrip', async function(req, res, next) {
  if(req.session.user== undefined)
  {
    res.redirect('/login');
    return;
  }
  res.render('findTrip');
});

router.post('/journeys', async function(req, res, next) {
  if(req.session.user== undefined)
  {
    res.redirect('/login');
    return;
  }
  res.render('journey', {journeys: await appController.getJourneyDepartureArrivalDate(req.body.departure, req.body.arrival, req.body.date), date: req.body.date});
});


// Route basket


router.get('/basket', async function(req, res, next) {
  if(req.session.user== undefined)
  {
    res.redirect('/login');
    return;
  }
  var basket = await appController.getUserBasket(req.session.user._id);
  res.render('basket', { title: 'basket' });
});



// Route mytickets


router.get('/mytickets', function(req, res, next) {
  if(req.session.user== undefined)
  {
    res.redirect('/login');
    return;
  }
  res.render('mytickets', { title: 'mytickets' });
});


router.get('/addToBasket', async function(req, res, next) {
  if(req.session.user== undefined)
  {
    res.redirect('/login');
    return;
  }

  await appController.addJourneyToBasket(req.session.user._id, req.query.journeyid);
  console.log("BASKET ROUTE ", await appController.getUserBasket(req.session.user._id));
  res.render('mytickets', { basket: await appController.getUserBasket(req.session.user._id) });
});

// Route modal confirmation achat


router.get('/confirmAchat', async function(req, res, next) {
  if(req.session.user== undefined)
  {
    res.redirect('/login');
    return;
  }
  await appController.addJourneysFromBasketToJourneys(req.session.user._id);
  res.render('lastTrip', {basket: await appController.getUserJourneys(req.session.user._id)});
});


router.get('/lasttrip', async function(req, res, next) {
  if(req.session.user== undefined)
  {
    res.redirect('/login');
    return;
  }
  res.render('lastTrip', {basket: await appController.getUserJourneys(req.session.user._id)});
});

module.exports = router;


