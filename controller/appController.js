var userModel = require('../models/usersModel');
var journeyModel = require('../models/journeyModel');

var userCrudControler = require('./userCrudController');
var journeyCrudControler = require('./journeyCrudController');

class appController  {
    userCrudControler;
    journeyCrudControler;

    constructor(){
        this.userCrudControler = new userCrudControler(userModel);
        this.journeyCrudControler = new journeyCrudControler(journeyModel);
    }

   async getAllUser(){
       return await this.userCrudControler.find();
   } 

   async getUser(email, password){
    return await this.userCrudControler.getUser(email, password);
}

   async addUser(name, firstName, email, password){
       return await this.userCrudControler.addUser(name, firstName, email, password);
   }

   async addJourneyToBasket(userId, journeyId){
       return await this.userCrudControler.addJourneyToBasketById(userId, journeyId);
   }

   async getUserBasket(userId){
       return await this.userCrudControler.getUserBasket(userId);
   }

   async getUserJourneys(userId){
       return await this.userCrudControler.getUserJourneys(userId);
   }

   async getAllJourneys(){
       return await this.journeyCrudControler.find();
   }

   async getJourneyDepartureArrival(departure, arrival){
       return await this.journeyCrudControler.getJourneyDepartureArrival(departure, arrival);
   }

   async getUserBasket(userId){
       return await this.userCrudControler.getUserBasket(userId);
   }

   async getUserJourneys(userId){
       return await this.userCrudControler.getUserJourneys(userId);
   }

   async addJourneysFromBasketToJourneys(userId){
       return await this.userCrudControler.addJourneysFromBasketToJourneys(userId)
   }
}

module.exports = appController;

