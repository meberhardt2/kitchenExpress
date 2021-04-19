const express = require("express");
const cors = require('cors');
const app = express();
const path = require('path');
const fs = require('fs');
const https = require('https');
const http = require('http');
const ip = require('my-local-ip')();

app.use(cors());


if(!ip.includes("10.")){
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
	http.createServer(app).listen(2002);		
}

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

