const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let gym = new Schema({
    gymname: {
        type: String
    },
    
    ownername:{
        type: String
    },

    email:{
        type:String
    },

    password:{
        type:String
    },

    area:{
        type: String
    },

    city:{
        type:String
    },

    state:
    {
        type:String
    },
    
    contactno:{
        type: String
    },

    website:{
        type:String
    },

    timmings:{
        type:String
    },

    fees:
    {
        type:String
    },

    imagelinkgym:
    {
        type:String
    },  
},
);
module.exports = mongoose.model('Gym', gym); 