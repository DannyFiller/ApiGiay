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
    Image:{
        type: String,
        require:true
    },
    Brand:{
        type: String,
        require:true
    },
    Size:{
        type: [String],
        require:true
    }

});
    
let Shoe = mongoose.model("Shoe",shoeSchema);
module.exports = {Shoe};