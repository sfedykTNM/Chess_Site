//Load HTTP module

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const cors = require('cors');
const UserService = require('./Services/UserService.ts');

const app = express();

const port = 8080;
const dbPort = 5431;


console.log(
    UserService.findUser(123)
)
var allowedOrigins = 'http://localhost:3000'
var jsonParser = bodyParser.json();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
    "origin" : allowedOrigins
}));

app.get('', (req, res) => {
    res.sendStatus(200);
    console.log('app got get request');
});

app.post('/login',jsonParser, (req,res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(port, () => {
    console.log('app is listening');
});
