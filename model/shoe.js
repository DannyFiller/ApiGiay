const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema({
    NameShoe:{
        type: String,
        require:true
    },
    Price:{
        type: Number,
        require:true
    },
    Size:{
        type: Number,
        require:true
    },
    Image:{
        type: String,
        require:true
    },
    Brand:{
        type:mongoose.Types.ObjectId,
        ref: "Brand"
    }

});
    
let Shoe = mongoose.model("Shoe",shoeSchema);
module.exports = {Shoe};