const {Account} = require("../model/account");

const AccountController ={

    postAccount: async(req,res) =>{
        try {
            const newAcc = new Account(req.body);
            const saveAcc = await newAcc.save();
            res.status(200).json(saveAcc);
        } catch {
            res.status(500).json(err);
        }
    },

    getAllAccount: async(req,res)=>{
        try {
            const account = await account.find();
            res.status(200).json(account);
        } catch (error) {
            res.status(500).json(err);
        }
    }
}

module.exports=AccountController;