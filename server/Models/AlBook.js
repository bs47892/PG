const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const bookSchema = new Schema({
    name:{
        type: String,
        required: true
    },
   author:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    available:{
        type: Boolean,
    },
    translator:{
        type: String,
    },
});

module.exports=mongoose.model("AlBook", bookSchema);