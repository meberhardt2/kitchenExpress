const express = require("express");
const cors = require('cors');
const app = express();
const path = require('path');
const fs = require('fs');
const https = require('https');
const http = require('http');
const ip = require('my-local-ip')();
const bookmark = require('./api/routes/bookmark');
const tags = require('./api/routes/tags');
const recipe = require('./api/routes/recipe');
const search = require('./api/routes/search');
const camera = require('./api/routes/camera');
const upload = require('./api/routes/upload');
const tesseract = require('node-tesseract');
const multer = require('multer');
const creds = JSON.parse(fs.readFileSync(__dirname+'/../kitchenapi.json', 'UTF-8'));
const allowed_ip = ip.replace(/(?:\.\d+){1}$/, '');     //only allow devices on the same network (local) to make updates
const uploadMulter = multer({ dest: __dirname+'/uploads/' });

app.use(cors());

//this isn't  needed as it's now behind a reverse proxy, the ssl certs are handled by it
/*
if(!ip.includes("10.192.106")){
	const sslOptions = {
		key: fs.readFileSync("/etc/letsencrypt/live/eberhardt.cloud/privkey.pem"),
		cert: fs.readFileSync("/etc/letsencrypt/live/eberhardt.cloud/fullchain.pem")
	};

	https.createServer(sslOptions, app).listen(2003);

	http.createServer(function (req, res) {
		res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
		res.end();
	}).listen(2002);	
}
else{
	http.createServer(app).listen(4100);		
}
*/
http.createServer(app).listen(4100);		

//send all traffic/file requests to the react app in the build folder
app.get('*', (request,response) =>{
	//check if file exists, if so, service it. otherwise sent it to index.html for react router
	if(request.url === 'uploads/for_ocr.png'){
		response.sendFile(__dirname+'/uploads/for_ocr.png');
	}
	else if(request.url.includes('acme-challenge')){
		//this is for certbot for lets encrypt
		response.sendFile(path.join(__dirname+'/'+request.url));
	}
	else if(request.url.includes('/api')){
		//node-sqlite3 runs asynchronous, which leads to promise mess of chaining. better-sqlite3 runs synchronously
		const DB_PATH = __dirname+'/sqlite.db';
		const sqlite3 = require('better-sqlite3');
		const DB = new sqlite3(DB_PATH);
		//const DB = new sqlite3(DB_PATH, { verbose: console.log });

		bookmark(app,DB,allowed_ip);
		tags(app,DB,allowed_ip);
		recipe(app,DB,creds,allowed_ip);
		search(app,DB);
		camera(app,DB,fs,tesseract,allowed_ip);
		upload(app,DB,fs,tesseract,uploadMulter,allowed_ip);
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

