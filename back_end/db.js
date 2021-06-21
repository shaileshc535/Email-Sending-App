const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Email_Sending_App',  { useNewUrlParser: true, useUnifiedTopology: true } , (err) => {
    if(!err)
        console.log('Database Connection Success...');
    else
        console.log('Error in Database Connection :' +JSON.stringify(err, undefined, 2));
    
});

module.exports = mongoose;