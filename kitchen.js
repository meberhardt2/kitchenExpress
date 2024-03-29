/**************************************************************************/
/* changes to routes and classes should not be done here, just kitchen.js */
/**************************************************************************/

global.Dev = false;

const express = require("express");
const cors = require('cors');
const app = express();
const path = require('path');
const fs = require('fs');
//const https = require('https');
const http = require('http');
const ip = require('my-local-ip')();
const tesseract = require('node-tesseract');
const multer = require('multer');
const allowed_ip = ip.replace(/(?:\.\d+){1}$/, '');     //only allow devices on the same network (local) to make updates
const uploadMulter = multer({ dest: __dirname+'/uploads/' });
const creds = JSON.parse(fs.readFileSync(__dirname+'/../kitchenapi.json', 'UTF-8'));

const bookmark = require('./api/routes/bookmark');
const tags = require('./api/routes/tags');
const recipe = require('./api/routes/recipe');
const search = require('./api/routes/search');
const camera = require('./api/routes/camera');
const upload = require('./api/routes/upload');

app.use(cors());
app.use(express.json({limit: '50mb'}));			//<== no longer need body parser npm library. this replaces it
app.set('trust proxy', true);

http.createServer(app).listen(4100);		


//node-sqlite3 runs asynchronous, which leads to promise mess of chaining. better-sqlite3 runs synchronously
//this is opened only once, when node executes the file, it doesn't connect on each request like php
const DB_PATH = __dirname+'/sqlite.db';
const sqlite3 = require('better-sqlite3');
const DB = new sqlite3(DB_PATH, sqlite3.OPEN_READWRITE, (err) => {
	if (err) {
		console.error(err.message);
	}
});


//if any of the routes below are triggers on a request, it won't continue to check
//unless you use: 	app.post('/api/bookmark', (request, response, next) => {
//and then before the close of the function use next();
//but in this case we want the code to stop once it matches a routes
bookmark(app,DB,allowed_ip);
tags(app,DB,allowed_ip);
recipe(app,DB,creds,allowed_ip);
search(app,DB);
camera(app,DB,fs,tesseract,allowed_ip);
upload(app,DB,fs,tesseract,uploadMulter,allowed_ip);


//for anything that doesn't get matched above (the api), handle it below
app.get('*', (request,response) =>{
	//check if file exists, if so, service it. otherwise sent it to index.html for react router
	if(request.url === 'uploads/for_ocr.png'){
		response.sendFile(__dirname+'/uploads/for_ocr.png');
	}
	else if(request.url.includes('acme-challenge')){
		//this is for certbot for lets encrypt
		response.sendFile(path.join(__dirname+'/'+request.url));
	}
	else{
		fs.access(__dirname+'/www/'+request.url, fs.F_OK, (err) => {
			if (err) {
				response.sendFile(path.join(__dirname+'/www/index.html'));
			}
			else{
				response.sendFile(path.join(__dirname+'/www/'+request.url));
			}
		});
	}
});

