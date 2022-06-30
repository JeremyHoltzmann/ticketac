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

    async addJourneyToUserById(userId, journeyId)
    {
        var user = await modelController.findById(userId);

        await modelController.updateOne({_id: userID},
            { $addToSet: {journeys: journeyId}});
    }
    
}

module.exports = userCrudControler;