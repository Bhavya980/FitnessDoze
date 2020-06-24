const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let blog = new Schema({
    blogtitle: {
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

    imagelinkblog:
    {
        type:String
    },  
},
);
module.exports = mongoose.model('Blog', blog); 