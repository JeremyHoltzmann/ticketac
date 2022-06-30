class genericCrudController  {
    modelController = {};
    
    constructor(model)
    {
        this.modelController = model;
    }

    getModel ()
    {
        return this.modelController;
    }

    async find()
    {
        return await this.modelController.find();
    }

    async findById(id)
    {
        return await this.modelController.findById(id);
    }

    async deleteById(id){
        return await this.modelController.deleteById(id);
    }

    async findOneAndUpdate(element)
    {
        return await this.modelController(element._id, element);
    }

    async createAndSave(element){
        await element.save();
    }
}

module.exports = genericCrudController;