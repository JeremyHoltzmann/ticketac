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

   async getAllJourneys(){
       return await this.journeyCrudControler.find();
   }
}

module.exports = appController;