const genericCrudController = require("./genericCrudController");


class journeyCrudControler extends genericCrudController
{

    async getJourneyDepartureArrival(departure, arrival){
        return await this.modelController.find({$and: [{departure: new RegExp(departure, 'i')}, {arrival: new RegExp(arrival, 'i')}]});
    }

    async getJourneyDepartureArrivalDate(departure, arrival, date){
        return await this.modelController.find({$and: [{departure: departure}, {arrival: arrival}, {date: date}]});
    }
}

module.exports = journeyCrudControler;