const {Brand} = require("../model/brand");

const BrandController = {
    postBrand: async(req,res)=>{
        try {
            const newBrand =  new Brand(req.body);
            const saveBrand = newBrand.save();
            res.status(200).json(saveBrand);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = BrandController;