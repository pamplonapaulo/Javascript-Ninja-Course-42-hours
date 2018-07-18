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


// Inclusão apenas para o caso de POST:
app.post('/user', function(req, res){
    // Note que passamos a mesma URL usada logo acima no GET, embora o verbo seja POST.
    
});

/*
Mas ATENÇÃO: dessa vez, lá no front-end, DIFERENTE do que fizemos anteriormente no verbo GET, agora para o verbo POST os dados do usuário estão sendo passados dentro do 'ajax.send' (isto é, não mais dentro da própria URL na abertura da conexão 'ajax.open'):

ajax.send('nome=roberto&idade=32');

E por isso, para mandar via 'send', nós temos que obter os dados no corpo da requisição. E no Node.js, o corpo da requisição é o 'req.body' (ou 'request.body').

E esse 'corpo da requisição' requer um PARSE, precisa 'parsear' os dados para um objeto, para poder pegar o 'nome' e a 'idade'.

Para tal, é necessária a instalação de um 'body parser' via Node Package Manager (npm). Que deve ser feita no Terminal da sequinte forma:

npm install --save body-parser
*/

app.listen(3000);


/*















*/
















