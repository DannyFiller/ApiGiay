const {Shoe} = require("../model/shoe");

const ShoeController ={

    getAllShoe: async(req,res) =>{
        try{
            const shoes = await Shoe.find();
            res.status(200).json(shoes);
        }catch{
            res.status(500).json(err);
        }
    },

    postShoe: async(req,res) =>{
        try {
            const newShoe = new Shoe(req.body);
            const saveShoe = await newShoe.save();
            res.status(200).json(saveShoe);
        } catch {
            res.status(500).json(err);
        }
    },

    editShoe: async(req,res) =>{
        try {
            const shoeUpdate = await Shoe.findById(req.params.id);
            await shoeUpdate.updateOne({$set:req.body});
            res.status(200).json(shoeUpdate);
        } catch (error) {
            res.status(200).json(error);
        }
    }
};

module.exports = ShoeController;