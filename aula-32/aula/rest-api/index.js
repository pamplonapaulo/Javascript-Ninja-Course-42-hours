'use strict';
console.log('Servidor NodeMon ouvindo!');

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

var users = [{
    username: 'joao',
    name: 'João',
    age: 30
}, {
    username: 'maria',
    name: 'Maria',
    age: 25
}];


// A ordem aqui também poderá importar:
app.use(bodyParser.urlencoded({ extended: false }));
// 'extended false' faz com que só aceite texto e json, não permitirá outros formatos.
app.use(cors());


app.get('/', function(request, response){
    response.json({ response: '<h1>Root / Home</h1>' });
});

app.get('/user', function(req, res){
    res.json({ response: 'The User' });
});

app.get('/user/:username', function(req, res){
    var username = req.params.username;
    
    var hasUser = users.some(function(user){
        return user.username === username;
    });
        
    if(hasUser) {
        return res.json(users.filter(function(user){
            return user.username === username;
        })[0]);    
    }
    res.status(404).json({ error: 'Usuário não encontrado' });
});

app.post('/user', function(req, res){
    var username = req.body.username;
    var age = req.body.age;
    var name = req.body.name;
    
    // Para evitar cadastros duplicados:
    // (início)
    var hasUser = users.some(function(user){
        return user.username === username;
    });
    if (!hasUser) {
        users.push({
            username: username,
            name: name,
            age: age
        });
    }
    // (fim)
    
    
    // Enquando o servidor estiver de pé, ele mantém todos os novos cadastros na memória. Nesta prática, o "Roberto" vai se multiplicar no array cada vez que o browser/página for atualizado. O que fazer para evitar cadastros duplicados? Para evitar, criamos a condição acima.
    
    res.json(users);
});

app.listen(3000);


/*

O legal mesmo de tal técnica é usá-la para cadastrar novos usuários. O objeto 'users', por exemplo, ele está funcionando enquanto a aplicação estiver de pé.

Podemos, portanto, cadastrar novos usuários nesse objeto 'users', temporariamente.

backup do objeto 'users' tal qual ele era antes de Daciuk demonstrar isso:

var users = {
    joao: {
        username: 'João',
        age: 30
    },
    maria: {
        username: 'Maria',
        age: 22
    },
    fernando: {
        username: 'Fernando',
        age: 20
    },
};



*/