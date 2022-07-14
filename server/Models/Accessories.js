const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const accessorySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: false,
    },
    image:{
        type: String,
        required: true,
    },
});

module.exports=mongoose.model("Accessory", accessorySchema);