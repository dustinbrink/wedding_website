var config = require('../config.json');
var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();

router.get('/rsvp', function(req, res) {
    res.render('rsvp');
});

router.post('/rsvp', function(req, res) {
    sendRSVPEmail(req.body.name, req.body.guests, req.body.comments);
    res.send('Got a POST request');
});

sendRSVPEmail = function(name, guests) {
    var transporter = nodemailer.createTransport();
    //var transporter = nodemailer.createTransport({
    //    service: 'gmail',
    //    auth: {
    //        user: 'sender@gmail.com',
    //        pass: 'password'
    //    }
    //});
    var params = {
        from: config.email.from,
        to: config.email.to,
        subject: 'Wedding RSVP',
        text: 'Name: '+name + '\r\n' +
        '# of Guests: '+ guests + '\r\n' +
        'Comments: ' + comments
    }
    console.log('Sending email: ')
    console.log(params);
    transporter.sendMail(params);
};

module.exports = router;