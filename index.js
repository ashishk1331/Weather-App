require('dotenv').config();
const fetch = require('fetch');
const express = require('express');
const svg = require('./decide_svg.js');
const app = express();

app.use(express.static('src'));

app.get('/weather', async (req,res) => {
	let hours = parseInt(req.query.hours);

	await fetch.fetchUrl(`https://api.openweathermap.org/data/2.5/weather?lat=26.28494&lon=82.080747&appid=${process.env.API_KEY}&units=metric`,(err , meta , body) => {
			if(!err){
				let data = JSON.parse(body.toString());
				data.hours = hours;
				data.svg = svg(data);
				res.send(data);
			} else {
				res.send(err);
			}
	});
});


app.listen(8080, ()=>{
	console.log('serving on port 8080');
});