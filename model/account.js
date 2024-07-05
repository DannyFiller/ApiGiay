const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    Email:{
        type : String
    },
    Password:{
        type : String
    },
    UserName:{
        type : String
    },
    PhoneNumber:{
        type : Number
    },
});

let Account = mongoose.model("Account",accountSchema);
module.exports={Account};
