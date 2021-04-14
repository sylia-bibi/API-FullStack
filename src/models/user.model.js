const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        lowercase: true
    },
    lastName: {
        type: String,
        required: true,
    },
   
    password: {
        type: String,
        required: true,
    },
    
    email: {
        type: String,
        unique: true
    },
    isAdmin: {
        type: Boolean
    },
    age: {
        type: Number
    },
    mobile:{
        type: Number

    },
    adress:{
        type: String,
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);