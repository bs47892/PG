const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const eventSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    place:{
        type: String,
        required: true
    },
    date:{
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

module.exports=mongoose.model("Event", eventSchema);