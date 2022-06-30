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
       return await userCrudControler.find();
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



   async getAllJourneys(){
       return await this.journeyCrudControler.find();
   }

   async getJourneyDepartureArrival(departure, arrival){
       return await this.journeyCrudControler.getJourneyDepartureArrival(departure, arrival);
   }
}

module.exports = appController;