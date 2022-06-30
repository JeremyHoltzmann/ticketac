const genericCrudController = require("./genericCrudController");


class userCrudControler extends genericCrudController
{
    async addUser(name, firstName, email, password){
       
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
        var user = await (await this.modelController.findOne({$and: [{email: email}, {password: password}]})).populate('journeys').populate('basket');
        return user;
    }

    async addJourneyToUserById(userId, journeyId)
    {
        var user = await modelController.findById(userId);

        await modelController.updateOne({_id: userID},
            { $addToSet: {journeys: journeyId}});
    }

    async addJourneyToBasketById(userId, journeyId)
    {

        await modelController.updateOne({_id: userId},
            { $addToSet: {basket: journeyId}});
    }

    async clearUserBasket(userId){
        await modelController.updateOne({_id: userId},
            { $set: {basket: []}});
    }
    
}

module.exports = userCrudControler;