const {Account} = require("../model/account");

const AccountController ={

    postAccount: async(req,res)=>{
        try {
            const newAccount = new Account(req.body);
            const saveAccount = newAccount.save();
            res.status(200).json(saveAccount);
        } catch (error) {
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