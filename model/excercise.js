const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let excercise = new Schema({
    excname: {
        type: String,
        required: true
    },
    
    category:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required:true
    },

    video:
    {
        type:String
    },  
},
);
module.exports = mongoose.model('Excercise', excercise); 