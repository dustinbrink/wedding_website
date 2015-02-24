var config = require('../config.json');
var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
    console.log(req.body.name);
    console.log(req.body.guests);

    sendRSVPEmail(req.body.name, req.body.guests);

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
        '# of Guests: '+ guests
    }
    console.log('Sending email: ')
    console.log(params);
    transporter.sendMail(params);
};

module.exports = router;
