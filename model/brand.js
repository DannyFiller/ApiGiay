const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
    BrandName:{
        type: String,
        require:true
    },
});
let Brand = mongoose.model("Brand",brandSchema);
module.exports = {Brand};