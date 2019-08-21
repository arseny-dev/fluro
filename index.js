var express = require('express');
var bodyParser = require('body-parser');
var Mailgun = require('mailgun-js');
var app = express();
const cors = require('cors');
const logger = require('morgan');

var api_key = '90533bcac8b17e228dcd5e6f6392b38c-898ca80e-39ae0c01';
var domain = 'sandboxf7223b77d29e4d7f8a2876280ff01d3f.mailgun.org';
app.use(
	cors({
		origin: '*',
		credentials: true
	})
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/api/form', function(req, res) {
	console.log('clicked');
	console.log(req);
	console.log('clicked1');
	console.log('clicked2');

	var nodemailer = require('nodemailer');
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'arseny910124@gmail.com',
			pass: 'qwer1234!@#$%^&*('
		}
	});
	console.log(transporter);
	var mailOptions = {
		from: req.body.email,
		to: 'arseny910124@gmail.com',
		subject: req.body.subject,
		text: req.body.name + ' sent ' + req.body.message
	};
	console.log(mailOptions);

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
});
app.get('/', function(req, res) {
	//  res.sendFile(path.join(__dirname + '/client/build/index.html'));
	//  res.render('client/build/index.html');
	res.send({ res: 'ok' });
});
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page
	res.status(err.status || 500);
	res.send('error'); //this or res.status(err.status || 500).send('error')
});
app.listen(3030);
