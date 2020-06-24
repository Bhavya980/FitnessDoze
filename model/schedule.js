const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schedule = new Schema({
    scheduletitle: {
        type: String,
        required: true
    },
    
    category:{
        type: String,
        required: true
    },

    content:{
        type: String,
        required:true
    },

    imagelinksched:
    {
        type:String
    },  
},
);
module.exports = mongoose.model('Schedule', schedule); 