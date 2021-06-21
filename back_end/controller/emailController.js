const express = require('express');

let router = express.Router();
let ObjectId = require('mongoose').Types.ObjectId;

let { Email } = require('../models/email');


// Get All the messages from Database
router.get('/', (req, res) => {
    Email.find((err, doc) => {
        if(!err) {res.send(doc); }
        else { console.log('Error in Getting Message: ' + JSON.stringify(err, undefined, 2)); }
    });
});

// Get Message by specific ID
router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No records with given Id : ${req.params.id}` );

    Email.findById(req.params.id, (err, doc) => {
        if(!err){ res.send(doc); }
        else{ console.log('Error in Retriving Message: ' + JSON.stringify(err, undefined, 2)); }
    });
});


// Post Message in database by specific id
router.post('/', (req, res) => {
    let email = new Email ({
        to: req.body.to,
        subject: req.body.subject,
        message: req.body.message,
    });

    email.save((err, doc) => {
        if(!err) {res.send(doc); }
        else{ console.log('Error in Message Save: ' + JSON.stringify(err, undefined, 2)); }
    });
});

// Update message Operation In DataBase
router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No records with given Id : ${req.params.id}`);

    let email = {
        to: req.body.to,
        subject: req.body.subject,
        message: req.body.message
    }
    Email.findByIdAndUpdate(req.params.id, { $set: email}, { new: true}, (err, doc) => {
        if(!err) { res.send(doc); }
        else{ console.log('Error in message Update: ' + JSON.stringify(err, undefined, 2)); }
    });
});

// Delete from Database
router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No records available with given id: ${req.params.id}`);
    Email.findByIdAndRemove(req.params.id, (err, docs) => {
        if(!err) {res.send(docs); }
        else{ console.log('Error in Message Delete: ' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;