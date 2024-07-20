const {Order} = require("../model/order");

const OrderController ={

    getAllOrder: async(req,res) =>{
        try{
            const orders = await Order.find().populate("shoe");
            res.status(200).json(orders);
        }catch (err){
            res.status(500).json(err);
        }
    },

    postOder: async(req,res) =>{
        try {
            const newOrder = new Order(req.body);
            const saveOrder = await newOrder.save();
            res.status(200).json(saveOrder);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // editShoe: async(req,res) =>{
    //     try {
    //         const shoeUpdate = await Shoe.findById(req.params.id);
    //         await shoeUpdate.updateOne({$set:req.body});
    //         res.status(200).json(shoeUpdate);
    //     } catch (error) {
    //         res.status(200).json(error);
    //     }
    // },

    // deleteShoe: async(req,res) => {
    //     try {
    //         const delShoe = await Shoe.findByIdAndDelete(req.params.id);
    //         res.status(200).json(delShoe); 
    //     } catch (error) {
    //         res.status(500).json(error); 
    //     }

    // }
};

module.exports = OrderController;