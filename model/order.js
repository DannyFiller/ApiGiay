const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    
    price:{
        type: Number,
        require:true
    },
    quatity:{
        type: Number,
        require:true
    },
    shoe:{
        type:mongoose.Types.ObjectId,
        ref: "Shoe"
    }

});
    
let Order = mongoose.model("Order",orderSchema);
module.exports = {Order};