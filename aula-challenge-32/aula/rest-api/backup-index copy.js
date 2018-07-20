'use strict';

console.log('Servidor NodeMon ouvindo!');

var express = require('express');

var cors = require('cors');

var app = express();

app.use(cors());


app.get('/', function(request, response){
    response.json({ response: 'Home' });
});


app.get('/user', function(req, res){
    res.json({ response: 'User' });
});

var users = {
    joao: {
        nome: 'João',
        idade: 30
    },
    maria: {
        nome: 'Maria',
        idade: 22
    },
    fernando: {
        nome: 'Fernando',
        idade: 20
    },
};

app.get('/user/:username', function(req, res){
    var username = req.params.username;
    if(users[username]) {
        return res.json(users[username]);    
    }
    res.status(404).json({ error: 'Usuário não encontrado' });
});

//app.post('/user', function(req, res){
//    
//});

app.listen(3000);
