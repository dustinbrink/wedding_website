var config = require('../config.json');
var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        text: config.text,
        tabs: config.tabs
    });
});

router.post('/rsvp', function(req, res) {
    sendRSVPEmail(req.body.name, req.body.guests, req.body.comments);
    res.send('RSVP recieved');
});


sendRSVPEmail = function(name, guests, comments) {
    var transporter = nodemailer.createTransport();
    //var transporter = nodemailer.createTransport({
    //    service: 'gmail',
    //    auth: {
    //        user: 'sender@gmail.com',
    //        pass: 'password'
    //    }
    //});
    var params = {
        from: process.env.emailFrom,
        to: process.env.emailTo,
        subject: 'Wedding RSVP',
        text: 'Name: '+name + '\r\n' +
              '# of Guests: '+ guests + '\r\n' +
              'Comments: ' + comments
    }
    transporter.sendMail(params);
};

module.exports = router;
