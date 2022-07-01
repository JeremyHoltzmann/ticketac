const genericCrudController = require("./genericCrudController");


class userCrudControler extends genericCrudController
{
    async addUser(name, firstName, email, password){
       
        var user = await this.modelController.findOne({email: email});
        if (user)    
            return undefined;


        var newUser = new this.modelController(
            {
                name: name,
                firstName: firstName,
                email: email,
                password: password,
            }
        )
        return await newUser.save();
    }

   async getUser(email, password)
    {
        var user = await (await this.modelController.findOne({$and: [{email: email}, {password: password}]}));
        return user;
    }

    async addJourneyToUserById(userId, journeyId)
    {
        var user = await modelController.findById(userId);

        await this.modelController.updateOne({_id: userID},
            { $addToSet: {journeys: journeyId}});
    }

    async addJourneyToBasketById(userId, journeyId)
    {
        var user = await this.modelController.findById(userId);

        await this.modelController.updateOne({_id: userId},
            { $addToSet: {basket: journeyId}});
    }

    async clearUserBasket(userId){
        await this.modelController.updateOne({_id: userId},
            { $set: {basket: []}});
    }
    
    async getUserBasket(userId){
        var user = await this.modelController.findById(userId).populate('basket');
        console.log("USER BASKET : " + user);
        return user.basket;
    }

    async getUserJourneys(userId){
        var user = await this.modelController.findById(userId).populate('journeys');
        return user.journeys;
    }

    async addJourneysFromBasketToJourneys(userId){
        var basket = await this.getUserBasket(userId);

        this.clearUserBasket(userId);
        await this.modelController.updateOne({_id: userId},
            { $push: {journeys: basket}});
    }
}

module.exports = userCrudControler;