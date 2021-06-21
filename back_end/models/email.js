const mongoose = require('mongoose');

let Email = mongoose.model('Email', {
    to: {type:String},
    subject: {type:String},
    message: {type:String}
});

module.exports = { Email };