const express = require("express");
const app = express(); 
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const urlencodedParser = bodyParser.urlencoded({extended:false});
const fetch = require("node-fetch");


const port = process.env.PORT
const apiKey = process.env.API_KEY


app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
    
app.use(express.static(path.join(__dirname, 'client/build')));   

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'../client/build/index.html'));
    // res.send("Server is running")
}) 
let zipcode;

app.post('/server.js', urlencodedParser, (req, res) => {
    zipcode = req.body.zipcode;
    if(zipcode.length === 5) {
        res.redirect("/current-forecast")
    } else {
        res.redirect('/error')
    }
})

app.get('/current-forecast', (req, res) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${apiKey}&units=imperial`)
    .then(res => res.json())
    .then(data => res.send(data))
})
